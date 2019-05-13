<template>
    <div>
        <h2>Tous les athletes</h2>
        <ul v-for="athletes in allathletes" :key="athletes.id">
            <li>{{ athletes.name}}</li>
        </ul>
        <div class="pagination">
            <button v-on:click="fetchPaginationAthletes(pagination.prev_page_url)">Précédent</button>
            <span>Page {{pagination.current_page}} of {{pagination.last_page}}</span>
            <button v-on:click="fetchPaginationAthletes(pagination.next_page_url)">Suivant</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 allathletes: [],
                url: 'api/allathletes',
                pagination: [],
            }
        },
        created(){
            this.fetchAthletes();
        },
        methods:{
            fetchAthletes(){
                let $this = this
                axios.get(this.url).then(response => {
                    console.log(response.data)
                    this.allathletes = response.data.data
                    $this.makePagination(response.data)
                })

            },
            makePagination(data){
                let pagination = {
                    current_page: data.meta.current_page,
                    last_page: data.meta.last_page,
                    next_page_url: data.links.next,
                    prev_page_url: data.links.prev

                }
                this.pagination = pagination

            },
            fetchPaginationAthletes(url){
                this.url = url
                this.fetchAthletes()
            }
        }
    }

</script>
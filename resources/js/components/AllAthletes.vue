<template>
    <div>
        <div class="cont-list">
            <h2>Tous les athletes</h2>
            <ul class="list-data" v-for="athletes in allathletes" :key="athletes.id">
                <li><p><router-link :to="`/athlete/${athletes.id}`">{{ athletes.name}}</router-link> </p><button @click="deleteAthlete(athletes.id)">Delete</button></li>

            </ul>
            <div class="pagination">
                <button class="pagination-btn" v-on:click="fetchPaginationAthletes(pagination.prev_page_url)">Précédent</button>
                <span>Page {{pagination.current_page}} of {{pagination.last_page}}</span>
                <button class="pagination-btn" v-on:click="fetchPaginationAthletes(pagination.next_page_url)">Suivant</button>
            </div>
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
            },
            deleteAthlete(id) {
                if (confirm('Are You Sure?')) {
                    axios.delete(`api/athletes/${id}`)
                        .then(data => {
                            alert('athletes Removed');
                            this.fetchAthletes();
                        })
                        .catch(err => console.log(err));
                }
            },
        }
    }

</script>

<style scoped>

    .cont-list{
        display: block;
        margin: auto;
        width: 60%;
    }
    a{
        text-decoration: none;
        color: #3d4852;
        transition: 0.5s;
    }
    a:hover{
        text-decoration: none;
        color:#FF4B2B
    }
    h2{
        margin-bottom: 5vh;
    }
    .list-data{
        width: 80%;
    }
    .list-data li{
        display: flex;
        width: 100%;
        padding: 1vh 0 1vh 0;
    }
    .list-data p{
        width: 50%;
    }
    .list-data li button{
        background-color: transparent;
        border: 1px solid red;
        padding: 1%;
        font-size: 1vw;
        color: red;
        transition: 0.5s;
        cursor:pointer;
        border-radius: 0.25rem;
        width: 12%;
    }
    .list-data li button:hover{
        background-color: red;
        color: #FFFFFF;
    }

    .pagination-btn{
        background-color: #FF4B2B;
        padding: 1% 2% 1% 2%;
        font-size: 0.8vw;
        border: none;
        color: #FFFFFF;
        transition: 0.5s;
        cursor:pointer;
        border-radius: 0.25rem;
    }


</style>
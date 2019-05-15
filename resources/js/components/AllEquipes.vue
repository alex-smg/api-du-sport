<template>
    <div>
        <div class="cont-list">
            <h2>Toutes les equipes</h2>
            <ul class="list-data" v-for="equipes in allequipes" :key="equipes.id">
                <li><p>{{ equipes.name}} </p><button @click="deleteEquipe(equipes.id)">Delete</button></li>
            </ul>
            <div class="pagination">
                <button class="pagination-btn" v-on:click="fetchPaginationEquipe(pagination.prev_page_url)">Précédent</button>
                <span>Page {{pagination.current_page}} of {{pagination.last_page}}</span>
                <button class="pagination-btn" v-on:click="fetchPaginationEquipe(pagination.next_page_url)">Suivant</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                allequipes: [],
                url: 'api/all_equipes',
                pagination: [],
            }
        },
        created(){
            this.fetchEquipes();
        },
        methods:{
            fetchEquipes(){
                let $this = this
                axios.get(this.url).then(response => {
                    console.log(response.data)
                    this.allequipes = response.data.data
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
            fetchPaginationEquipe(url){
                this.url = url
                this.fetchEquipes()
            },
            deleteEquipe(id) {
                if (confirm('Are You Sure?')) {
                    axios.delete(`api/equipe/${id}`)
                        .then(data => {
                            alert('equipe Removed');
                            this.fetchEquipes();
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
    h2{
        margin-bottom: 5vh;
    }
    .list-data{
        width: 80%;
    }
    .list-data li{
        display: flex;
        width: 100%;
        margin: auto;
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
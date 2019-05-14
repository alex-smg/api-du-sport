<template>
    <div>
        <h2>Tous les athletes</h2>
        <ul class="list-data" v-for="athletes in allathletes" :key="athletes.id">
            <li><p>{{ athletes.name}} </p><button @click="deleteArticle(athletes.id)">Delete</button></li>

        </ul>
        <div class="pagination">
            <button class="pagination-btn" v-on:click="fetchPaginationAthletes(pagination.prev_page_url)">Précédent</button>
            <span>Page {{pagination.current_page}} of {{pagination.last_page}}</span>
            <button class="pagination-btn" v-on:click="fetchPaginationAthletes(pagination.next_page_url)">Suivant</button>
        </div>
        <form method="POST" action="add/athlete" @submit.prevent="addAthlete()">
            <h2>Ajouter un athlète</h2>
            <label>Nom</label>
            <input type="text" name="name" v-model="name"/>
            <label>Description</label>
            <textarea name="description" v-model="description"></textarea>
            <label>Equipe</label>
            <select name="equipe_id" v-model="equipe_id">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button class="pagination-btn" type="submit">Enregistrer</button>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 allathletes: [],
                url: 'api/allathletes',
                pagination: [],
                name: null,
                description : null,
                equipe_id:null
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
            addAthlete(){
                axios.post('api/add/athlete', {
                    name: this.name,
                    description: this.description,
                    equipe_id: this.equipe_id
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            },
            deleteArticle(id) {
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
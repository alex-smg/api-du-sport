<template>
    <div>
        <form id="add-data" method="POST" action="add/athlete" @submit.prevent="addAthlete()">
            <h2>Ajouter un athlète</h2>
            <div class="cont-input">
                <label>Nom</label>
                <input type="text" name="name" v-model="name"/>
            </div>
            <div class="cont-input">
                <label>Equipe</label>
                <select   name="equipe_id" v-model="equipe_id">
                    <option v-for="equipe in allequipes" :key="equipe.id" :value="equipe.id">{{ equipe.name }}</option>
                </select>
            </div>
            <div class="cont-input">
                <label>Description</label>
                <textarea name="description" v-model="description"></textarea>
            </div>

            <button class="pagination-btn" type="submit">Enregistrer</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'FormAddAthlete',
        data(){
            return{
                name: null,
                description : null,
                equipe_id:null,
                edit: false,
                allequipes:[]
            }
        },
        created(){
          this.fetchEquipes()
        },
        methods:{
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
            fetchEquipes(){
                let $this = this
                axios.get('api/all_equipes').then(response => {
                    console.log(response.data)
                    this.allequipes = response.data.data

                })

            }
        }
    }
</script>

<style>
    #add-data{
        display: block;
        width:40%;
        margin: auto;
    }
    .cont-input{
        margin: 4vh 0 4vh 0;
    }
    .cont-input label{
        margin: 1vh 0 1vh 0;
    }
    #add-data label, #add-data input, #add-data button{
        display: block;
    }
    #add-data input, #add-data textarea, #add-data select {
        border: 1px solid lightgrey;
        border-radius: 0.25rem;
        padding: 1% 3% 1% 3%;
        width: 70%;
        resize: none;

    }
    #add-data textarea{
        height: 15vh;
    }
    #add-data button{
        border: 1px solid #FF4B2B;
        padding: 1vh 1vh 1vh 1vh;
        background-color: transparent;
        border-radius: 0.25rem;
        font-weight: 700;
        color: #FF4B2B;
        font-size: 1vw;
        transition: 0.5s;
        cursor: pointer
    }
    #add-data button:hover{
        background-color: #FF4B2B;
        color: #FFFFFF;

    }

</style>
<template>
    <div>
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
        name:'FormAddAthlete',
        data(){
            return{
                name: null,
                description : null,
                equipe_id:null
            }
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
        }
    }
</script>
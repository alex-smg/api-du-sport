<template>
    <div>
        <form id="app" @submit="checkForm" action="https://vuejs.org/" method="post" novalidate="true">


            <p>
                <label for="name">Name</label>
                <input id="name" v-model="name" type="text" name="name">
            </p>

            <p>
                <label for="description">Description</label>
                <textarea id="description" v-model="description" name="description"></textarea>
            </p>

            <p>
                <label for="movie">Favorite Movie</label>
                <select id="movie" v-model="movie" name="movie">
                    <option>Star Wars</option>
                    <option>Vanilla Sky</option>
                    <option>Atomic Blonde</option>
                </select>
            </p>

            <p>
                <input type="submit" value="Submit">
            </p>

        </form>
    </div>
</template>

<script>
    export default {

        created(){

            this.fetchAthletes()
        },
        methods:{
            fetchAthletes(){
                axios.get(this.url).then(response => {
                    console.log(response.data)
                    this.allathletes = response.data.data
                })

            }
        }
    }
</script>
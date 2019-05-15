<template>
    <div>
        <h2>{{ arrayathlete.name }}</h2>
        <p>{{ arrayathlete.description }}</p>
        <p>{{ arrayathlete.equipe.name }}</p>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                arrayathlete:[]
            }
        },
        created(){
          this.fetchAthlete()
        },
        methods:{
            fetchAthlete(){
                let $this = this
                let id = this.$route.params.id
                axios.get(`http://127.0.0.1:8000/api/athlete/${id}`).then(response => {
                    console.log(response.data)
                    this.arrayathlete = response.data
                })

            },
        }

    }
</script>
<style>


</style>

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
                axios.get(`api/athlete/${id}`).then(response => {
                    console.log(response.data)
                    this.arrayathlete = response.data
                })

            },
        }

    }
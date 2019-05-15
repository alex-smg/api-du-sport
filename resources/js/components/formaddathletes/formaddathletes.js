export default {
    name: "formaddathletes",
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
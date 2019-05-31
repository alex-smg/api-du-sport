
export default {
    data(){
        return{
            arraycompetition:[]
        }
    },
    created(){
        this.fetchCompetition()
    },
    methods:{
        fetchCompetition(){
            let $this = this
            let id = this.$route.params.id
            axios.get(`api/competition/${id}`).then(response => {
                console.log(response.data)
                this.arraycompetition = response.data.data
            })

        },
    }

}
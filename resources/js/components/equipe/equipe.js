export default {
    name: "equipe",
    data(){
        return{
            arrayequipe:[]
        }
    },
    created(){
        this.fetchEquipes();
        console.log(this.arrayequipe)
    },
    methods:{
        fetchEquipes(){
            let $this = this
            let id = this.$route.params.id
            axios.get(`/api/equipe/${id}`).then(response => {
                console.log(response.data)
                this.arrayequipe = response.data.data
            })

        },
    }

}



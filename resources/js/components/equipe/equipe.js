export default {
    name: "equipe",
    data(){
        return{
            arrayequipe:[],
            athlete:[]
        }
    },
    created(){
        this.fetchEquipes();

    },
    methods:{
        fetchEquipes(){
            let $this = this
            let id = this.$route.params.id
            axios.get(`/api/equipe/${id}`).then(response => {
                console.log(response.data)
                this.arrayequipe = response.data
                this.athlete = response.data.athletes
            })

        },
    }

}



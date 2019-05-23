
    export default {
        name:'FormAddAthlete',
        data(){
            return{
                name: null,
                description : null,
                equipe_id:null,
                image:'',
                edit: false,
                allequipes:[]
            }
        },
        created(){

          this.fetchEquipes()

        },
        methods:{
            getImage(){
                axios.get('api/add/athlete/image').then(response => {
                    this.image = response.data
                    console.log(this.image)
                })
            },
            addAthlete(){
                this.getImage()
                axios.post('api/add/athlete', {
                        name: this.name,
                        description: this.description,
                        equipe_id: this.equipe_id,
                        image: this.image
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
            },

        }
    }
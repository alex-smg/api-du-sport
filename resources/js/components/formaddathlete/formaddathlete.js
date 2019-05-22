
    export default {
        name:'FormAddAthlete',
        data(){
            return{
                name: null,
                description : null,
                equipe_id:null,
                image:null,
                edit: false,
                allequipes:[]
            }
        },
        created(){
          this.fetchEquipes()
            this.getImage()
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
            },
            getImage(){
                axios.get('api/add/athlete/addimage').then(response => {
                    console.log(response.data)
                    this.image = response.data.data
                    console.log(this.image)
                })
            }
        }
    }
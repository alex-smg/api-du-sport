
    export default {
        name:'FormAddAthlete',
        data(){
            return{
                name: null,
                description : null,
                equipe_id:null,
                allequipes:[]
            }
        },
        created(){
          this.fetchEquipes()
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

            }
        }
    }

    export default {
        data(){
            return{
                 allathletes: [],
                url: 'api/allathletes',
                pagination: [],
                allequipes:[],
            }
        },
        created(){
            this.fetchAthletes();
            this.fetchEquipes();
        },
        methods:{
            fetchAthletes(){
                let $this = this
                axios.get(this.url).then(response => {
                    console.log(response.data)
                    this.allathletes = response.data.data
                    $this.makePagination(response.data)
                })

            },
            fetchEquipes(){
                let $this = this
                axios.get('api/all_equipes').then(response => {
                    console.log(response.data)
                    this.allequipes = response.data.data

                })

            },
            makePagination(data){
                let pagination = {
                    current_page: data.meta.current_page,
                    last_page: data.meta.last_page,
                    next_page_url: data.links.next,
                    prev_page_url: data.links.prev

                }
                this.pagination = pagination

            },
            fetchPaginationAthletes(url){
                this.url = url
                this.fetchAthletes()
            },
            deleteAthlete(id) {
                if (confirm('Are You Sure?')) {
                    axios.delete(`api/athletes/${id}`)
                        .then(data => {
                            alert('athlete Removed');
                            this.fetchAthletes();
                        })
                        .catch(err => console.log(err));
                }
            },
            UpdateAthlete(id){
                axios.patch(`api/update/athlete/${id}`, {
                    id: id,
                name: this.name,
                description: this.description,
                equipe_id: this.equipe_id
            })
                .then(function (response) {
                    console.log(response);
                    alert('athlete update');
                })
                .catch(function (error) {
                    console.log(error);
                });

    }
        }
    }
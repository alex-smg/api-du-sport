
    export default {
        data(){
            return{
                 allathletes: [],
                url: 'api/allathletes',
                pagination: [],
                allequipes:[],
                selectEquipe:[],
                name: '',
                description: '',
                equipe_id: '',
                edit:false,
                edit_id : '',

            }
        },
        created(){
            this.fetchAthletes();
            this.fetchEquipes();

        },
        methods:{

            switchEdit(id){
                this.edit=true
                this.edit_id = id
                console.log(this.edit_id)
                this.dataForm(this.edit_id);
            },
            switchfalseEdit(){
                this.edit=false
            },
            dataForm(id){
                let array
                this.allathletes.forEach(function(el){
                    if (el.id === id){
                         array = el
                    }
                })
                this.selectEquipe = array
                this.name = this.selectEquipe.name
                this.description = this.selectEquipe.description
                this.equipe_id = this.selectEquipe.equipe_id
                console.log(this.selectEquipe)
            },
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
                axios.get('api/all-equipes').then(response => {
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
                    axios.delete(`api/athlete/delete/${id}`)
                        .then(data => {
                            alert('athlete Removed');
                            this.fetchAthletes();
                        })
                        .catch(err => console.log(err));
                }
            },
            UpdateAthlete(){
                axios.put(`api/update/athlete/${this.edit_id}`, {
                    id: this.edit_id,
                    name: this.name,
                    description: this.description,
                    equipe_id: this.equipe_id
            })
                .then(function (response) {
                    console.log(response);
                    alert('athlete update');
                })
                    .then(data => {
                        this.fetchAthletes();
                    })
                .catch(function (error) {
                    console.log(error);
                });

    }
        }
    }
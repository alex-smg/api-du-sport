
    export default {
        data(){
            return{
                allequipes: [],
                url: 'api/all_equipes',
                pagination: [],
            }
        },
        created(){
            this.fetchEquipes();
        },
        methods:{
            fetchEquipes(){
                let $this = this
                axios.get(this.url).then(response => {
                    console.log(response.data)
                    this.allequipes = response.data.data
                    $this.makePagination(response.data)
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
            fetchPaginationEquipe(url){
                this.url = url
                this.fetchEquipes()
            },
            deleteEquipe(id) {
                if (confirm('Are You Sure?')) {
                    axios.delete(`api/equipe/${id}`)
                        .then(data => {
                            alert('equipe Removed');
                            this.fetchEquipes();
                        })
                        .catch(err => console.log(err));
                }
            },
        }
    }
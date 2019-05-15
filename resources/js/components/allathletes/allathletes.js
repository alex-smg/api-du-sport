export default {
    name: "allathletes",
    data(){
        return{
             allathletes: [],
            url: 'api/allathletes',
            pagination: [],
            name: null,
            description : null,
            equipe_id:null
        }
    },
    created(){
        this.fetchAthletes();
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
        deleteArticle(id) {
            if (confirm('Are You Sure?')) {
                axios.delete(`api/athletes/${id}`)
                    .then(data => {
                        alert('athletes Removed');
                        this.fetchAthletes();
                    })
                    .catch(err => console.log(err));
            }
        },
    }
}
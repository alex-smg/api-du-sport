
export default {
    data(){
        return{
            allcompetitions: [],
            url: 'api/all-competitions',
            pagination: [],
            selectCompetition:[],
            name: '',
            description: '',
            edit:false,
            edit_id : '',

        }
    },
    created(){
        this.fetchCompetitions();

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
            this.allcompetitions.forEach(function(el){
                if (el.id === id){
                    array = el
                }
            })
            this.selectCompetition = array
            this.name = this.selectCompetition.name
            this.description = this.selectCompetition.description
            console.log(this.selectCompetition)
        },
        fetchCompetitions(){
            let $this = this
            axios.get(this.url).then(response => {
                console.log(response.data)
                this.allcompetitions = response.data.data
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
        fetchPaginationCompetitions(url){
            this.url = url
            this.fetchCompetitions()
        },
        deleteCompetition(id) {
            if (confirm('Are You Sure?')) {
                axios.delete(`api/competition/delete/${id}`)
                    .then(data => {
                        alert('Competition Removed');
                        this.fetchCompetitions();
                    })
                    .catch(err => console.log(err));
            }
        },
        UpdateCompetition(){
            axios.post(`api/update/competition/${this.edit_id}`, {
                name: this.name,
                description: this.description,
                _method: 'patch'
            })
                .then(function (response) {
                    console.log(response);
                    alert('Competition update');
                })
                .then(data => {
                    this.fetchCompetitions();
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
}
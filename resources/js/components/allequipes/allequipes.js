
export default {
    data(){
        return{
            allequipes: [],
            url: 'api/all_equipes',
            pagination: [],
            selectEquipe:[],
            allnationalites:[],
            name: '',
            description: '',
            nationalite_id: '',
            edit:false,
            edit_id : '',
        }
    },
    created(){
        this.fetchEquipes();
    },
    methods:{
        switchEdit(id){
            this.edit=true
            this.edit_id = id
            console.log(this.edit_id)
            this.dataForm(this.edit_id);
        },
        dataForm(id){
            let array
            this.allequipes.forEach(function(el){
                if (el.id === id){
                    array = el
                }
            })
            this.selectEquipe = array
            this.fetchNAtionalites()
            console.log(this.selectEquipe)
        },
        fetchEquipes(){
            let $this = this
            axios.get(this.url).then(response => {
                console.log(response.data)
                this.allequipes = response.data.data
                $this.makePagination(response.data)
            })

        },
        fetchNAtionalites(){
            axios.get('api/all_nationalite').then(response => {
                console.log(response.data)
                this.allnationalites = response.data.data
                console.log(this.allnationalites)
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
        UpdateEquipe(){
            axios.post(`api/update/equipe/${this.edit_id}`, {
                name: this.name,
                description: this.description,
                nationalite_id: this.nationalite_id,
                _method: 'patch'
            })
                .then(function (response) {
                    console.log(response);
                    alert('equipe update');
                })
                .then(data => {
                    this.fetchEquipes();
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }


}


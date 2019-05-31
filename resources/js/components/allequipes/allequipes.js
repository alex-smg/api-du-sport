
export default {
    data(){
        return{
            allequipes: [],
            url: 'api/all-equipes',
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
        this.fetchNationalites();

    },
    methods:{

        switchEdit(id){
            this.edit=true
            this.edit_id = id
            console.log(this.edit_id)
            this.dataForm(this.edit_id);
        },
        switchfalse(){
            this.edit=false
        },
        dataForm(id){
            let array
            this.allequipes.forEach(function(el){
                if (el.id === id){
                    array = el
                }
            })
            this.selectEquipe = array
            this.name = this.selectEquipe.name
            this.description = this.selectEquipe.description
            this.nationalite_id = this.selectEquipe.nationalite_id
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
        fetchNationalites(){
            let $this = this
            axios.get('api/all-nationalites').then(response => {
                console.log(response.data)
                this.allnationalites = response.data.data
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
                axios.delete(`api/equipe/delete/${id}`)
                    .then(data => {
                        alert('athlete Removed');
                        this.fetchEquipes();
                    })
                    .catch(err => console.log(err));
            }
        },
        UpdateEquipe(){
            axios.put(`api/update/equipe/${this.edit_id}`, {
                id: this.edit_id,
                name: this.name,
                description: this.description,
                nationalite_id: this.nationalite_id,
            })
                .then(function (response) {
                    console.log(response);
                    alert('athlete update');
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
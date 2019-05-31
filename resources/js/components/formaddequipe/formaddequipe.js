export default {
    name: 'FormAddEquipe',
    data() {
        return {
            name: null,
            description: null,
            nationalite_id: null,
            allnationalites: []
        }
    },
    created() {

        this.fetchNAtionalites()

    },
    methods: {
        addEquipe() {
            axios.post('api/add/equipe', {
                name: this.name,
                description: this.description,
                nationalite_id: this.nationalite_id,
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        fetchNAtionalites(){
            axios.get('api/all-nationalites').then(response => {
                console.log(response.data)
                this.allnationalites = response.data.data
                console.log(this.allnationalites)
            })
        },

    }
}
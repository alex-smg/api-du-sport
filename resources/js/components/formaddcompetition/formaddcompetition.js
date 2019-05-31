export default {
    name: 'FormAddCompetition',
    data() {
        return {
            name: null,
            description: null,
            image: '',
            edit: false,
        }
    },
    methods: {
        imageChanged(e){
            console.log(e.target.files[0].name)
            var fileReader = new FileReader()
            fileReader.readAsDataURL(e.target.files[0])
            fileReader.onload = (e) =>{
                this.image = e.target.result
            }
            console.log(this.image)
        },
       /* getImage() {
            axios.get('api/add/athlete/image').then(response => {
                this.image = response.data
                console.log(this.image)
            })
        },*/
        addCompetition() {
            axios.post('api/add/competition', {
                name: this.name,
                description: this.description,
                equipe_id: this.equipe_id,
                image: this.image
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }
}
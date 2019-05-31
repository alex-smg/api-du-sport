export default {
    data() {
        return {
            keywords: null,
            results: []
        };
    },

    watch: {
        keywords(after, before) {
            this.fetch();
            console.log(this.results);
        }
    },

    methods: {
        fetch() {
            axios.get('/api/search', { params: { keywords: this.keywords } })
                .then(response => this.results = response.data)
                .catch(error => {});
        }
    }
}
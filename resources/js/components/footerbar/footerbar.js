export default {
    name: "footerbar",
    data: () => {
        return{
            quotesoftheday: {},
            url2: '/',
            url: 'https://api.chucknorris.io/jokes/random',
            status:'pending',
            quotes: null,
            content: {}
        }
    },
    methods: {
      fetchEquipes(){
          let $this = this
          axios.get(this.url2).then(response => {
              console.log(response.data)
              this.quotesoftheday = response.data.data
          })

      },
      xhr: function() {
        const req = new XMLHttpRequest(); req.onerror = (event) => {
          this.status = 'Error';
        };
        req.onload = (event) => { if (req.status === 200) {
          this.status = 'Success';
          this.content = JSON.parse(req.response);
          this.quotes = this.content.value;
        } else {
          this.status = `Error (${req.status})`; }
        };
        req.open('GET', this.url, true);
        req.send();
      },
      repeat: function() {
          setInterval(()=>{
              this.xhr();
          }, 2000)
      }
    },
    mounted() {
        this.repeat();
    }
    
}
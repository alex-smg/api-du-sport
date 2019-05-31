export default {
    name: "messagecomposer",
    data: () => {
        return {
            message: ''
        }
    },
    methods:{
        send(e){
            e.preventDefault();
            if(this.message === ''){
                return
            }
            this.$emit('send', this.message);
            this.message =''
        }
    }
}
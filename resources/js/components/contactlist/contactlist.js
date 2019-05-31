export default {
    name: "contactlist",
    props:{
        contacts:{
            type: Array,
            default: []
        }
    },
    data: () => {
        return {
            selected : 0
        }
    },
    methods:{
        selectContact(index , contact){
            this.selected = index
            this.$emit('selected', contact)
        }

    }
}
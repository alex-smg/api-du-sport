import MessagesFeed from '../messagesfeed/messagesfeed.vue'
import MessageComposer from '../messagecomposer/messagecomposer.vue'
export default {
    props: {
        contact: {
            type: Object,
            default: null
        },
        messages: {
            type: Array,
            default: []
        }
    },
    methods: {
        sendMessage(text) {
            if (!this.contact) {
                return;
            }
            axios.post('/conversation/send', {
                contact_id: this.contact.id,
                text: text
            }).then((response) => {
                this.$emit('new', response.data);
            })
        }
    },
    components:{
        MessagesFeed,
        MessageComposer
    }
}
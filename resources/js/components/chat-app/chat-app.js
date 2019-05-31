
import Conversation from '../conversation/conversation.vue'
import ContactList from '../contactlist/contactlist.vue'
export default {
    data() {
        return {
            selectedContact: null,
            messages: [],
            contacts: [],
            user:[]
        };
    },
    mounted() {
        axios.get('/auth')
            .then((response)=>{
                this.user = response.data;
            })
        console.log(this.user)
        console.log(window.Echo);
        console.log(window.Pusher);
        Echo.private(`messages.${this.user.id}`)
            .listen('NewMessage', (e) => {
                this.hanleIncoming(e.message);
                console.log(e.message)
            });
        axios.get('/contacts')
            .then((response) => {
                this.contacts = response.data;
                console.log(this.contacts)
            });

    },
    methods: {
        startConversationWith(contact) {
            axios.get(`/conversation/${contact.id}`)
                .then((response) => {
                    this.messages = response.data;
                    this.selectedContact = contact;
                })
            console.log(this.selectedContact)
        },
        saveNewMessage(message) {
            this.messages.push(message);
        },
        hanleIncoming(message) {
            if (this.selectedContact && message.from == this.selectedContact.id) {
                this.saveNewMessage(message);
                return;
            }
            alert(message.text)

        },

    },
    components: {Conversation, ContactList}
}
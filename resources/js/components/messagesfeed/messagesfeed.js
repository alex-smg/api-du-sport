export default {
    props: {
        contact: {
            type: Object
        },
        messages: {
            type: Array,
            required: true
        }
    },
    methods: {
        scrollToBottom() {
            setTimeout(() => {
                this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
            }, 50);
        }
    },
    watch: {
        contact(contact) {
            this.scrollToBottom();
        },
        messages(messages) {
            this.scrollToBottom();
        }
    }
}
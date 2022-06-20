export default {
    components: {

    },
    props: {
        value: String,
    },
    data: function() {
        return {
            buttonValue: '0',
        };
    },
    created() {
        this.buttonValue = this.value
    },
    methods: {
        onClick(buttonValue) {
            this.$emit('clicked', buttonValue);
        },
    },
    watch: {

    },
}
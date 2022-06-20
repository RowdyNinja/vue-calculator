import CalculatorButton from './CalculatorButton.vue';
export default {
    components: {
        CalculatorButton,
    },
    props: {

    },
    data: function() {
        return {
            buttonValues: [],
        };
    },
    created() {
        this.populateButtonValues();
    },
    methods: {
        calculatorButtonClicked(clickedValue) {
            alert(clickedValue);
        },
        populateButtonValues() {
            this.buttonValues = ['C', '<-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
        },
    },
    watch: {

    },
}
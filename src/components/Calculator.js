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
            expression: "",
            result: "",
            lastClickedButton: '',
        };
    },
    created() {
        this.populateButtonValues();
    },
    methods: {
        calculatorButtonClicked(clickedValue) {
            if (clickedValue === '=') {
                this.result = eval(this.expression);
                this.lastClickedButton = clickedValue;
            } else if (clickedValue === 'C') {
                this.expression = "";
                this.result = "";
            } else if (this.lastClickedButton === '=') {
                this.expression = clickedValue;
                this.result = '';
                this.lastClickedButton = '';
            } else if (clickedValue === '<-') {
                this.expression = this.expression.slice(0, this.expression.length-1);
            } else {
                this.expression += clickedValue;
            }
        },
        populateButtonValues() {
            this.buttonValues = ['C', '<-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
        },
    },
    watch: {

    },
}
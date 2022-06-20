<template>
  <div>
    <div class="calculator-digits">
      <div v-for="buttonValue in buttonValues" :key="buttonValue">
        <calculator-button v-if="buttonValue !== '0'" :value="buttonValue" @clicked="calculatorButtonClicked" class="calculator-button"></calculator-button>
        <calculator-button v-else :value="buttonValue" @clicked="calculatorButtonClicked" class="calculator-button-wide"></calculator-button>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import Calculator from './Calculator';
export default Calculator;
</script>
<style>
    .calculator-digits {
      display: flex;
      flex-wrap: wrap;
      width: 220px;
    }
    .calculator-button {
      flex-grow: 1;
      width: 50px;
      margin: 2px;
    }
    .calculator-button-wide {
      width: 104px;
      flex-grow: 1;
      margin: 2px;
    }
</style>
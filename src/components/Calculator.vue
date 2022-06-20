<template>
  <div class="vue-calculator">
    <div class="display-area">
      <h2>{{expression}}</h2>
      <h3>{{result}}</h3>
    </div>
    <div class="calculator-buttons">
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
    .calculator-buttons {
      display: flex;
      flex-wrap: wrap;
      width: 220px;
      margin-left: 4px;
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
    .display-area {
      width: 210px;
      height: 100px;
      background-color: white;
      margin: 2px;
    }
    .vue-calculator {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      width: 250px;
      height: 300px;
      background-color: black;
    }
</style>
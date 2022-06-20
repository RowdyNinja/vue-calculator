<template lang="">
    <div>
        <button @click="onClick(buttonValue)" >
            <span>{{buttonValue}}</span>
        </button>
    </div>
</template>
<script lang="js">
import CalculatorButton from './CalculatorButton';
export default CalculatorButton;
</script>
<style>
    button {
        width: 100%;
    }
</style>
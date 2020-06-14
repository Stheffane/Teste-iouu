<template>
    <div>
        <b-form-input class="input-loan" v-model="text" type="number" :state="inputState" size="lg" placeholder="R$ 0,00" ></b-form-input>
        <div class="mt-2">Value: {{ text }}</div>
    </div>
</template>

<script>
export default {
    name: "InputNumber",

    props: {msg:String},

    
    computed: {
      inputState() {
        let value = Number(this.text)
      
        return value >= 5000 && value <= 200000 ? true : false;
      }
    },

    data() {
      return {
        text: ''
      }
    },
}
</script>

<style>
input.input-loan, input.input-loan:focus {
    font-size: 35px;
    border: none;
    border-bottom: 2.5px solid;
    border-radius: 0;
    outline: none;
    box-shadow: none !important;
}
</style>
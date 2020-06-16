<template>
    <div>
        <b-form-input class="input-loan" v-model="text" type="number" :state="inputState" @blur="salvaInput(text)" size="lg" placeholder="R$ 0,00" ></b-form-input>
        <div class="mt-2">Value: {{ text }}</div>
    </div>
</template>

<script>
export default {
  name: "InputNumber",

  props: {msg:String},
  
  data() {
    return {
      text: '',
    }
  },

  computed: {
    inputState() {
      let value = Number(this.text)
    
      return value >= 5000 && value <= 200000 ? true : false;
    },

  },

  methods: {
    salvaInput(text) {
      console.log("aqui eu" + text);

      let vlLoan = localStorage.getItem('loan');

      if (vlLoan){
        localStorage.clear();
        vlLoan = this.text;
      }
      else {
        vlLoan = this.text;
      }

      localStorage.setItem('loan', vlLoan);
      
    }
  }

}
</script>

<style>
input.input-loan, input.input-loan:focus {
    font-size: 35px;
    outline: none;
    box-shadow: none !important;
}
</style>
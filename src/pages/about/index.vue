<template>
    <div class="container-standart">
        <Title msg="Conte sobre você"/>

        <div>
            <b-form-input v-model="name" type="text" placeholder="Nome Completo" :state="ValidName"></b-form-input>
            <div class="mt-2">Value: {{ name }}</div>
        </div>

        <div>
            <b-form-input v-model="email" type="text" placeholder="E-mail" :state="ValidEmail"></b-form-input>
            <div class="mt-2">Value: {{ email }}</div>
        </div>

        <div >
            <div>
                <b-form-input v-model="cpf" type="number" placeholder="CPF" :state="ValidCpf"></b-form-input>
                <div class="mt-2">Value: {{ cpf }}</div>
            </div>

            <div>
                <b-form-input v-model="tel" text="tel" placeholder="Celular com DDD" :state="ValidTel"></b-form-input>
                <div class="mt-2">Value: {{ tel }}</div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Title from '../../components/Title.vue';

export default {
    name: "About",

    components: {
        Title,
    },

    data() {
      return {
        name: '',
        email: '',
        cpf: '',
        tel: '',
      }
    },

    methods: {
        inputName() {
            const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;

            if (this.name == "") return false;

            if (!pattern.test(this.name)) return false;

            return true;
        },

        inputEmail() {
        const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return regex.test(this.email);
      },

      inputCPF() {
        const CPF = this.cpf.replace(/[^\d]+/g, "");

        if (CPF == "") return false;

        // Elimina CPFs invalidos conhecidos
        if (
            CPF.length != 11 ||
            CPF == "00000000000" ||
            CPF == "11111111111" ||
            CPF == "22222222222" ||
            CPF == "33333333333" ||
            CPF == "44444444444" ||
            CPF == "55555555555" ||
            CPF == "66666666666" ||
            CPF == "77777777777" ||
            CPF == "88888888888" ||
            CPF == "99999999999"
        )
            return false;

        // Valida 1o digito
        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(CPF.charAt(i)) * (10 - i);
        let result = 11 - (add % 11);

        if (result == 10 || result == 11) result = 0;

        if (result != parseInt(CPF.charAt(9))) return false;

        // Valida 2o digito
        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(CPF.charAt(i)) * (11 - i);
        result = 11 - (add % 11);

        if (result == 10 || result == 11) result = 0;

        if (result != parseInt(CPF.charAt(10))) return false;

        return true;
      },

      inputTel() {
        var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$'); 
        return regex.test(this.tel);
      }
    },

    computed: {
        ValidName() {
            return this.inputName() ? true : false;
        },

        ValidEmail() {
            return this.inputEmail() ? true : false;
        },

        ValidCpf() {
            return this.inputCPF() ? true : false;
        },

        ValidTel() {
            return this.inputTel() ? true : false;
        },

    },

}
</script>

<style>

</style>
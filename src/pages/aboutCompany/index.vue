<template>
    <div class="container-standart">
        <Title msg="Agora, sobre a sua empresa"/>

        <div>
            <b-form-input v-model="cnpj" type="number" placeholder="CNPJ" :state="ValidCnpj"></b-form-input>
            <div class="mt-2">Value: {{ cnpj }}</div>
        </div>

        <div>
            <b-form-input v-model="billing" type="number" placeholder="Faturamento mensal" :state="ValidBilling"></b-form-input>
            <div class="mt-2">Value: {{ billing }}</div>
        </div>

        <div>
            <label>Qual a sua relação com a empresa?</label>
            <v-select class="selects" :options="options" aria-placeholder="Clique para escolher"></v-select>
        </div>
    </div> 
</template>

<script>
import Title from '../../components/Title.vue';

export default {
    name: "AboutCompany",

    components: {
        Title,
    },

    data() {
      return {
        cnpj: '',
        billing: '',
        options: [
            {label: 'Sócio e/ou Dono', code: '1'}, 
            {label: 'Administrador e/ou Diretor', code: '2'},
            {label: 'Procurador', code: '3'},
            {label: 'Outros', code: '4'},
        ]
      }
    },

    methods: {
        inputCnpj() {
            const cnpj = this.cnpj.replace(/[^\d]+/g,'');
        
            if(cnpj == '') return false;
            
            if (cnpj.length != 14)
                return false;
        
            // Elimina CNPJs invalidos conhecidos
            if (cnpj == "00000000000000" || 
                cnpj == "11111111111111" || 
                cnpj == "22222222222222" || 
                cnpj == "33333333333333" || 
                cnpj == "44444444444444" || 
                cnpj == "55555555555555" || 
                cnpj == "66666666666666" || 
                cnpj == "77777777777777" || 
                cnpj == "88888888888888" || 
                cnpj == "99999999999999")
                return false;
                
            // Valida DVs
            let tamanho = cnpj.length - 2
            let numeros = cnpj.substring(0,tamanho);
            let digitos = cnpj.substring(tamanho);
            let soma = 0;
            let pos = tamanho - 7;

            for ( let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                    pos = 9;
            }
            let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
                
            tamanho = tamanho + 1;
            numeros = cnpj.substring(0,tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
                
            return true;
        },
    },

    computed: {
        ValidCnpj() {
            return this.inputCnpj() ? true : false;
        },

        ValidBilling() {
            let value = Number(this.billing)
      
            return value >= 10000 ? true : false;
        },
    },

}
</script>

<style>

</style>
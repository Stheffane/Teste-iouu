<template>
    <div class="container-standart validation">
        <Title msg="Estamos avaliando sua empresa, por favor aguarde..." v-if="result == 0"/>
        <div class="text-center" v-if="result == 0">
            <b-spinner variant="info" style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
        </div>

        <Success v-if="result == 1"/>
        <Denail v-if="result == 2"/>

    </div>
</template>

<script>
import Title from '../../components/Title.vue';
import Success from '../success';
import Denail from '../denial'

export default {
    name: "Validation",

    components: {
        Title,
        Success,
        Denail
    },

    data() {
        return {
            result: 0
        }
    },

    methods:{
        validar() {
            
            let loan = Number(localStorage.getItem("loan"));
            let billing = Number(localStorage.getItem("billing"));

            if (loan < billing) {
                this.result = 1;
                this.$emit('page', this.pages);
            }
            else { 
                this.result = 2;
                this.$emit('page', this.pages);
            }
            
            return this.result;
        },
    },

    mounted() { 

        setInterval(() => {
        this.validar()
        }, 3000);

    },

    computed: {

    },
}
</script>

<style scoped>
    .container-standart.validation{
        justify-content: center;
    }
</style>
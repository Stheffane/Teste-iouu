<template>
    <div class="container-standart validation">
        <div class="text-center" >
            <b-spinner variant="info" style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
        </div>

        <Title msg="Estamos avaliando sua empresa, por favor aguarde..."/>

    </div>
</template>

<script>
import Title from '../../components/Title.vue';

export default {
    name: "Validation",

    components: {
        Title,
    },

    data() {

    },

    methods:{
        validar() {          
            
            const emprestimo = 20000;
            const faturamento = 100000;
            
            /*let loan = Number(localStorage.getItem("loan"));
            let billing = Number(localStorage.getItem("billing"));*/

            
            if (emprestimo < faturamento /*loan > billing*/) {
                console.log("emprestimo menor");
                //aqui faz o contador que fica lá no botão ir pra página de aprovado
            }
            else { 
                console.log("emprestimo maior");
                //faz ir pra página de negado} 
            }
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
<template>
    <div class="container-standart">
        <div class="resul-group">
            <Title msg="Parabéns, Seu pedido foi aprovado!!!"/>
            <img class="img--success" src="../../assets/feliz.svg" alt="Sucesso!"/>
        </div>
    </div>
</template>

<script>
import Title from '../../components/Title.vue';

export default {
    name: "Success",

    components: {
        Title,
    },

}
</script>

<style>
.resul-group {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img--success {
    width: 160px;
}

</style>
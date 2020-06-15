<template>
    <div class="container">
        <div class="resul-group">
            <Title msg="Sua empresa foi negada."/>
            <img class="img--denial" src="../../assets/triste.svg" alt="rejeição"/>
        </div>
    </div>
</template>

<script>
import Title from '../../components/Title.vue';

export default {
    name: "Denial",

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

.img--denial {
    width: 160px;
}

</style>
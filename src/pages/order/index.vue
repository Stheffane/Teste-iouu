<template>
    <div class="container-standart">
        <Title msg="Qual valor de empréstimo ajudaria a sua empresa neste momento?"/>
        <InputNumber />
    </div>
</template>

<script>
import Title from '../../components/Title.vue';
import InputNumber from '../../components/InputNumber.vue';

export default {
    name: "Order",

    components: {
        Title,
        InputNumber
    }
}
</script>

<style>
.container-standart {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 50px;
}
</style>
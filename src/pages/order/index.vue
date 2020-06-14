<template>
    <div>
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
</style>
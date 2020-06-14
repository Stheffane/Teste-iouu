<template>
    <div class="container-standart">
        <Title msg="E como pretende usar o empréstimo?"/>
        <Dropdown />
        <Textarea />
    </div>    
</template>

<script>
import Title from '../../components/Title.vue';
import Dropdown from '../../components/Dropdown';
import Textarea from '../../components/Textarea'

export default {
    name: "OrderDetails",

    components: {
        Title,
        Dropdown,
        Textarea
    },
}
</script>

<style>

</style>
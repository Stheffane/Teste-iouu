<template>
    <div>
        <input class="input-text" placeholder="R$ 0,00" info="Você pode escolher de R$5.000 até R$200.000" type="string" value="R$ 9.999">
    </div>
</template>

<script>
export default {
    name: "InputNumber",

    props: {msg:String}
}
</script>

<style>
input {
    
}
</style>
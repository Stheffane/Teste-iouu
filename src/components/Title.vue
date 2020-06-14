<template>
    <div>
        <h1 class="title">{{msg}}</h1>
    </div>
</template>

<script>
export default {
    name: "Title",

    props: {msg:String}
}
</script>

<style>
    .title {
        font-size: 38px;
        text-align: left;
        font-weight: bold;
        color: #434371;
    }
</style>
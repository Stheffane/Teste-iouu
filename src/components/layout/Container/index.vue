<template>
  <div>
    <Order v-if="pages == 1" />

    <button @click="backPage()" v-if="pages != 1">Voltar</button>
    <button @click="nextPage()">Continuar</button>
    {{pages}}
  </div>
</template>

<script>
import Order from '../../../pages/order'

export default {
    name: "Container",

    data() {
        return {
            pages: 1
        }
    },
    components: {
        Order
    },
    methods: {
        backPage() {
            this.pages--;
            this.$emit('page', this.pages);
        },

        nextPage() {
            this.pages++;
            this.$emit('page', this.pages);
        }
    }
}
</script>

<style>
</style>

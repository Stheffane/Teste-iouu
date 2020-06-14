<template>
  <form class="container-body">
    <Order v-if="pages == 1" />

    <div class="btn-group">
        <button class="back-page" @click="backPage()" v-if="pages != 1">Voltar</button>
        <button class="next-page" @click="nextPage()">Continuar</button>
    </div>
    
    {{pages}}
  </form>
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
.container-body {
    height: 425px;
}

.btn-group {
    display: flex;
    justify-content: space-evenly;
}

button.back-page, button.next-page {
    display: inline-block;
    padding: 9px 24px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
    text-shadow: none;
}

button:focus {
    outline: none;    
}

button.back-page {
    color: #41D3BD;
    background-color: #fff;
    border: 1px solid #41D3BD;
}

button.next-page {
    color: #fff;
    background-color: #41D3BD;
    border: 1px solid #41D3BD;
}


</style>

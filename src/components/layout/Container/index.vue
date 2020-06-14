<template>
  <div class="container-body">
    
    <Order v-if="pages == 1" />
    <OrderDetails v-if="pages == 2"/>
    <About v-if="pages == 3"/>
    

    <div class="btn--group">
        <button class="back-page" @click="backPage()" v-if="pages != 1">Voltar</button>
        <button class="next-page" @click="nextPage()">Continuar</button>
    </div>
    {{pages}}

  </div>
</template>

<script>
import Order from '../../../pages/order';
import OrderDetails from '../../../pages/orderDetails';
import About from '../../../pages/about'

export default {
    name: "Container",

    components: {
        Order,
        OrderDetails,
        About
    },

    data() {
        return {
            pages: 1
        }
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
    min-height: 425px;
    width: 100%;
}

.btn--group {
    display: flex;
    justify-content: space-between;
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
    outline: none !important;    
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

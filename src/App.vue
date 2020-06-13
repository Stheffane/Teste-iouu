<template>
  <div id="app">

    <div class="container">
      <Order/>
    </div>

  </div>
</template>

<script>
import Order from './pages/order/index.vue'

export default {
  name: 'App',
  components: {
    Order
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0px 60px;
}

.container {
  margin: auto;
  max-width: 700px;
  align-items: left;
}
</style>

<template>
  <div id="app">
    <Header :currentPage="currentPage" />

    <div class="container">
      <Container @page="page"/>
    </div>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import Container from './components/layout/Container/index.vue'

export default {
  name: 'App',

  data () {
    return {
      currentPage: 1
    }
  },

  components: {
    Header,
    Container
  },

  methods: {
    page(elements){
      this.currentPage = elements;
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 0px 60px;
}

.container {
  margin: auto;
  max-width: 700px;
  align-items: left;
}
</style>

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
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

* {
  margin: 0;
}

.container {
  margin: auto;
  max-width: 700px;
  align-items: left;
  display: flex;
}
</style>

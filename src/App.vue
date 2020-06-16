<template>
  <div id="app">
    <Header :currentPage="currentPage" />

    <div class="container">
      <Container @page="page"/>
    </div>

  </div>
  
</template>

<!-- Drip -->
<script type="text/javascript">
  var _dcq = _dcq || [];
  var _dcs = _dcs || {};
  _dcs.account = '9322556';

  (function() {
    var dc = document.createElement('script');
    dc.type = 'text/javascript'; dc.async = true;
    dc.src = '//tag.getdrip.com/9322556.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(dc, s);
  })();
</script>
<!-- end Drip -->


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
  max-width: 700px !important;
  align-items: left;
  display: flex;
}
</style>

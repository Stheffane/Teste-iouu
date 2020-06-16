<template>
    <div class="container-standart">
        <div class="resul-group">
            <Title msg="Parabéns, Seu pedido foi aprovado!!!"/>
            <img class="img--success" src="../../assets/feliz.svg" alt="Sucesso!"/>
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
import Title from '../../components/Title.vue';

export default {
    name: "Success",

    components: {
        Title,
    },

}
</script>

<style>
.resul-group {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img--success {
    width: 160px;
}

</style>
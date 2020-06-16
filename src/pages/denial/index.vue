<template>
    <div class="container--denial">
        <div class="resul-group">
            <Title msg="Infelizmdente não podemos aprovar seu pedido."/>
            <img class="img--denial" src="../../assets/triste.svg" alt="rejeição"/>
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
    name: "Denial",

    components: {
        Title,
    },

}
</script>

<style>
.container--denial {
    height: 435px;
}

.resul-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 50px;
}

.img--denial {
    width: 160px;
}

</style>
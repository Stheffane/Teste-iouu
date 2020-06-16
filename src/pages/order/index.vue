<template>
    <div class="container-standart">
        <Title msg="Qual valor de empréstimo ajudaria a sua empresa neste momento?"/>
        <InputNumber />
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
import InputNumber from '../../components/InputNumber.vue';

export default {
    name: "Order",

    components: {
        Title,
        InputNumber
    }
    
}
</script>

<style>
.container-standart {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 50px;
}
</style>
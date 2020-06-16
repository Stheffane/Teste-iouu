<template>
    <div class="container-standart">
        <Title msg="E como pretende usar o empréstimo?"/>
        <Dropdown />
        <Textarea />
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
import Dropdown from '../../components/Dropdown';
import Textarea from '../../components/Textarea'

export default {
    name: "OrderDetails",

    components: {
        Title,
        Dropdown,
        Textarea
    },
}
</script>

<style>

</style>
<template>
    <div class="container-standart validation">
        <Title msg="Estamos avaliando sua empresa, por favor aguarde..." v-if="result == 0"/>
        <div class="text-center" v-if="result == 0">
            <b-spinner variant="info" style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
        </div>

        <Success v-if="result == 1"/>
        <Denail v-if="result == 2"/>

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
import Success from '../success';
import Denail from '../denial'

export default {
    name: "Validation",

    components: {
        Title,
        Success,
        Denail
    },

    data() {
        return {
            result: 0
        }
    },

    methods:{
        validar() {
            
            let loan = Number(localStorage.getItem("loan"));
            let billing = Number(localStorage.getItem("billing"));

            if (loan < billing) {
                this.result = 1;
                this.$emit('page', this.pages);
            }
            else { 
                this.result = 2;
                this.$emit('page', this.pages);
            }
            
            return this.result;
        },
    },

    mounted() { 

        setInterval(() => {
        this.validar()
        }, 3000);

    },

    computed: {

    },
}
</script>

<style scoped>
    .container-standart.validation{
        justify-content: center;
    }
</style>
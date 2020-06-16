import Vue from 'vue'
import App from './App.vue'

import BoootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import reactiveStorage from "vue-reactive-storage";

import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage, {
  vlLoan: '',
  vlBilling: ''
});

Vue.use(BoootstrapVue)

Vue.component('v-select', vSelect)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// Set initial values
Vue.use(reactiveStorage, {
    "vlLoan": '',
    "vlBilling": '',
});
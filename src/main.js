import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Print from 'vue-print-nb'

Vue.config.productionTip = false
Vue.use(Print);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

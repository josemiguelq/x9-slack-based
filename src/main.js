import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import dotenv from 'dotenv';

Vue.config.productionTip = false


dotenv.config()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

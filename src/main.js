import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueMeta)


new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')

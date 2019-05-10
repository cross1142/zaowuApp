import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import jquery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//引入pxtorem
import 'lib-flexible'
//引入重置样式
import '@/assets/style/reset.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
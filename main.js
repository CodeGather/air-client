import Vue from 'vue'
import App from './App'
import tabber from './pages/common/tabber.vue'


Vue.use(tabber)
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()

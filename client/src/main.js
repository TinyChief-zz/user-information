import { Field } from 'buefy/dist/components/field'
import { Input } from 'buefy/dist/components/input'
import { Datepicker } from 'buefy/dist/components/datepicker'
import { Radio } from 'buefy/dist/components/radio'
// import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import Vue from 'vue'
import App from './App.vue'

Vue.component('b-datepicker', Datepicker)
Vue.component('b-radio', Radio)
Vue.component('b-input', Input)
Vue.component('b-field', Field)
// Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

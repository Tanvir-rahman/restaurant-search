import Vue from 'vue'
import Vuex from 'vuex'
import globalValues from '@/store/modules/globalValues'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    globalValues,
  }
})
export default store

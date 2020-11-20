import Vue from 'vue'
import Vuex from 'vuex'
import globalValues from '@/store/modules/globalValues'
import categories from '@/store/modules/categories'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    globalValues,
    categories,
  }
})
export default store

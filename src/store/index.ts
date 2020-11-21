import Vue from 'vue'
import Vuex from 'vuex'
import globalValues from '@/store/modules/globalValues'
import categories from '@/store/modules/categories'
import cities from '@/store/modules/cities';
import restaurants from '@/store/modules/restaurants';

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    globalValues,
    categories,
    cities,
    restaurants,
  }
})
export default store

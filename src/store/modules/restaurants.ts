import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { notify } from '@/utils/utils'
import api from '@/api'
import store from '@/store'

@Module({ namespaced: true })
class Restaurants extends VuexModule {
  public restaurantList: Array<object> = [{}]
  public fetchedList = false

  @Mutation
  public saveList(data: Array<object>): void {
    this.fetchedList = true
    this.restaurantList = data
  }
  @Action
  public async getAllRestaurants(params: any): Promise<boolean> {
    try {
      store.dispatch('globalValues/setLoading', true)
      const result = await api({url: '/search', params});
      this.context.commit('saveList', result.data.restaurants)
      return true;
    } catch (err) {
      notify({
        title: 'Error',
        type: 'error',
        message: 'Could not fetch the restaurant list'
      })
      return false
    } finally {
      store.dispatch('globalValues/setLoading', false)
    }
  }
}
export default Restaurants

import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { notify } from '@/utils/utils'
import api from '@/api'

@Module({ namespaced: true })
class Restaurants extends VuexModule {
  public restaurantList: Array<object> = []
  public fetchedList = false

  @Mutation
  public saveList(data: Array<object>): void {
    this.fetchedList = true
    this.restaurantList = data
  }
  @Action
  public getAllRestaurants(): Promise<boolean> {
    if (this.fetchedList) {
      return Promise.resolve(true)
    } else {
      return api
        .get('/search')
        .then(response => {
          this.context.commit('saveList', response.data.restaurants)
          return true
        })
        .catch(() => {
          notify({
            title: 'Error',
            type: 'error',
            message: 'Could not fetch the restaurant list'
          })
          return false
        })
    }
  }
}
export default Restaurants

import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { notify } from '@/utils/utils'
import api from '@/api'
import store from '@/store'

@Module({ namespaced: true })
class Restaurants extends VuexModule {
  public restaurantList: Array<object> = [{}]
  public restaurantDetails: any = {}
  public restaurantMenu: Array<object> = [{}]
  public restaurantReviews: Array<object> = [{}]

  @Mutation
  public saveList(data: Array<object>): void {
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

  @Mutation
  public saveRestaurant(data: any): void {
    this.restaurantDetails = data
  }
  @Action
  public async getRestaurantDetails(params: any): Promise<boolean> {
    try {
      store.dispatch('globalValues/setLoading', true)
      const result = await api({url: '/restaurant', params});
      this.context.commit('saveRestaurant', result.data)
      return true;
    } catch (error) {
      notify({
        title: 'Error',
        type: 'error',
        message: 'Could not fetch the restaurant details'
      })
      return false;
    } finally {
      store.dispatch('globalValues/setLoading', false)
    }
  }

  @Mutation
  public saveRestaurantMenu(data: any): void {
    this.restaurantMenu = data
  }
  @Action
  public async getRestaurantMenu(params: any): Promise<boolean> {
    try {
      const result = await api({url: '/dailymenu', params});
      this.context.commit('saveRestaurantMenu', result.data.daily_menu)
      return true;
    } catch (error) {
      notify({
        title: 'Error',
        type: 'error',
        message: 'Could not fetch the restaurant menu'
      })
      return false;
    }
  }

  @Mutation
  public saveRestaurantReviews(data: any): void {
    this.restaurantReviews = data
  }
  @Action
  public async getRestaurantReviews(params: any): Promise<boolean> {
    try {
      const result = await api({url: '/reviews', params});
      this.context.commit('saveRestaurantReviews', result.data.user_reviews);
      return true;
    } catch (error) {
      notify({
        title: 'Error',
        type: 'error',
        message: 'Could not fetch the restaurant reviews'
      })
      return false;
    }
  }
}
export default Restaurants

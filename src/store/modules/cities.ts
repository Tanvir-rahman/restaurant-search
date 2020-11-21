import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { notify } from '@/utils/utils'
import api from '@/api'

@Module({ namespaced: true })
class Cities extends VuexModule {
  public cityList: Array<object> = []
  public fetchedList = false

  @Mutation
  public saveList(data: Array<object>): void {
    this.fetchedList = true
    this.cityList = data
  }
  @Action
  public async getAllCities(params: any): Promise<boolean> {
    try {
      const result = await api({url: '/cities', params});
      this.context.commit('saveList', result.data.location_suggestions)
      return true;
    } catch (err) {
      notify({
        title: 'Error',
        type: 'error',
        message: 'Could not fetch the city list'
      })
      return false
    }
  }
}
export default Cities

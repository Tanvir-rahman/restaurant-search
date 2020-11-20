import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { notify } from '@/utils/utils'
import api from '@/api'

@Module({ namespaced: true })
class Categories extends VuexModule {
  public categoryList: Array<object> = []
  public fetchedList = false

  @Mutation
  public saveList(data: Array<object>): void {
    this.fetchedList = true
    this.categoryList = data
  }
  @Action
  public getAllCategories(): Promise<boolean> {
    if (this.fetchedList) {
      return Promise.resolve(true)
    } else {
      return api
        .get('/categories')
        .then(response => {
          this.context.commit('saveList', response.data.categories)
          return true
        })
        .catch(() => {
          notify({
            title: 'Error',
            type: 'error',
            message: 'Could not fetch the category list'
          })
          return false
        })
    }
  }
}
export default Categories

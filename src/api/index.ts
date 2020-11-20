import axios from 'axios'
import store from '@/store'

const config = {
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: { Accept: 'application/json', 'user-key': '0ce70977cb2b86fe99a47ac7b197de73' }
}

const call = axios.create(config)
call.interceptors.request.use(request => {
  store.dispatch('globalValues/setLoading', true)
  return request
})
call.interceptors.response.use(
  response => {
    store.dispatch('globalValues/setLoading', false)
    return response
  },
  error => {
    store.dispatch('globalValues/setLoading', false)
    return error
  }
)
export default call

import axios from 'axios'

const config = {
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: { Accept: 'application/json', 'user-key': '0ce70977cb2b86fe99a47ac7b197de73' }
}

const call = axios.create(config)
call.interceptors.request.use(request => {
  return request
})
call.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return error
  }
)
export default call

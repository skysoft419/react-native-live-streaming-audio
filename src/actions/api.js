import axios from 'axios'
import { API_URL } from '../configs/constants'

const api = axios.create({
  baseURL: API_URL,
})

api.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error.response)
  },
)

export default api

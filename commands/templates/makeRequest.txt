import api from '../services/api'
import axios from 'axios'
const makeRequest = async (data: { route: string; params?: any; body?: any }) => {
  const route = api[data.route]

  try {
    const response = await axios[route.method](route.uri(data.params), {
      params: data.params,
      data: data.body
    })

    return response.data
  } catch (error) {
    console.error('Error:', error)
  }
}

export default makeRequest

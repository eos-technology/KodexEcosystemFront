import api from '../services/api'
import axios, { type AxiosRequestConfig } from 'axios'
import type { requestType } from '../types/helperTypes'

const makeRequest = async (data: { route: string; params?: any; body?: any }) => {
  const route = api[data.route]

  const body: any = data.body

  const config: AxiosRequestConfig = {
    params: data.params,
    ...body
  }

  try {
    const response = await axios[route.method](route.uri(data.params), config)
    return response.data
  } catch (error) {
    console.error('Error:', error)
  }
}

export default makeRequest

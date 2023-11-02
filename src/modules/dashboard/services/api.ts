import type { Endpoint } from '../types/storeTypes'

const api: Record<string, Endpoint> = {
  endpointExample: {
    method: 'post',
    uri: function (params?: any) {
      return `carts/${params}`
    }
  }
}

export default api

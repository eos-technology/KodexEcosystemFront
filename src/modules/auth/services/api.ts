import type { Endpoint } from '../types/serviceTypes'

const api: Record<string, Endpoint> = {
  login: {
    method: 'post',
    uri: function () {
      return `/auth/signin`
    }
  }
}

export default api

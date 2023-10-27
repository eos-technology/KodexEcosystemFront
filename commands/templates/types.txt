export type loginResponseType = {
  bearer: String
}

export type loginRequest = {
  email: string | null
  password: string | null
}

export type Endpoint = {
  method: 'get' | 'post' // Método HTTP permitido para la ruta
  uri: (params: any) => string // Función para construir la URL
}

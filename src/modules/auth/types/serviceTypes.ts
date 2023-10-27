export type Endpoint = {
  method: 'get' | 'post' // Método HTTP permitido para la ruta
  uri: (params: any) => string // Función para construir la URL
}

export type loginResponseType = {
  bearer: String
}

export type loginRequest = {
  email: string | null
  password: string | null
}

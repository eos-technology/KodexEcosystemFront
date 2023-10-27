<template>
  //HTML CONTENT
  <h2 style="color: white">FRONT REU</h2>
  <div>
    <Form @submit="onLogin" v-slot="{ isSubmitting }">
      <v-text-field v-model="form.email" :rules="rules.email" placeholder="Inicio de sesión" />
      <v-text-field
        v-model="form.password"
        :rules="rules.password"
        placeholder="Contraseña"
        type="password"
      />
      <v-btn @click="onLogin()" :loading="isSubmitting" color="primary">Iniciar sesión</v-btn>
    </Form>
    <Error />
    {{ form }}
  </div>
</template>
<script setup lang="ts">
import { Form } from 'vee-validate'
import { reactive } from 'vue'
import { useAuthStore } from '../../store/authStore'
import type { loginRequest } from '../../types/storeTypes'
const authStore = useAuthStore()

let form: loginRequest = reactive({
  email: null,
  password: null
})

const rules = reactive({
  email: [(v: string) => !!v || 'Password is required'],
  password: [
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 15) || 'Password must be less than 10 characters'
  ]
  // Puedes agregar más reglas aquí...
})

const onLogin = async () => {
  await authStore.login(form).then((response: any) => {
    console.info(response.token)
  })
}
</script>

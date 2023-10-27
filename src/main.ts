import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import axios from '@/plugins/Axios'
import App from './App.vue'
import router from './router'

//PLUGINS
import vuetify from './plugins/Vuetify'
import globalComponents from './plugins/GlobalComponents'
import './plugins/Luxon'
import { i18n } from './plugins/i18n'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.config.globalProperties.mode = 'prod'

//PLUGINS
app.use(globalComponents)
app.use(vuetify)
app.use(i18n)

//PROJECT BASE
app.use(pinia)
app.use(router)

app.mount('#app')

const prodApi = 'https://space-api.kodexpay.com/app/v1'
const devApi = 'http://127.0.0.1:3332/app/v1'

app.config.globalProperties.apiUrl = app.config.globalProperties.mode == 'dev' ? devApi : prodApi
axios.defaults.baseURL = app.config.globalProperties.apiUrl

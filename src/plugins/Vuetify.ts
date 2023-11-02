import 'vuetify/_styles.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { dark, light } from './VuetifyThemes'
import '@mdi/font/css/materialdesignicons.css'

let defaultTheme = 'light'

let settings = localStorage.getItem('settings')
if (settings) {
  let setting = JSON.parse(settings)
  const mode = setting.preferences.find((obg: any) => obg.name == 'Modo Oscuro')
  if (mode) {
    defaultTheme = mode.status == true ? 'light' : 'dark'
  }
}

console.log({ defaultTheme })

const vuetify = createVuetify({
  components: { ...components },
  directives,
  theme: {
    defaultTheme: defaultTheme,
    themes: {
      light,
      dark
    }
  },
  icons: {
    defaultSet: 'mdi'
  }
})

export default vuetify

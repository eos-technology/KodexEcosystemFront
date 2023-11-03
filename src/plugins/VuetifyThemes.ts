import { type ThemeDefinition } from 'vuetify'

export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#050E3A)',
    surface: '#F8F8F8',
    primary: '#0A1E8C',
    'primary-darken-1': '#001E62',
    icon: '#EBF3FF',
    secondary: '#F6F8FA',
    'secondary-darken-1': '#018786',
    error: '#FF6156',
    info: '#3587FF',
    success: '#47CD89',
    warning: '#B54708'
  }
}

export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#3700B3',
    surface: '#223B67',
    primary: '#EBBA4B',
    'primary-darken-1': '#3700B3',
    secondary: '#397EA6',
    'secondary-darken-1': '#018786',
    error: '#B42318',
    info: '#2196F3',
    success: '#47CD89',
    warning: '#B54708'
  }
}

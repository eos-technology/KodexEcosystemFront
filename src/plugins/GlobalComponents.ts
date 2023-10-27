const globalComponents = {
  install(app: any) {
    const components = import.meta.globEager('./../components/global/**/*.vue')

    Object.entries(components).forEach(([path, component]: any) => {
      app.component(
        path
          .split('/')
          .pop()
          .replace(/\.\w+$/, ''),
        component.default
      )
    })
  }
}

export default globalComponents

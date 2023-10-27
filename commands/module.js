const fs = require('fs')
const path = require('path')

function createModule(moduleName, pages) {
  const modulePath = path.join(__dirname, '..', 'src', 'modules', moduleName)

  // Create the module folder
  fs.mkdirSync(modulePath)

  // Create the router folder
  const routerFolderPath = path.join(modulePath, 'router')
  fs.mkdirSync(routerFolderPath)

  // Read the template router file
  const templateRouterPath = path.join(__dirname, 'templates', 'router.txt')
  const templateRouterContent = fs.readFileSync(templateRouterPath, 'utf8')

  // Read the router child template file
  const routerChildTemplatePath = path.join(__dirname, 'templates', 'routerChild.txt')
  const routerChildTemplateContent = fs.readFileSync(routerChildTemplatePath, 'utf8')

  // Create the index.ts file in the router folder
  const indexRouterPath = path.join(routerFolderPath, 'index.ts')
  const indexRouterContent = templateRouterContent.replace(/{{module}}/g, moduleName)
  fs.writeFileSync(indexRouterPath, indexRouterContent)

  // Generate the router child content for each page
  const childrenContent = pages.map((page) =>
    routerChildTemplateContent.replace(/{{page}}/g, page).replace(/{{module}}/g, moduleName)
  )

  // Append the children content to the index.ts file
  const indexRouterContentUpdated = indexRouterContent.replace(
    /\/\/DYNAMIC/g,
    childrenContent.join(',\n')
  )
  fs.writeFileSync(indexRouterPath, indexRouterContentUpdated)

  // Create the views folder
  const viewsFolderPath = path.join(modulePath, 'views')
  fs.mkdirSync(viewsFolderPath)

  // Read the view template file
  const viewTemplatePath = path.join(__dirname, 'templates', 'view.txt')
  const viewTemplateContent = fs.readFileSync(viewTemplatePath, 'utf8')

  pages.forEach((page) => {
    // Create the page folder inside views
    const pageFolderPath = path.join(viewsFolderPath, page)
    fs.mkdirSync(pageFolderPath)

    // Create the Index.vue file inside the page folder
    const indexVuePath = path.join(pageFolderPath, 'Index.vue')
    const indexVueContent = viewTemplateContent
      .replace(/{{page}}/g, page)
      .replace(/{{module}}/g, moduleName)
    fs.writeFileSync(indexVuePath, indexVueContent)

    // Create the content folder inside the page folder
    const contentFolderPath = path.join(pageFolderPath, 'content')
    fs.mkdirSync(contentFolderPath)
  })

  // Create the guards, helpers, services, store, and types folders
  const guardsFolderPath = path.join(modulePath, 'guards')
  fs.mkdirSync(guardsFolderPath)

  const helpersFolderPath = path.join(modulePath, 'helpers')
  fs.mkdirSync(helpersFolderPath)

  const servicesFolderPath = path.join(modulePath, 'services')
  fs.mkdirSync(servicesFolderPath)

  const storeFolderPath = path.join(modulePath, 'store')
  fs.mkdirSync(storeFolderPath)

  const typesFolderPath = path.join(modulePath, 'types')
  fs.mkdirSync(typesFolderPath)

  // Read the services template file
  const servicesTemplatePath = path.join(__dirname, 'templates', 'services.txt')
  const servicesTemplateContent = fs.readFileSync(servicesTemplatePath, 'utf8')

  // Create the api.ts file inside the services folder
  const apiPath = path.join(servicesFolderPath, 'api.ts')
  fs.writeFileSync(apiPath, servicesTemplateContent)

  // Read the types template file
  const typesTemplatePath = path.join(__dirname, 'templates', 'types.txt')
  const typesTemplateContent = fs.readFileSync(typesTemplatePath, 'utf8')

  // Create the serviceTypes.ts file inside the types folder
  const serviceTypesPath = path.join(typesFolderPath, 'storeTypes.ts')
  fs.writeFileSync(serviceTypesPath, typesTemplateContent)

  // Read the helpers template files
  const helpersIndexTemplatePath = path.join(__dirname, 'templates', 'helperIndex.txt')
  const makeRequestTemplatePath = path.join(__dirname, 'templates', 'makeRequest.txt')
  const helpersIndexTemplateContent = fs.readFileSync(helpersIndexTemplatePath, 'utf8')
  const makeRequestTemplateContent = fs.readFileSync(makeRequestTemplatePath, 'utf8')

  // Create the index.ts file inside the helpers folder
  const indexHelpersPath = path.join(helpersFolderPath, 'index.ts')
  fs.writeFileSync(indexHelpersPath, helpersIndexTemplateContent)

  // Create the makeRequest.ts file inside the helpers folder
  const makeRequestPath = path.join(helpersFolderPath, 'makeRequest.ts')
  fs.writeFileSync(makeRequestPath, makeRequestTemplateContent)

  // Read the store template file
  const storeTemplatePath = path.join(__dirname, 'templates', 'store.txt')
  const storeTemplateContent = fs.readFileSync(storeTemplatePath, 'utf8')

  // Replace '{{module}}' with the module name in the store template content
  const moduleReplacedContent = storeTemplateContent.replace(/{{module}}/g, moduleName)

  // Create the {{module}}Store.ts file inside the store folder
  const moduleStorePath = path.join(storeFolderPath, `${moduleName}Store.ts`)
  fs.writeFileSync(moduleStorePath, moduleReplacedContent)

  console.log(`Module '${moduleName}' created successfully with pages: ${pages.join(', ')}.`)

  // Update src/router/index.ts
  const routerIndexPath = path.join(__dirname, '..', 'src', 'router', 'index.ts')
  const routerIndexContent = fs.readFileSync(routerIndexPath, 'utf8')
  const updatedRouterIndexContent = routerIndexContent
    .replace(
      /\/\/importation/g,
      `//importation\nimport ${moduleName}Routes from '@/modules/${moduleName}/router';`
    )
    .replace(/\/\/module/g, `//module\n${moduleName}Routes,`)
  fs.writeFileSync(routerIndexPath, updatedRouterIndexContent)
}

const moduleName = process.argv[2]
const pages = process.argv.slice(3)

if (!moduleName || pages.length === 0) {
  console.error('Error: You must provide a module name and an array of pages!')
  process.exit(1)
}

createModule(moduleName, pages)

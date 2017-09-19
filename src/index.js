import WuiButton from './components/Button'

const components = {
  WuiButton
}

const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

const Wui = {
  version: '0.0.1',
  install,
  WuiButton
}

export default Wui

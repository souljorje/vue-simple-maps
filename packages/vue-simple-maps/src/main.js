import * as components from './components';

const plugin = {
  install(Vue) {
    Object.values(components).forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

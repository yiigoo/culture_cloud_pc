import pageBanner from './pageBanner'

const components = {
    pageBanner
};

const webComponents = {
    ...components
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    Object.keys(webComponents).forEach(key => {
        Vue.component(key, webComponents[key]);
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    
    install(window.Vue);
}

export default { install }

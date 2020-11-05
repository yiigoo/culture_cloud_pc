import pageBanner from './pageBanner'
import widgetActivity from './widgetActivity'
import widgetNews from './widgetNews'
import operateTips from './operateTips'

const components = {
    pageBanner,
    widgetActivity,
    widgetNews,
    operateTips
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

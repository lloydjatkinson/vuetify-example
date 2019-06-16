import Vue from 'vue';
import './plugins/vuetify.js';
import App from './app.vue';
import router from './router.js';
import store from './store.js';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
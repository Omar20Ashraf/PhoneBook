require('./bootstrap');

import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

window.Vue = Vue


Vue.component('appheader', require('./components/AppHeaderComponent.vue').default);
Vue.component('appfooter', require('./components/AppFooterComponent.vue').default);


const app = new Vue({
    el: '#app',
});


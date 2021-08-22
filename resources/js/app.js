require('./bootstrap');

window.Vue = Vue

import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('appheader', require('./components/AppHeaderComponent.vue').default);
Vue.component('appfooter', require('./components/AppFooterComponent.vue').default);


let routes = [{
    path: '/home',
    component: require('./components/HomeComponent.vue').default
  },
  {
    path: '/about',
    component: require('./components/AboutComponent.vue').default
  }
]

const router = new VueRouter({
    mode:'history',//remove the # from the url

    routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router
});


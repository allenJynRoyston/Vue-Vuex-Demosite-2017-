// import vue and vue modules
import Vue from 'vue'
import Router from 'vue-router'

// import components
import Home from '../components/Home.vue'
import About from '../components/About.vue'


// make components available to use in other components
Vue.component('Navigation', require('../components/Navigation.vue'))
Vue.component('MainHeader', require('../components/MainHeader.vue'))
Vue.component('MainFooter', require('../components/MainFooter.vue'))

Vue.component('section-one', require('../components/elements/section1.vue'))
Vue.component('section-two', require('../components/elements/section2.vue'))
Vue.component('section-three', require('../components/elements/section3.vue'))
Vue.component('section-four', require('../components/elements/section4.vue'))

// start vue
Vue.use(Router)

// set routes
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

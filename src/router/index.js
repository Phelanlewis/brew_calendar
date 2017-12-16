import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calendar from '@/components/Calendar'
import Recipe from '@/components/Recipe'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    {path: '/calendar', name: 'Calendar', component: Calendar},
    { path: '/recipe', name: 'Recipe', component: Recipe }
  ]
})

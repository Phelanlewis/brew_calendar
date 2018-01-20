import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calendar from '@/components/Calendar'
import Recipe from '@/components/Recipe'
import AddRecipe from '@/components/AddRecipe'
import Brewing from '@/components/Brewing'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    {path: '/calendar', name: 'Calendar', component: Calendar},
    { path: '/recipe', name: 'Recipe', component: Recipe },
    { path: '/addrecipe', name: 'AddRecipe', component: AddRecipe },
    { path: '/brewing', name: 'Brew Day', component: Brewing }
  ]
})

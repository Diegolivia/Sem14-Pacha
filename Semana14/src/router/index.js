import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import AddVideo from '@/components/AddVideo'
import WatchVideo from '@/components/Watchvideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home', 
    name: 'Home', 
    component: Home
    },
    {
      path: '/add', 
    name: 'AddVideo', 
    component: AddVideo
    },
    {
      path: '/watch', 
    name: 'WatchVideo', 
    component: WatchVideo
    }
  ]
})


import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Message from '@/components/Message'
import Setting from '@/components/Setting/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home, meta: {keepAlive: true, title: '一中墙'} },
    { path: '/message/:id', component: Message, meta: {keepAlive: true, title: '一中墙'} },
    { path: '/setting/:type', component: Setting, meta: {keepAlive: true, title: '一中墙'} },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Message from '@/components/Message'
import Edit from '@/components/Edit'
import Setting from '@/components/Setting'
import SettingHome from '@/components/Setting/Home'
import SettingAbout from '@/components/Setting/About'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home, meta: {keepAlive: true, title: '一中墙'} },
    { path: '/edit', component: Edit, meta: {keepAlive: true, title: '一中墙'} },
    { path: '/edit/:id', component: Edit, meta: {keepAlive: true, title: '一中墙'} },
    { path: '/message/:id', component: Message, meta: {keepAlive: true, title: '一中墙'} },
    { path: '/setting', component: Setting, meta: {keepAlive: true, title: '一中墙'},
      children: [
        { path: 'home', component: SettingHome },
        { path: 'about', component: SettingAbout },
      ]
    },
  ]
})

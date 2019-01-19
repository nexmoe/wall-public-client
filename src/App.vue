<template>
  <div id="app">
    <Header />
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <keep-alive>
      <Nav v-if="$route.matched[0].path !== '/message/:id'"/>
    </keep-alive>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Nav from '@/components/Nav'

  export default {
    name: 'App',
    components: {
      Nav,
      Header
    },
  }

  import router from './router'
  router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      var title = to.meta.title
      document.title = title
    }
    next()
  })

</script>

<style>
  body {
    margin: 0;
    background-color: #f1f1f1;
  }

  a {
    text-decoration: none
  }

  .nexmoe-tab {
    height: 46px;
    background-color: #fff;
    width: 100%;
    border-bottom: 1px solid #ececec;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .nexmoe-tab a {
    padding: 0;
    box-sizing: border-box;
    line-height: 46px;
    position: relative;
    display: inline-block;
    margin-right: 10px;
  }

  .nexmoe-tab a.router-link-exact-active {
    color: #f4a8ba;
  }

  .nexmoe-tab a.router-link-exact-active::after {
    color: #f4a8ba;
    content: "";
    background-color: #f4a8ba;
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

</style>

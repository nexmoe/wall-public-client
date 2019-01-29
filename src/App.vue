<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Nav v-if="$route.matched[0].path !== '/message/:id' && $route.matched[0].path !== '/edit'"/>
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
    -webkit-tap-highlight-color:transparent;
    box-sizing: border-box;
    min-height: calc(100vh - 102px);
  }

  @media screen and (min-width:960px) {
    body,
    #nexmoe-nav,
    #nexmoe-header {
      width: 420px!important;
      margin: auto;
    }
    body {
      box-shadow: 0 0 30px #ababab;
    }
  }

  a {
    text-decoration: none
  }

  .nexmoe-tab {
    height: 46px;
    background-color: #fff;
    width: 100%;
    border-bottom: 1px solid #eee;
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
    color: #000;
  }

  .nexmoe-tab a.router-link-exact-active {
    color: #f099bb;
  }

  .nexmoe-tab a.router-link-exact-active::after {
    color: #f099bb;
    content: "";
    background-color: #f099bb;
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

</style>

<template>
  <div id="nexmoe-header">
    <div class="nexmoe-tab" v-if="$route.matched[0].path !== '/message/:id'&& $route.matched[0].path != '/setting'">
      <router-link tag="a" to="/">最新</router-link>
      <router-link tag="a" to="/time">时间块</router-link>
    </div>
    <div class="nexmoe-tab" v-if="$route.matched[0].path == '/message/:id' || $route.matched[0].path == '/setting'">
      <a v-on:click="$router.back(-1)"><i class="nexmoefont icon-arrowleft"></i> 返回</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        item: {
          avatar: 'https://avatar.dawnlab.me/qq/776194970',
          name: '折影轻梦',
          qq: '776194970',
          category: '这是一个分类',
          article: '这是一段内容'
        }
      }
    }
  }

</script>

<style>
  body {
    padding-top: 46px;
  }

  #nexmoe-header {
    position: fixed;
    top: 0;
    width: 100%;
  }

  a {
    cursor: pointer;
  }

</style>

<template>
  <div id="nexmoe-nav">
    <ul class="nexmoe-nav">
      <li>
        <router-link tag="a" to="/"><i class="nexmoefont icon-home"></i></router-link>
      </li>
      <li>
        <a class="nexmoe-plus"><i class="nexmoefont icon-plus"></i></a>
      </li>
      <li>
        <router-link tag="a" to="/setting/home"><i class="nexmoefont icon-user"></i></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
  }

</script>

<style>
  body {
      padding-bottom: 56px;
  }
  #nexmoe-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  #nexmoe-nav .nexmoe-nav {
    height: 56px;
    display: flex;
    border-top: 1px solid #ececec;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
  }

  #nexmoe-nav .nexmoe-nav li {
    max-width: none;
    flex: 1;
    text-align: center;
    line-height: 56px;
    color: #adadad;
  }

  #nexmoe-nav .nexmoe-nav a {
    display: block;
    color: #adadad;
    background-color: #fff;
  }

  #nexmoe-nav .nexmoe-nav a i {
    font-size: 28px;
  }

  #nexmoe-nav .nexmoe-nav a.router-link-exact-active {
      color: #f4a8ba;
  }

  #nexmoe-nav .nexmoe-nav .nexmoe-plus {
    background-color: #f4a8ba;
    color: #fff;
    width: 64px;
    border-radius: 100%;
    height: 64px;
    line-height: 65px;
    position: absolute;
    border: 6px solid #fff;
    bottom: 0;
    left: calc(50% - 32px);
    box-shadow: 0 -4px 7px rgba(161, 177, 204, .2);
    cursor: pointer;
  }

</style>

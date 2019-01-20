<template>
  <div id="nexmoe-nav">
    <div class="nexmoe-sent" v-bind:class="{ active: formappear }">
      <el-button>发送</el-button>
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
      </el-input>
    </div>
    <ul class="nexmoe-nav">
      <li>
        <router-link tag="a" to="/"><i class="nexmoefont icon-home"></i></router-link>
      </li>
      <li>
        <a class="nexmoe-plus" v-bind:class="{ active: formappear }" v-on:click="sent()">
          <div class="icon-menu"></div>
          <div class="icon-menu"></div>
        </a>
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
      return {
        formappear: false,
      }
    },
    methods: {
      sent: function () {
        if (this.formappear == false) {
          this.formappear = true;
        } else {
          this.formappear = false;
        }
      }
    },
    watch: {
      $route(to, from) {
        this.formappear = false;
      }
    }
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

  #nexmoe-nav .nexmoe-sent {
    height: 0;
    transform: translateY(100px);
    transition: all .35s;
    opacity: 0;
    background-color: #fff;
    width: 100%;
    padding: 0;
    border-radius: 10px 10px 0 0;
    box-sizing: border-box;
    box-shadow: 0 -2px 7px rgba(161, 177, 204, .2);
  }

  #nexmoe-nav .nexmoe-sent.active {
    transform: translateY(0);
    padding: 10px;
    height: auto;
    opacity: 1;
  }


  #nexmoe-nav .nexmoe-sent textarea {
    max-height: 54px;
    margin-bottom: 20px;
  }

  #nexmoe-nav .nexmoe-sent button {
    border: none;
    float: right;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  #nexmoe-nav .nexmoe-nav {
    z-index: 9;
    position: relative;
    height: 56px;
    display: flex;
    border-top: 1px solid #ececec;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
    width: 100%;
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
    transition: all .35s;
    background-color: #f4a8ba;
    color: #fff;
    width: 64px;
    border-radius: 100%;
    height: 64px;
    line-height: 64px;
    position: absolute;
    border: 6px solid #fff;
    bottom: 0;
    left: calc(50% - 32px);
    box-shadow: 0 -4px 7px rgba(161, 177, 204, .2);
    cursor: pointer;
  }

  #nexmoe-nav .nexmoe-nav .nexmoe-plus .icon-menu {
    transition: all .35s;
    width: 24px;
    height: 3px;
    left: 20px;
    position: absolute;
    border-radius: 6px;
    background-color: #fff;
  }

  #nexmoe-nav .nexmoe-nav .nexmoe-plus .icon-menu:nth-child(3n+1) {
    top: 30.5px;
    transform: rotate(90deg);
  }

  #nexmoe-nav .nexmoe-nav .nexmoe-plus .icon-menu:nth-child(3n+2) {
    top: 30.5px;
  }

  #nexmoe-nav .nexmoe-nav .nexmoe-plus.active .icon-menu:nth-child(3n+1) {
    transform: rotate(315deg);
  }

  #nexmoe-nav .nexmoe-nav .nexmoe-plus.active .icon-menu:nth-child(3n+2) {
    transform: rotate(225deg);
  }

</style>

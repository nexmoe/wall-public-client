<template>
  <div class="nexmoe-setting home">
    <div class="nexmoe-user">
      <div class="nexmoe-avatar"><img :src="item.avatar"></div>
      <div class="nexmoe-name">{{ item.name }}</div>
      <div class="nexmoe-bg"></div>
    </div>
    <ul>
      <li>
        <router-link tag="a" to="/setting/about"><i class="nexmoefont icon-infomation"></i>关于程序</router-link>
      </li>
    </ul>
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
        },
      }
    },
    created: function () {
      this.axios.get('http://dev.nexmoe.com:1004/api/view/user')
        .then((res) => {
          this.item = res.data;
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  }

</script>
<style>
  .nexmoe-setting.home {
    background-color: #fff;
    height: calc(100vh - 102px);
  }

  .nexmoe-setting.home ul {
    margin: 0 50px !important;
    margin-top: 10px !important;
  }

  .nexmoe-setting.home ul li {
    border-bottom: none !important;
    line-height: 32px;
    padding: 10px 0!important;
    zoom: 1.1;
  }

  .nexmoe-setting.home ul li a i {
    position: relative;
    width: 32px;
    display: inline-block;
    text-align: center;
    z-index: 0;
    color: #f099bb;
    margin-right: 5px;
  }

  .nexmoe-setting.home ul li a i::after {
    content: "";
    height: 28px;
    width: 28px;
    background-color: rgba(240, 153, 187, .1);
    position: absolute;
    left: 2px;
    border-radius: 100%;
    top: 2px;
    z-index: -1;
  }

  .nexmoe-user {
    position: relative;
    height: 180px;
    z-index: 2;
    margin-bottom: 60px;
  }

  .nexmoe-user::after {
    content: '';
    left: 0;
    right: 0;
    bottom: -1px;
    height: 90px;
    z-index: 1;
    position: absolute;
    -webkit-clip-path: polygon(0 100%, 100% 0, 100% 100%);
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    background: #fff;
    z-index: -1;
  }

  .nexmoe-user .nexmoe-avatar {
    height: auto!important;
    position: absolute;
    right: 55px;
    bottom: 15px;
  }

  .nexmoe-user .nexmoe-avatar img {
    border-radius: 100%;
    width: 100px;
    height: 100px!important;
    border: 5px solid #fff;
  }

  .nexmoe-user .nexmoe-name {
    color: #fff;
    position: absolute;
    left: 55px;
    bottom: 45px;
    font-size: 1.5em;
    line-height: 60px;
    padding: 0!important;
  }

  .nexmoe-user .nexmoe-bg {
    height: 100%;
    width: 100%;
    background-color: #f099bb;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

</style>

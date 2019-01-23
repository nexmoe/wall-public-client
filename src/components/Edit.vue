<template>
  <div id="nexmoe-content">
      <div class="nexmoe-item">
        <div class="nexmoe-author">
          <div class="nexmoe-avatar"><img :src="item.avatar"></div>
          <div class="nexmoe-name">{{ item.name }}</div>
          <div class="nexmoe-s">2019年1月19日</div>
        </div>
        <div class="nexmoe-category">
          # {{ item.category }}
        </div>
        <div class="nexmoe-article">
          <p>{{ item.article }}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      item: 
        {avatar:'https://avatar.dawnlab.me/qq/776194970',name:'折影轻梦',qq:'776194970',category:'这是一个分类',article:'😂这是一段内容'},
    }
  },
}
</script>

<style>
  #nexmoe-content .nexmoe-item {
    background-color: #fff;
    margin-bottom: 10px;
  }
  #nexmoe-content .nexmoe-author {
    padding: 10px;
    height: 56px;
  }
  #nexmoe-content .nexmoe-avatar {
    height: 100%;
    float: left;
  }
  #nexmoe-content .nexmoe-avatar img {
    height: 100%;
    border-radius: 100%;
    background: #fff;
  }
  #nexmoe-content .nexmoe-name {
    float: left;
    width: calc(100% - 56px);
    margin-top: 6px;
    box-sizing: border-box;
    padding: 0 10px;
  }
  #nexmoe-content .nexmoe-s {
    float: left;
    width: calc(100% - 56px);
    margin-top: 2px;
    box-sizing: border-box;
    padding: 0 10px;
    color: #656565;
  }
  #nexmoe-content .nexmoe-category {
    padding: 10px;
    background-color: #f8f8f8;
  }
  #nexmoe-content .nexmoe-article {
    padding: 1px 0;
  }
  #nexmoe-content .nexmoe-article p {
    margin: 10px ;
  }
</style>

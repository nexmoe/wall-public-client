<template>
  <div id="nexmoe-content">
    <div class="nexmoe-categorys">
      <a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a><a>分类</a>
    </div>
    <div class="nexmoe-list" v-for="item in items" :key="item.time">
      <router-link tag="a" to="/message/233" class="nexmoe-item">
        <div class="nexmoe-author">
          <div class="nexmoe-avatar"><img :src="item.avatar"></div>
          <div class="nexmoe-name">{{ item.name }}</div>
          <div class="nexmoe-s">{{ item.qq }}</div>
        </div>
        <div class="nexmoe-category">
          # {{ item.category }}
        </div>
        <div class="nexmoe-article">
          <p>{{ item.article }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [
        {avatar:'https://avatar.dawnlab.me/qq/776194970',name:'折影轻梦',qq:'2019年1月19日',category:'这是一个分类',article:'这是一段内容'},
        {avatar:'https://avatar.dawnlab.me/qq/776194970',name:'折影轻梦',qq:'2019年1月19日',category:'这是一个分类',article:'这是一段内容'},
        {avatar:'https://avatar.dawnlab.me/qq/776194970',name:'折影轻梦',qq:'2019年1月19日',category:'这是一个分类',article:'这是一段内容'},
        {avatar:'https://avatar.dawnlab.me/qq/776194970',name:'折影轻梦',qq:'2019年1月19日',category:'这是一个分类',article:'这是一段内容'},
        {avatar:'https://avatar.dawnlab.me/qq/776194970',name:'折影轻梦',qq:'2019年1月19日',category:'这是一个分类',article:'这是一段内容'},
        {avatar:'https://avatar.dawnlab.me/qq/776194970',name:'折影轻梦',qq:'2019年1月19日',category:'这是一个分类',article:'这是一段内容'},
        {avatar:'https://avatar.dawnlab.me/qq/776194970',name:'折影轻梦',qq:'2019年1月19日',category:'这是一个分类',article:'这是一段内容'}]
    }
  }
}
</script>

<style>
  #nexmoe-content .nexmoe-categorys {
    padding-top: 10px;
    padding-left: 10px;
  }
  #nexmoe-content .nexmoe-categorys a {
    background-color: #fff;
    border-radius: 4px;
    padding: 2px 6px;
    margin: 0 10px 10px 0;
    display: inline-block;
  } 
  #nexmoe-content .nexmoe-item {
    background-color: #fff;
    margin-bottom: 10px;
    display: block;
    color: #010101;
  }
  #nexmoe-content .nexmoe-item .nexmoe-author {
    padding: 10px;
    height: 56px;
  }
  #nexmoe-content .nexmoe-item .nexmoe-avatar {
    height: 100%;
    float: left;
  }
  #nexmoe-content .nexmoe-item .nexmoe-avatar img {
    height: 100%;
    border-radius: 100%;
    background: #fff;
  }
  #nexmoe-content .nexmoe-item .nexmoe-name {
    float: left;
    width: calc(100% - 56px);
    margin-top: 6px;
    box-sizing: border-box;
    padding: 0 10px;
  }
  #nexmoe-content .nexmoe-item .nexmoe-s {
    float: left;
    width: calc(100% - 56px);
    margin-top: 2px;
    box-sizing: border-box;
    padding: 0 10px;
    color: #656565;
  }
  #nexmoe-content .nexmoe-item .nexmoe-category {
    padding: 10px;
    background-color: #f8f8f8;
  }
  #nexmoe-content .nexmoe-item .nexmoe-article {
    padding: 1px 0;
  }
  #nexmoe-content .nexmoe-item .nexmoe-article p {
    margin: 10px ;
  }
</style>

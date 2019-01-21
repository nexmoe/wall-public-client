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
      <div class="nexmoe-comment">
        <div class="nexmoe-tab">
          <router-link tag="a" to="/message/233">评论 23</router-link>
        </div>
        <ul>
          <li>
            <div class="nexmoe-author">
              <div class="nexmoe-avatar"><img :src="item.avatar"></div>
              <div class="nexmoe-name">{{ item.name }}</div>
              <div class="nexmoe-s"><span>2019年1月19日</span> <span>回复</span></div>
            </div>
            <div class="nexmoe-text">
              2333
            </div>
            <ul>
          <li>
            <div class="nexmoe-author">
              <div class="nexmoe-avatar"><img :src="item.avatar"></div>
              <div class="nexmoe-name">{{ item.name }}</div>
              <div class="nexmoe-s"><span>2019年1月19日</span> <span>回复</span></div>
            </div>
            <div class="nexmoe-text">
              2333
            </div>
          </li>
          <li>
            <div class="nexmoe-author">
              <div class="nexmoe-avatar"><img :src="item.avatar"></div>
              <div class="nexmoe-name">{{ item.name }}</div>
              <div class="nexmoe-s"><span>2019年1月19日</span> <span>回复</span></div>
            </div>
            <div class="nexmoe-text">
              2333
            </div>
          </li>
        </ul>
          </li>
          <li>
            <div class="nexmoe-author">
              <div class="nexmoe-avatar"><img :src="item.avatar"></div>
              <div class="nexmoe-name">{{ item.name }}</div>
              <div class="nexmoe-s"><span>2019年1月19日</span> <span>回复</span></div>
            </div>
            <div class="nexmoe-text">
              2333
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      item: 
        {avatar:'https://avatar.dawnlab.me/qq/776194970',name:'折影轻梦',qq:'776194970',category:'这是一个分类',article:'😂这是一段内容'}
    }
  },
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
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
  #nexmoe-content .nexmoe-comment {
    background-color: #fff;
  }
  #nexmoe-content .nexmoe-comment .nexmoe-author {
    height: 42px;
  }
  #nexmoe-content .nexmoe-name,
  #nexmoe-content .nexmoe-s {
    margin-top: 0;
  }
  #nexmoe-content .nexmoe-comment ul {
    list-style: none;
    padding-left: 0; 
    margin: 0;
  }
  #nexmoe-content .nexmoe-comment ul ul {
    padding-left: 52px; 
  }
  #nexmoe-content .nexmoe-comment ul li {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  #nexmoe-content .nexmoe-comment ul ul li {
    padding-bottom: 0;
    border-bottom: none;
  }
  #nexmoe-content .nexmoe-comment ul .nexmoe-text {
    padding-left: 62px;
    margin-top: -10px;
  }
</style>

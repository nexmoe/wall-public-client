<template>
  <div id="nexmoe-content">
    <div class="nexmoe-categorys">
      <router-link v-for="item in category" :key="item.time" tag="a" :to="'/category/'+item.cid"># {{ item.name }}</router-link>
    </div>
    <div class="nexmoe-list" v-for="item in message" :key="item.time">
      <content-placeholders class="nexmoe-item" v-if="loading">
        <content-placeholders-heading :img="true" />
        <content-placeholders-img />
        <content-placeholders-text />
      </content-placeholders>
      <router-link tag="a" :to="'/message/'+item.mid" class="nexmoe-item" v-if="!loading">
        <div class="nexmoe-author">
          <div class="nexmoe-avatar"><img :src="item.author.avatar"></div>
          <div class="nexmoe-name">{{ item.author.name }}</div>
          <div class="nexmoe-s">{{ item.time }}</div>
        </div>
        <div class="nexmoe-category">
          # {{ item.category }}
        </div>
        <div class="nexmoe-article">
          <p v-for="item in item.article" :key="item.time">
            <span v-if="item.type == 'p'">{{ item.text }}</span>
            <img v-if="item.type == 'img'" :src="item.text">
          </p>
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
      loading: true,
      category: '',
      message: [{},{},{}]
    }
  },
  mounted: function () {
    this.axios.get('http://dev.nexmoe.com:1004/api/view/category')
      .then((res) => {
        this.category = res.data;
      })
      .catch(function (error) {
        console.log(error)
      });
    this.axios.get('http://dev.nexmoe.com:1004/api/view/message')
      .then((res) => {
        this.message = res.data;
      })
      .catch(function (error) {
        console.log(error)
      });
    this.loading = false;
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
    color: #010101;
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
  #nexmoe-content .nexmoe-article {
    padding: 1px 0;
  }
  #nexmoe-content .nexmoe-article p {
    margin: 10px ;
  }
  #nexmoe-content .nexmoe-article p img {
    margin: 0 -10px;
    width: calc(100% + 20px);
  }
</style>

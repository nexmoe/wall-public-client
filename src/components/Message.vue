<template>
  <div id="nexmoe-content">
    <content-placeholders class="nexmoe-item" v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-img />
      <content-placeholders-text />
    </content-placeholders>
    <div class="nexmoe-item" v-if="!loading">
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
    </div>
    <div class="nexmoe-comment">
      <div class="nexmoe-tab">
        <router-link tag="a" :to="'/message/'+item.mid">评论 {{ item.comment.count }}</router-link>
      </div>
      <ul v-for="comment in item.comment.data" :key="comment.time" v-if="loading">
        <li>
          <content-placeholders class="nexmoe-item">
            <content-placeholders-heading :img="true" />
            <content-placeholders-text :lines="1" />
          </content-placeholders>
          <ul>
            <li>
              <content-placeholders class="nexmoe-item">
                <content-placeholders-heading :img="true" />
                <content-placeholders-text :lines="1" />
              </content-placeholders>
            </li>
          </ul>
        </li>
      </ul>
      <Comment :comment="item.comment.data" v-show="!loading"></Comment>
    </div>
  </div>
</template>

<script>
  import Comment from '@/components/Comment'
  export default {
    components: {
      Comment
    },
    data() {
      return {
        loading: true,
        item: {
          comment: {
            data: [{}, {}, {}]
          }
        }
      }
    },
    mounted: function () {
      this.axios.get('http://dev.nexmoe.com:1004/api/view/message/' + this.$route.params.id)
        .then((res) => {
          this.item = res.data;
        })
        .catch(function (error) {
          console.log(error)
        });
      this.loading = false;
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
    margin: 10px;
  }

  #nexmoe-content .nexmoe-article p img {
    margin: 0 -10px;
    width: calc(100% + 20px);
  }

  #nexmoe-content .nexmoe-comment {
    background-color: #fff;
  }

</style>

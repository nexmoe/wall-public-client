<template>
  <div>
    <ul v-for="comment in comment" :key="comment.time">
      <li>
        <div class="nexmoe-author">
          <div class="nexmoe-avatar"><img :src="comment.author.avatar"></div>
          <div class="nexmoe-name">{{ comment.author.name }} <span v-if="comment.parent!=='0'">回复</span> {{ comment.parent.name }}</div>
          <div class="nexmoe-s"><span>{{ comment.time }}</span> <span>回复</span></div>
        </div>
        <div class="nexmoe-text">
          {{ comment.text }}
        </div>
        <Comment :comment="comment.children"></Comment>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"Comment",
    props: ['comment'],
    data() {
      return {
      }
    },

  }

</script>

<style>
  #nexmoe-content .nexmoe-comment {
    background-color: #fff;
  }

  #nexmoe-content .nexmoe-comment .nexmoe-author {
    height: 42px;
    padding-bottom: 0;
  }

  #nexmoe-content .nexmoe-comment .nexmoe-name,
  #nexmoe-content .nexmoe-comment .nexmoe-s {
    margin-top: 0 !important;
    line-height: 21px;
    height: 21px;
  }

  #nexmoe-content .nexmoe-comment ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  #nexmoe-content .nexmoe-comment ul ul {
    padding-left: 52px;
  }

  #nexmoe-content .nexmoe-comment ul ul ul {
    padding-left: 0;
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
    text-align: left;
  }

</style>

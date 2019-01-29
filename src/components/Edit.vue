<template>
  <div id="nexmoe-content">
    <div class="nexmoe-item">
      <div class="nexmoe-category">
        # {{ item.category }}
      </div>
      <div class="nexmoe-article">
        <p v-for="item in item.article" :key="item.time">{{ item.p }}<img v-if="item.img" :src="item.img"></p>
      </div>
    </div>
    <div class="nexmoe-item">
      <el-input type="textarea" placeholder="请输入内容" v-model="edit">
      </el-input>
       <el-button @click="onSubmit">添加第 {{ this.count }} 条内容</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Edit',
    data() {
      return {
        edit: '',
        count: 1,
        item: {
          category: '这是一个分类',
          article: [
            {p:'　　以下这段话是给无名氏朋友。'},
            {img:'https://i.loli.net/2018/10/02/5bb2624020a46.jpg'},
            {p:'　　我用老头子的想法反复思索了你特地寄来一张白纸的理由。因为我觉得这一定是件很重要的事，不能随随便便地答复。我开动快要糊涂的脑筋想了又想，最后理解为，这代表没有地图。 如果把来找我咨询的人比喻成迷途的羔羊，通常他们手上都有地图，却没有去看，或是不知道自己目前的位置。'},
            {p:'　　但我相信你不属于这两种情况。你的地图是一张白纸，所以即使想决定目的地，也不知道路在哪里。'},
            {p:'　　地图是一张白纸，这当然很伤脑筋。任何人都会不知所措。'},
            {p:'　　可是换个角度来看，正因为是一张白纸，才可以随心所欲地描绘地图。一切全在你自己。对你来说，一切都是自由的，在你面前是无限的可能。这可是很棒的事啊。我衷心祈祷你可以相信自己，无悔地燃烧自己的人生。'},
            {p:'　　我以后应该不会再回答烦恼咨询了。感谢你在最后问了一个很有价值的难题。 浪矢杂货店'},
            {p:'浪矢杂货店'},
          ]
        },
      }
    },
    methods: {
      onSubmit() {
        if(this.edit != ''){
          this.items = this.item.article.push({ p: this.edit })
          this.edit = ''
          this.count ++
        }
      }
    }
  }

</script>

<style>
  .el-textarea__inner,.el-button {
    border: none;
  }
  .el-button {
    display: block;
    margin-left: auto;
    border-radius: 0;
  }
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

</style>

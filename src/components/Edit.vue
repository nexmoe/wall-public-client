<template>
  <div id="nexmoe-content">
    <div class="nexmoe-item">
      <div class="nexmoe-category">
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in category" :key="item.cid" :label="'# '+item.name" :value="item.cid">
          </el-option>
        </el-select>
      </div>
      <div class="nexmoe-article">
        <p v-for="item in article" :key="item.time">
          <span v-if="item.type == 'p'">{{ item.text }}</span>
          <img v-if="item.type == 'img'" :src="item.text">
        </p>
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
        category: '',
        value: '2336',
        article: []
      }
    },
    created: function () {
    this.axios.get('http://dev.nexmoe.com:1004/api/view/category')
      .then((res) => {
        this.category = res.data;
      })
      .catch(function (error) {
        console.log(error)
      });
    },
    methods: {
      onSubmit() {
        if (this.edit != '') {
          this.items = this.article.push({
            type: 'p',
            text: this.edit
          })
          this.edit = ''
          this.count++
        }
      }
    }
  }

</script>

<style>
  .el-textarea__inner,
  .el-button {
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

  #nexmoe-content .nexmoe-category .el-select {
    width: 100%;
    margin: -5px 0;
  }

  #nexmoe-content .nexmoe-category .el-input__inner {
    background-color: transparent;
    border: none;
    padding: 5px;
    font-size: 16px;
  }

  .el-select-dropdown__item {
    font-size: 16px;
    line-height: 48px;
    height: 49px;
  }

</style>

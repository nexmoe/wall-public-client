<template>
  <div id="nexmoe-content" class="edit">
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
      <el-button type="primary" @click="onSubmit">添加第 {{ this.count }} 条内容</el-button>
    </div>
    <el-button @click="send" style="width: 100%;">发布</el-button>
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
      this.axios.get(this.GLOBAL.API+'/view/user')
        .then((res) => {
          if(res.data['state']==0){
            this.$router.push('/login')
          }
        })
        .catch(function (error) {
          console.log(error)
        });
      this.axios.get(this.GLOBAL.API+'/view/category')
        .then((res) => {
          this.category = res.data;
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    methods: {
      send() {
        this.axios.post(this.GLOBAL.API+'/controller/edit/', {
            category: this.value,
            article: this.article,
          })
          .then((res) => {
            if (res.data.state == 1) {
              this.$alert(res.data.info, '发布成功！', {
                confirmButtonText: '确定',
                type: 'success',
              }).then(() => {
                this.$router.push('/')
              });
            } else {
              this.$alert(res.data.info, '发布失败！', {
                confirmButtonText: '确定',
                type: 'error'
              });
            }
          })
          .catch(function (error) {
            console.log(error)
          });
      },
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
  .edit .el-textarea__inner,
  .edit .el-button {
    border: none !important;
  }

  .edit .el-button {
    display: block !important;
    margin-left: auto !important;
    border-radius: 0 !important;
  }

  .el-select-dropdown__item {
    font-size: 16px!important;
    line-height: 48px!important;
    height: 49px!important;
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

</style>

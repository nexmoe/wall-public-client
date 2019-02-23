<template>
  <div id="nexmoe-content">
    <div class="nexmoe-categorys">
      <router-link v-for="item in category" :key="item.time" tag="a" :to="'/category/'+item.cid"># {{ item.name }}</router-link>
    </div>
    <div class="nexmoe-list">
      <content-placeholders class="nexmoe-item" v-if="loading">
        <content-placeholders-heading :img="true" />
        <content-placeholders-img />
        <content-placeholders-text />
      </content-placeholders>
      <content-placeholders class="nexmoe-item" v-if="loading">
        <content-placeholders-heading :img="true" />
        <content-placeholders-img />
        <content-placeholders-text />
      </content-placeholders>
      <content-placeholders class="nexmoe-item" v-if="loading">
        <content-placeholders-heading :img="true" />
        <content-placeholders-img />
        <content-placeholders-text />
      </content-placeholders>
      <router-link tag="a" v-for="item in message" :key="item.time" :to="'/message/'+item.mid" v-if="!loading">
        <Item :item="item" v-if="!loading"></Item>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/Item'

  export default {
    name: 'Home',
    components: {
      Item
    },
    data() {
      return {
        loading: true,
        category: '',
        message: ''
      }
    },
    mounted: function () {
      this.axios.get(this.GLOBAL.API + '/view/category')
        .then((res) => {
          this.category = res.data;
        })
        .catch(function (error) {
          console.log(error)
        });
      this.axios.get(this.GLOBAL.API + '/view/message')
        .then((res) => {
          this.message = res.data;
          this.loading = false;
        })
        .catch(function (error) {
          console.log(error)
        });
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
</style>

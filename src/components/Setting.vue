<template>
  <div id="nexmoe-content">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {

      }
    }
  }

</script>

<style>
#nexmoe-content .nexmoe-setting ul {
    background-color: #fff;
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 10px; 
}
#nexmoe-content .nexmoe-setting ul li {
    padding: 10px;
    border-bottom: 1px solid #eee;
}
#nexmoe-content .nexmoe-setting ul li a {
    color: #000;
    width: 100%;
    height: 100%;
    display: block;
}
</style>

<template>
  <div class="hello"><h1>基于Vue2的图片输入框</h1> <h1>图片预览、拖拽、回填——主题可选——高度可定制</h1> <small>多用于非单个上传，随其余表单字段一起上传的图片</small></div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

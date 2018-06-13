<template>
  <div class="hello"><h1>优雅的图片输入、上传组件</h1> <h1>自动上传、图片预览、拖拽、回填、主题可选、高度可定制</h1> <small>多用于非单个上传，随其余表单字段一起上传的图片</small></div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<style scoped>
.hello {
  margin: 20px 0;
}

h1,
h2 {
  font-weight: normal;
  font-size: 20px;
  line-height: 1.3;
  margin: 3px 0;
}

small {
  display: block;
  margin-top: 20px;
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

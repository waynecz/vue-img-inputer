<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Hello></Hello>
    <imgInputer v-model="file" accept="image/*" @onChange="fileChange"></imgInputer>
    <h1><code>default</code></h1>

    <imgInputer v-model="file" accept="image/*" icon="img" @onChange="fileChange"></imgInputer>
    <h1><code>icon="img"</code></h1>

    <imgInputer v-model="file" accept="image/*" theme="light" @onChange="fileChange"></imgInputer>
    <h1><code>theme="light"</code></h1>

    <imgInputer v-model="file" accept="image/*" placeholder="请选择身份证" @onChange="fileChange"></imgInputer>
    <h1><code>placeholder="..."</code></h1>

    <imgInputer v-model="file" accept="image/*" imgSrc="http://7xntdk.com1.z0.glb.clouddn.com/2.jpg" @onChange="fileChange"></imgInputer>
    <h1><code>imgSrc="..."</code></h1>

    <imgInputer v-model="file" accept="image/*" readonly imgSrc="http://7xntdk.com1.z0.glb.clouddn.com/11.jpg" @onChange="fileChange"></imgInputer>
    <h1><code>imgSrc="..." readonly</code></h1>

    <imgInputer v-model="file" accept="image/*" readonly noMask imgSrc="http://7xntdk.com1.z0.glb.clouddn.com/12.jpg" @onChange="fileChange"></imgInputer>
    <h1><code>imgSrc="..." readonly noMask</code></h1>

    <imgInputer v-model="file" accept="image/*" nhe @onChange="fileChange"></imgInputer>
    <h1><code>nhe //no-hover-effect</code></h1>

    <imgInputer v-model="file" accept="image/*" size="small" @onChange="fileChange"></imgInputer>
    <h1><code>size="small"</code></h1>

    <imgInputer v-model="file" accept="image/*" size="large" @onChange="fileChange"></imgInputer>
    <h1><code>size="large"</code></h1>

  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    },
    data() {
      return {
        file: null
      };
    },
    methods: {
      fileChange(file, name) {
        console.log('File:', file);
        console.log('FileName:', name);
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    padding-bottom: 100px
  }

  .test-inputer {
    margin-top: 50px
  }

  code {
    background: #35495e;
    padding: 5px 20px;
    display: inline-block;
    color: #ffeb59;
    font-size: 28px;
    line-height: 1.5;
    border-radius: 5px
  }

  h1, h2 {
    font-weight: 400
  }

  ul {
    list-style-type: none;
    padding: 0
  }

  li {
    display: inline-block;
    margin: 0 10px
  }

  a {
    color: #42b983
  }
  .img-inputer {
    margin-top: 50px;
  }
</style>

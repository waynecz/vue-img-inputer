<template>
  <div id="app">
    <img class="logo" width="400" src="../src/assets/vip-logo.png">

    <Hello></Hello>

    <section class="wrapper">
      <div class="item">
        <ImgInputer
          v-model="file"
          accept="image/*"
          :maxSize="500"
          @onExceed="exceedHandler"
          @onChange="fileChange"
        ></ImgInputer>
        <h1>
          <code>default</code>
        </h1>
      </div>

      <div class="item">
        <ImgInputer
          auto-upload
          action="//jsonplaceholder.typicode.com/posts/"
          :on-error="onErr"
          v-model="file"
          accept="image/*.jpeg"
          @onChange="fileChange"
        ></ImgInputer>
        <h1>
          <code>auto-upload</code>
        </h1>
      </div>

      <div class="item">
        <ImgInputer v-model="file" accept="image/*" icon="img" @onChange="fileChange"></ImgInputer>
        <h1>
          <code>icon="img"</code>
        </h1>
      </div>

      <div class="item">
        <ImgInputer v-model="file" accept="image/*" theme="light" @onChange="fileChange"></ImgInputer>
        <h1>
          <code>theme="light"</code>
        </h1>
      </div>

      <div class="item">
        <ImgInputer v-model="file" accept="image/*" placeholder="请选择身份证" @onChange="fileChange"></ImgInputer>
        <h1>
          <code>placeholder="..."</code>
        </h1>
      </div>

      <div class="item">
        <ImgInputer v-model="file" accept="image/*" :imgSrc="cloudImg" @onChange="fileChange"></ImgInputer>
        <h1>
          <code>img-src="..."</code>
        </h1>
      </div>

      <div class="item">
        <ImgInputer
          v-model="file"
          accept="image/*"
          readonly
          imgSrc="https://images.unsplash.com/photo-1543868067-52959e8eef59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
          @onChange="fileChange"
        ></ImgInputer>
        <h1>
          <code>readonly</code>
        </h1>
      </div>

      <div class="item">
        <ImgInputer
          v-model="file"
          accept="image/*"
          readonly
          noMask
          imgSrc="https://images.unsplash.com/photo-1468233748640-b31327627610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=732&q=80"
          @onChange="fileChange"
        ></ImgInputer>
        <h1>
          <code>no-mask</code>
        </h1>
      </div>

      <div class="item">
        <ImgInputer v-model="file" accept="image/*" no-hover-effect @onChange="fileChange"></ImgInputer>
        <h1>
          <code>no-hover-effect</code>
        </h1>
      </div>

      <div class="item">
        <ImgInputer v-model="file" accept="image/*" size="small" @onChange="fileChange"></ImgInputer>
        <h1>
          <code>size="small"</code>
        </h1>
      </div>

      <div class="item">
        <ImgInputer v-model="file" accept="image/*" size="large" @onChange="fileChange"></ImgInputer>
        <h1>
          <code>size="large"</code>
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";

export default {
  name: "app",

  components: {
    Hello
  },

  data() {
    return {
      file: null,
      cloudImg: ""
    };
  },

  mounted() {
    setTimeout(() => {
      this.cloudImg =
        "https://images.unsplash.com/photo-1519734019-1cc9bdc4f806?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80";
    }, 2000);
  },

  methods: {
    fileChange(file, name) {
      console.log("File --> ", file);
      console.log("FileName -->", name);
    },

    onErr(err, file) {
      console.log("​onErr -> file", file);
      console.log("​onErr -> err", err);
    },

    exceedHandler(file) {
      console.warn("onExceed -> file", file);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 100px;
}

.test-inputer {
  margin-top: 50px;
}

code {
  background: #35495e;
  padding: 5px 20px;
  display: inline-block;
  color: #ffeb59;
  font-size: 28px;
  line-height: 1.5;
  border-radius: 5px;
}

h1,
h2 {
  font-weight: 400;
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

.img-inputer {
  margin-top: 60px;
}

.wrapper {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
}

.item {
  flex: 1 50%;
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>

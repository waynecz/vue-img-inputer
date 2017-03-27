# Vue-Img-Inputer

<img src="./src/images/demo.png">

## [中文文档](https://github.com/waynecz/vue-img-inputer/README-CN.MD)

## Features
+ Bind value with `v-model`
+ Support Pic preview/drop-select/max-size
+ Two themes
+ Convenient custom

### Applicable scene
It's just like a `<input type="file"/>`

### [Look the DEMO](http://waynecz.github.io/VueImgInputer/index.html)

## Support

Support Vue.js 2.0+

Not support Vue.js 1.x


## Install & Useage

```javascript
npm install vue-img-inputer -D
```

- As global component

```javascript
// in entry file
import Vue from 'vue'
import VueImgInputer from 'vue-img-inputer'
Vue.component('VueImgInputer', VueImgInputer)
```

- As partial component

```javascript
// in some component
import VueImgInputer from 'vue-img-inputer'
export default {
  components: {
    VueImgInputer
  }
}
```

### Sample
```html
<VueImgInputer v-model="picValue" theme="light" size="large"></VueImgInputer>
```

## Props

| Name    | Type    | Description   |  Optional value | Default |
| ------------- |-------| -----| ----| -------|
| v-model | — | the file was selected| —|—|
| accept | String | the same as `accept` in `input`，suggest to set a specific value like `image/jpg,image/gif;`, value as `image/*` will cause a problem that File-checkbox come out after a long time| —| image/\*,video/\*; |
| onChange  | Function | callback trigger after file selected，params: {file, filePath}， filePath is fakepath of file | —|—|
| placeholder | String | placeholder| —|点击或拖拽选择图片|
| maxSize | Number | max-size of pic (KB)| —|5120|
| imgSrc | String |  use VueImgInputer as `img` tag, you should assign a src of img :)| —|—|
| id | String | input's unique ID，assign it when you need to operate DOM, otherwise it will automatic generate a random string in 4 length to be it's ID| —| random string in 4 length |
| theme | String | theme| light,material|material|
| size | String | size| small,large|normal|
| icon | String | icon| img,clip,img2|clip,当theme为light时为img|
| readonly | Boolean | readonly，it will be `true` while `imgSrc` was not empty| —|false|
| bottomText | String | text in the bottom while select a pic && hover component| —|点击或拖拽图片以修改|
| readonlyTipText | String | only when readonly was `true` was effective，replace `bottomText` | —|不可更改|
| customerIcon | 类似`&#xe624;` | if you use iconfont of alibaba，Congratulations! you can use this prop set any value to replace component's own icon | —|—|
| noMask | Boolean | 使组件在图片已选或已回填的情况下hover无信息| —|false|
| nhe | Boolean | no-hover-effect| —|false|
| name| String | name of input, the same as `name` in `input`  | - | file |


## Style

+ CSS was under [BEM](http://www.w3cplus.com/css/bem-definitions.html) style，so you can customize your own `size` & `theme` in easy way

## TODO

+ Multi-file support

## Compatibility

PC: IE10+

Mobile: be happy to use

## LICENSE

MIT
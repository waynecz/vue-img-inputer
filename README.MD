# Vue-Img-Inputer

<img src="./src/images/demo.png">

## 功能预览

+ 图片预览、拖拽、回填、大小限制
+ 主题可选
+ 高度可定制

### 适用场景
因为看了很多uploader都是选择文件直接上传了，所以做个需要配合表单的form-item型的图片输入框

### [demo请移步](http://waynecz.github.io/VueImgInputer/index.html)

##Support

Support Vue.js 2.0+

Not support Vue.js 1.x


## 安装和使用

```javascript
npm install vue-img-inputer
```

- 作为全局组件使用

```javascript
//在项目入口文件
import Vue from 'vue'
import VueImgInputer from 'vue-img-inputer'
Vue.component('VueImgInputer', VueImgInputer)
```

- 作为局部组件

```javascript
//在某个组件中
import VueImgInputer from 'vue-img-inputer'
export default {
  components: {
    VueImgInputer
  }
}
```

### 简单的例子
```html
<vue-img-inpiter theme="light" size="large"></vue-img-inpiter>
```


## API

### Props

| 参数    | 类型    | 说明   |  可选值 | 默认值 |
| ------------- |-------| -----| ----| -------|
| v-model | — | 选中的文件| —|—|
| onChange  | Function | 文件更改时可触发的回调（可选） | —|—|
| placeholder | String | 占位符| —|点击或拖拽选择图片|
| maxSize | Number | 图片的最大值(KB)| —|5120|
| imgSrc | String |  图片回填时展示的图片地址| —|—|
| id | String | 选择框唯一ID，需要操作DOM时才填写，默认情况下会生成一个页面唯一的字符串当做id| —|四位随机字符串|
| theme | String | 主题| light,material|material|
| size | String | 组件大小| small,large|normal|
| icon | String | 展示图标的名称| img,clip,img2|clip,当theme为light时为img|
| readonly | Booleam | 是否为只读，当图片为回填值时可能不允许用户更改图片| —|false|
| bottomText | String | 图片选中或回填后鼠标hover显示的下方提示文字| —|点击或拖拽图片以修改|
| readonlyTipText | String | 只当readonly为true时生效，替代bottomText | —|不可更改|
| customerIcon | 类似`&#xe624;` | 如果你也在项目中用阿里的iconfont，那么恭喜，你可以通过这个props传入值随意替代icon| —|—|
| noMask | Boolean | 使组件在图片已选或已回填的情况下hover无信息| —|false|
| nhe | Boolean | no-hover-effect，使组件hover无效果| —|false|


## 关于扩展

###样式

+ 采用[BEM](http://www.w3cplus.com/css/bem-definitions.html)写法，所以覆盖还是非常容易的
+ 你可以加入新的`size`或者`theme`

###TODO

+ 添加多文件支持
+ 支持其余文件上传
+ README in EN ?

## 感谢
[@OYsun](https://github.com/OYsun), 项目结构和文档基本受OYsun启发，谢谢！

## 兼容性
IE9+

## bug和建议

如果在使用中遇到问题或者建议，欢迎提`issues`

## LICENSE

MIT
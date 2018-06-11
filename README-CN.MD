# Vue-Img-Inputer

<img src="./src/images/demo.png">

![GitHub release](https://img.shields.io/badge/release-v2.0.0-orange.svg?style=for-the-badge)
![Bili](https://img.shields.io/badge/bili-3-blue.svg?style=for-the-badge)

<br>

### 简介

- 单个图片选择
- 图片预览、拖拽、回填、大小限制
- 主题可选
- 高度定制

<br>

### 适用场景

作为一个 form-item 选择图片不直接上传的情况

<br>

### 关于各功能实现

[从 0 开始做一个的 Vue 图片/ 文件选择(上传)组件--基础向](https://segmentfault.com/a/1190000008503338)

<br>

### [Demo](http://waynecz.github.io/VueImgInputer/index.html)

<br>

## 安装和使用

```javascript
npm install vue-img-inputer -D
```

- 作为全局组件使用

```javascript
//在项目入口文件
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

Vue.component('ImgInputer', ImgInputer)
```

````
### 简单的例子
```html
<img-inputer v-model="file" theme="light" size="large"/>
````

<br>

### Props

| 参数                | 类型           | 说明                                                                              | 可选值         | 默认值                          |
| ------------------- | -------------- | --------------------------------------------------------------------------------- | -------------- | ------------------------------- |
| `v-model`           | —              | 选中的文件                                                                        | —              | —                               |
| `accept`            | String         | 接收文件类型，建议具体化不要用\*匹配，否则可能导致选择框弹出时间很长的问题        | —              | image/\*,video/\*;              |
| `onChange`          | Function       | 文件更改时触发的回调，参数分别是(file, fileName)                                  | —              | —                               |
| `placeholder`       | String         | 占位符                                                                            | —              | 点击或拖拽选择图片              |
| `max-size`          | Number         | 图片的最大值(KB)                                                                  | —              | 5120                            |
| `img-src`           | String         | 图片回填时展示的图片地址                                                          | —              | —                               |
| `id`                | String         | 选择框唯一 ID，需要操作 DOM 时才填写，默认情况下会生成一个页面唯一的字符串当做 id | —              | 四位随机字符串                  |
| `theme`             | String         | 主题                                                                              | light,material | material                        |
| `size`              | String         | 组件大小                                                                          | small,large    | normal                          |
| `icon`              | String         | 展示图标的名称                                                                    | img,clip,img2  | clip,当 theme 为 light 时为 img |
| `readonly`          | Boolean        | 是否为只读，当图片为回填值时可能不允许用户更改图片                                | —              | false                           |
| `bottomText`        | String         | 图片选中或回填后鼠标 hover 显示的下方提示文字                                     | —              | 点击或拖拽图片以修改            |
| `readonly-tip-text` | String         | 只当 readonly 为 true 时生效，替代 bottomText                                     | —              | 不可更改                        |
| `customer-icon`     | 类似`&#xe624;` | 如果你也在项目中用阿里的 iconfont，你可以通过这个 props 传入值随意替代 icon       | —              | —                               |
| `no-mask`           | Boolean        | 使组件在图片已选或已回填的情况下 hover 无信息                                     | —              | false                           |
| `no-hover-effect`   | Boolean        | no-hover-effect，使组件 hover 无效果                                              | —              | false                           |
| `name`              | String         | input 框的 name 属性值                                                            | -              | file                            |

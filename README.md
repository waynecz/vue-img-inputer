<br>

<p align="center">
  <img width="250px" src="./src/assets/vip-logo.png" alt="vip" />
</p>
<br>

<p align="center">
  <img alt="GitHub release" src="https://img.shields.io/badge/release-v2.0.0-orange.svg?style=for-the-badge"/>
  <img alt="poi" src="https://img.shields.io/badge/poi-10-green.svg?style=for-the-badge"/>
  <img alt="Bili" src="https://img.shields.io/badge/bili-3-blue.svg?style=for-the-badge"/>
</p>

<br>

<p align="center">
  <b>
    <a href="https://github.com/waynecz/vue-img-inputer/blob/master/README-CN.MD">点击查看中文文档</a>
    |
    <a href="http://waynecz.github.io/VueImgInputer/index.html">Have a glance at Demo</a>
  </b>
</p>

<br>

## Intro

- `<input type="file" />` like, only support single image
- auto-upload
- drop-select / preview / use as `<img />` as well
- optional skins

<br>

## Screenshots

<br>

## Install and Usage

```bash
npm install vue-img-inputer
```

```javascript
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

Vue.component('ImgInputer', ImgInputer)
```

```html
<img-inputer v-model="file" theme="light" size="large"/>
```

<br>

## API

#### ∙ `Auto upload` related

1.  **`auto-uoload`**  
    _type_: Boolean  
    _intro_: set to enable auto-upload

2.  **`action`**  
    _type_: String  
    _intro_: request URL

3.  **`upload-key`**  
    _type_: String  
    _default_: `'file'`  
    intro: key name in form-data

4.  **`extra-data`**  
    _type_: Object  
    _intro_: extra data append in request's form-data

5.  **`headers`**  
    _type_: Object  
    _intro_: set additional headers of request

6.  **`with-cookie`**  
    _type_: Boolean  
    _intro_: whether cookies will send

7.  **`on-start`**  
    _type_: Function  
    _params_: `func(file)`  
    intro: hook function when upload start

8.  **`on-progress`**  
    _type_: Function  
    _params_: `func(event, file)`  
    intro: hook function when uploading, get progress by `event.percent`

9.  **`on-success`**  
    _type_: Function  
    _params_: `func(res, file)`  
    intro: hook function when upload success, `res` is response from server

10. **`on-error`**  
    _type_: Function  
    _params_: `func(err, file)`  
    intro: hook function when upload failed

#### ∙ `Input` related

#### ∙ `UI` related

#### ∙ `Events`

#### ∙ `Methods`

| Name                | Type     | Description                                                                                                  | Optional value | Default                   |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------ | -------------- | ------------------------- |
| `v-model`           | —        | the file been selected                                                                                       | —              | —                         |
| `accept`            | String   | suggest to set a specific value like `image/jpg,image/gif;`, value while `image/*` may cause a serious delay | —              | image/\*,video/\*;        |
| `on-change`         | Function | callback trigger after file changed, params: {file, fileName}                                                | —              | —                         |
| `placeholder`       | String   | placeholder                                                                                                  | —              | 点击或拖拽选择图片        |
| `max-size`          | Number   | max-size of image (KB)                                                                                       | —              | 5120                      |
| `img-src`           | String   | `<img src="img-src"/>` like                                                                                  | —              | —                         |
| `id`                | String   | input's unique ID，assign it when you need to                                                                | —              | random string in 4 length |
| `theme`             | String   | -                                                                                                            | light,material | material                  |
| `size`              | String   | -                                                                                                            | small,large    | normal                    |
| `icon`              | String   | -                                                                                                            | img,clip,img2  | clip                      |
| `readonly`          | Boolean  | -                                                                                                            | —              | false                     |
| `bottom-text`       | String   | text in the bottom when hover                                                                                | —              | 点击或拖拽图片以修改      |
| `readonly-tip-text` | String   | visible when readonly, cover `bottom-text`                                                                   | —              | 不可更改                  |
| `customer-icon`     | String   | if you use iconfont, use this prop set any icon such as `&#xe624;`                                           | —              | —                         |
| `no-mask`           | Boolean  | remove mask while hover                                                                                      | —              | false                     |
| `no-hover-effect`   | Boolean  | -                                                                                                            | —              | false                     |
| `name`              | String   | name of input, the same as `name` in `input`                                                                 | -              | file                      |

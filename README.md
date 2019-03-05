<br>

<p align="center">
  <img width="300px" src="./src/assets/vip-logo.png" alt="vip" />
</p>
<br>

<p align="center">
  <img alt="GitHub release" src="https://img.shields.io/badge/release-v2.1.0-orange.svg?style=for-the-badge"/>
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
- auto-upload support
- drop-select / preview / use as `<img />` as well
- optional skins

<br>

## Screenshots

<p align="center">
  <img height="180px" src="./src/assets/screenshot.gif"/>
</p>

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

<details open><summary><strong><code>Auto upload</code> related</strong></summary>
<br>

1.  **`auto-upload`**: Boolean  
    set to enable auto-upload

2.  **`action`**: String  
    request URL

3.  **`upload-key`**: String  
    **default**: `file`  
    key name in form-data

4.  **`extra-data`**: Object  
    extra data been appended in request's form-data

5.  **`headers`**: Object  
    additional headers of request

6.  **`with-cookie`**: Boolean  
    whether cookies will been sent

7.  **`on-start`**: Function  
    **params**: func ( file )  
    hook function when upload start

8.  **`on-progress`**: Function  
    **params**: func ( event, file )  
    hook function when uploading, get progress by `event.percent`

9.  **`on-success`**: Function  
    **params**: func ( res, file )  
    hook function when upload success, `res` is response from server

10. **`on-error`**: Function  
    **params**: func ( err, file )  
    hook function when upload failed

<br/>
</details>

<details><summary><strong><code>Input tag</code> related</strong></summary>
<br>

1.  **`accept`**: String  
    **default**: `image/*,video/*;`  
    suggest to set a specific value like `image/jpg,image/gif;` for wildcard will lead to a serious delay

2.  **`placeholder`**: String  
    **default**: `Drop file here or click`

3.  **`id`**: String  
    **default**: random string in 4 length  
    id of input tag

4.  **`readonly`**: Boolean

5.  **`capture`**: Boolean  
    **default**: `false`  
    whether use camera directly in mobile

6.  **`max-size`**: Number  
    **default**: 5120  
    max-size of image (KB)

7.  **`name`**: Boolean  
    name of input tag

8.  **`any input's attribute`**  
    any input's original attributes set on component will be inherited by inner input tag

<br/>
</details>

<details><summary><strong><code>UI</code> related</strong></summary>
<br>

1.  **`img-src`**: String  
    image resource let component behavior like `<img />`

2.  **`theme`**: String  
    **default**: `material`
    two themes optional (light / material)

3.  **`size`**: String
    small / normal / large

4.  **`icon`**: String  
    clip / img / img2

5.  **`ali-icon`**: String  
    if you use [iconfont.cn](http://iconfont.cn/), set unicode of any icon to custom

6.  **`no-mask`**: Boolean  
    remove mask when hover

7.  **`no-hover-effect`**: Boolean  
    remove all hover effect (include text) when hover

8.  **`bottom-text`**: String  
    **default**: `Drop file here or click to change`  
    text in the bottom when hover

9.  **`no-multiple-text`**: String  
    **default**: `Not support multiple files`  
    visible only the state is `readonly`, cover bottom-text

10.  **`exceed-size-text`**: String  
    **default**: `The size of file should less than: ${maxSize}`  
    visible only the state is `readonly`, cover bottom-text

11.  **`no-action-text`**: String  
    **default**: `Action hasn't set up yet`  
    visible only the state is `readonly`, cover bottom-text

12.  **`readonly-tip-text`**: String  
    **default**: `Readonly`  
    visible only the state is `readonly`, cover bottom-text

<br/>
</details>

<details><summary><strong><code>Events</code></strong></summary>
<br>

1.  **`onChange`**: Function  
    **params**: func ( file, fileName )  
    hook function when file selected

2.  **`onExceed`**: Function  
    **params**: func ( file )  
    hook function when file exceed max-size

<br/>
</details>

<details><summary><strong><code>Methods</code></strong></summary>
<br>

1.  **`reset`**  
    reset componet but will not clear `img-src`

<br/>
</details>

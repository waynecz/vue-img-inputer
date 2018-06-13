<template>
  <div class="img-inputer" :class="[
      themeClass,
      sizeClass,
      nhe || noHoverEffect ? 'nhe' : '',
      { 'img-inputer--loading': uploading }
    ]" ref="box">

    <i class="iconfont img-inputer__icon" v-html="iconUnicode"></i>
    <p class="img-inputer__placeholder">{{placeholder}}</p>

    <div class="img-inputer__preview-box" v-if="imgSelected">
      <img :src="dataUrl" class="img-inputer__preview-img">
    </div>
    <label :for="readonly ? '' : inputId" class="img-inputer__label"></label>
    
    <transition name="vip-fade">
      <div class="img-inputer__loading" v-if="uploading">
        <div class="img-inputer__loading-indicator"/>
        <div class="img-inputer__loading-process" :style="processStyle"/>
      </div>
    </transition>

    <transition name="vip-zoom-in">
      <div v-if="autoUpload && uploaded" class="img-inputer__success"/>
    </transition>

    <!-- Mask -->
    <div class="img-inputer__mask" v-if="imgSelected && !noMask">
      <p class="img-inputer__file-name">{{fileName}}</p>
      <p class="img-inputer__change" v-if="readonly">{{readonlyTipText}}</p>
      <p class="img-inputer__change" v-else>{{bottomText}}</p>
    </div>
    
    <input
      v-if="capture"
      ref="inputer"
      type="file"
      :name="name"
      :id="inputId"
      :accept="accept"
      capture="video"
      class="img-inputer__inputer"
      @change="handleFileChange"
    />

    <!-- Alternative for no capture-->
    <input
      v-else
      ref="inputer"
      type="file"
      :name="name"
      :id="inputId"
      :accept="accept"
      class="img-inputer__inputer"
      @change="handleFileChange"
    />
    <transition name="vip-move-in">
      <div class="img-inputer__err" v-if="errText.length">{{errText}}</div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import ajax from './ajax'

export default {
  name: 'vue-img-inputer',

  // !------------------------ P r o p s --------------------------------------------------------
  props: {
    type: {
      default: 'img',
      type: String
    },
    accept: {
      default: 'image/*,video/*',
      type: String
    },
    capture: {
      default: false,
      type: Boolean
    },
    id: {
      default: '',
      type: String
    },
    onChange: {
      default: null,
      type: Function
    },
    readonly: {
      type: Boolean,
      default: false
    },
    readonlyTipText: {
      default: '不可更改',
      type: String
    },
    bottomText: {
      default: '点击或拖拽图片以修改',
      type: String
    },
    placeholder: {
      default: '点击或拖拽选择图片',
      type: String
    },
    value: {
      default: undefined
    },
    icon: {
      default: '',
      type: String
    },
    customerIcon: {
      default: '',
      type: String
    },
    maxSize: {
      default: 5120,
      type: Number
    },
    size: {
      default: '',
      type: String
    },
    imgSrc: {
      default: '',
      type: String
    },

    // ! Deprecated, use noHoverEffect instead
    nhe: {
      type: Boolean,
      default: false
    },
    noHoverEffect: {
      type: Boolean,
      default: false
    },
    noMask: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'file'
    },

    // * 文件自动上传功能抄自 Element/Uploader:
    autoUpload: {
      type: Boolean,
      default: false
    },
    action: {
      type: String,
      default: undefined
    },
    uploadKey: {
      type: String,
      default: 'file'
    },
    extraData: {
      type: Object,
      default: () => {}
    },
    headers: {
      type: Object,
      default: () => {}
    },
    withCookie: {
      type: Boolean,
      default: false
    },
    onStart: {
      default: () => {},
      type: Function
    },
    onProgress: {
      default: () => {},
      type: Function
    },
    onSuccess: {
      default: () => {},
      type: Function
    },
    onError: {
      default: () => {},
      type: Function
    }
  },

  // !------------------------ D a t a --------------------------------------------------------
  data() {
    return {
      inputId: '',
      file: null,
      dataUrl: '',
      fileName: '',
      errText: '',

      uploading: false,
      uploadPercent: 0,
      uploaded: false
    }
  },

  // !------------------------ C o m p u t e d --------------------------------------------------------
  computed: {
    imgSelected() {
      return !!this.dataUrl || !!this.fileName
    },

    sizeHumanRead() {
      let rst = 0
      if (this.maxSize < 1024) {
        rst = this.maxSize + 'K'
      } else {
        rst = (this.maxSize / 1024).toFixed(this.maxSize % 1024 > 0 ? 2 : 0) + 'M'
      }
      return rst
    },

    sizeClass() {
      if (this.size) {
        return `img-inputer--${this.size}`
      }
    },

    themeClass() {
      return `img-inputer--${this.theme}`
    },

    ICON() {
      let rst = ''
      if (this.icon) {
        rst = this.icon
      } else {
        rst = this.theme === 'light' ? 'img' : 'clip'
      }
      return rst
    },

    iconUnicode() {
      let iconMap = {
        img: '&#xe624',
        clip: '&#xe62d',
        img2: '&#xe62f'
      }
      return this.customerIcon || iconMap[this.ICON]
    },

    processStyle() {
      const { uploadPercent } = this
      return {
        transform: `translate3d(${uploadPercent - 100}%, 0, 0)`
      }
    }
  },

  // !------------------------ L i f e   c i r c l e --------------------------------------------------------
  mounted() {
    this.inputId = this.id || this.gengerateID()

    if (this.imgSrc) {
      this.dataUrl = this.imgSrc
    }

    // 阻止浏览器默认的拖拽时事件
    ;['dragleave', 'drop', 'dragenter', 'dragover'].forEach(e => {
      this.preventDefaultEvent(e)
    })

    // 绑定拖拽支持
    this.addDropSupport()
  },

  // !------------------------ M e t h o d s --------------------------------------------------------
  methods: {
    preventDefaultEvent(eventName) {
      document.addEventListener(
        eventName,
        function(e) {
          e.preventDefault()
        },
        false
      )
    },

    addDropSupport() {
      let BOX = this.$refs.box

      BOX.addEventListener('drop', e => {
        e.preventDefault()
        if (this.readonly) return false
        this.errText = ''
        let fileList = e.dataTransfer.files

        if (fileList.length === 0) {
          return false
        }

        if (fileList.length > 1) {
          this.errText = '不支持多文件'
          return false
        }

        this.handleFileChange(fileList)
      })
    },

    gengerateID() {
      let nonstr = Math.random()
        .toString(36)
        .substring(3, 8)
      if (!document.getElementById(nonstr)) {
        return nonstr
      } else {
        return this.gengerateID()
      }
    },

    handleFileChange(e) {
      if (typeof e.target === 'undefined') this.file = e[0]
      else this.file = e.target.files[0]

      this.errText = ''
      let size = Math.floor(this.file.size / 1024)
      if (size > this.maxSize) {
        this.errText = `文件大小不能超过${this.sizeHumanRead}`
        return false
      }

      // 双向绑定
      this.$emit('input', this.file)

      if (this.autoUpload) this.uploadFile()

      this.onChange && this.onChange(this.file, this.file.name)
      this.$emit('onChange', this.file, this.file.name)

      this.imgPreview(this.file)

      this.fileName = this.file.name

      this.resetInput()
    },

    imgPreview(file) {
      let self = this

      if (!file || !window.FileReader) return

      if (/^image/.test(file.type)) {
        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onloadend = function() {
          self.dataUrl = this.result
        }
      }
    },

    resetInput() {
      let input = document.getElementById(this.inputId)
      let form = document.createElement('form')

      document.body.appendChild(form)

      let parentNode = input.parentNode
      // 判断input 是否为最后一个节点
      let isLastNode = parentNode.lastChild === input
      let nextSibling

      // 如果后面还有节点，则记录下一个node，做位置标志
      // 如果本身已经是最后一个节点，则直接通过parentNode appendChild即可
      if (!isLastNode) {
        nextSibling = input.nextSibling
      }

      form.appendChild(input)
      form.reset()

      isLastNode ? parentNode.appendChild(input) : parentNode.insertBefore(input, nextSibling)

      document.body.removeChild(form)
    },

    uploadFile() {
      const { onStart, file } = this
      if (!this.action) {
        this.errText = '上传地址未配置'
        return
      }

      onStart && onStart(file)

      this.post(file)
    },

    post(file) {
      const { headers, withCookie, extraData, uploadKey, action } = this
      this.uploading = true

      const options = {
        headers: headers,
        withCredentials: withCookie,
        file,
        data: extraData,
        filename: uploadKey,
        action,

        onProgress: e => {
          this.uploadPercent = ~~e.percent
          this.onProgress(e, file)
        },

        onSuccess: res => {
          this.uploadPercent = 0
          this.uploading = false
          this.uploaded = true
          this.onSuccess(res, file)
        },

        onError: err => {
          this.uploadPercent = 0
          this.uploading = false
          this.onError(err, file)
        }
      }

      ajax(options)
    },

    resetData() {
      this.file = null
      this.dataUrl = ''
      this.errText = ''
      this.fileName = ''
      this.uploadPercent = 0
      this.uploading = false
      this.uploaded = false
    }
  },

  // !------------------------ W a t c h --------------------------------------------------------
  watch: {
    imgSrc(newval) {
      this.dataUrl = newval

      if (!newval) {
        this.file = null
        this.errText = ''
        this.fileName = ''
      }
    },

    value(newval, oldval) {
      // reset
      if (oldval && !newval) {
        this.resetData()
      }
    }
  }
}
</script>

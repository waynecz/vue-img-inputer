<script type="text/ecmascript-6">
  /* eslint-disable */
  export default {
    name: 'vue-img-inputer',
    props: {
      type: {
        default: 'img',
        type: String
      },
      // 默认情况下可能会导致选择框弹出慢的问题，请针对具体化图片类型即可解决
      accept: {
        default: 'image/*,video/*;',
        type: String
      },
      capture: {
        default: true,
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
      nhe: {
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
      }

    },
    data () {
      return {
        inputId: '',
        file: [],
        dataUrl: '',
        fileName: '',
        errText: ''
      }
    },
    computed: {
      imgSelected () {
        return !!this.dataUrl || !!this.fileName;
      },
      sizeHumanRead () {
        let rst = 0;
        if (this.maxSize < 1024) {
          rst = this.maxSize + 'K';
        } else {
          rst = (this.maxSize / 1024).toFixed(this.maxSize % 1024 > 0 ? 2 : 0) + 'M';
        }
        return rst;
      },
      sizeClass () {
        if (this.size) {
          return `img-inputer--${this.size}`;
        }
      },
      themeClass () {
        return `img-inputer--${this.theme}`;
      },
      ICON () {
        let rst = '';
        if (this.icon) {
          rst = this.icon;
        } else {
          rst = (this.theme == 'light' ? 'img' : 'clip');
        }
        return rst
      },
      iconUnicode () {
        let iconMap = {
          img: '&#xe624;',
          clip: '&#xe62d;',
          img2: '&#xe62f;'
        };
        return this.customerIcon || iconMap[this.ICON]
      }
    },
    mounted () {
      this.inputId = this.id || this.gengerateID();
      if (this.imgSrc) {
        this.dataUrl = this.imgSrc;
      }
      // 阻止浏览器默认的拖拽时事件
      ['dragleave', 'drop', 'dragenter', 'dragover'].forEach(e => {
        this.preventDefaultEvent(e);
      });
      // 绑定拖拽时间
      this.addDropSupport();
    },
    methods: {
      preventDefaultEvent (eventName) {
        document.addEventListener(eventName, function (e) {
          e.preventDefault();
        }, false);
      },
      addDropSupport () {
        let BOX = this.$refs.box;
        BOX.addEventListener('drop', (e) => {
          e.preventDefault();
          if (this.readonly) return false;
          this.errText = '';
          let fileList = e.dataTransfer.files;

          if (fileList.length === 0) {
            return false;
          }
          /**
           * TODO
           * 未来打算支持多文件
           * Intend to support muti-file
           */
          if (fileList.length > 1) {
            this.errText = '暂不支持多文件';
            return false
          }
          this.handleFileChange(fileList);
        })
      },
      gengerateID () {
        let nonstr = Math.random().toString(36).substring(3, 8);
        if (!document.getElementById(nonstr)) {
          return nonstr;
        } else {
          return this.gengerateID();
        }
      },
      handleFileChange (e) {
        if (typeof e.target === 'undefined') this.file = e[0];
        else this.file = e.target.files[0];

        this.errText = '';
        let size = Math.floor(this.file.size / 1024);
        if (size > this.maxSize) {
          this.errText = `文件大小不能超过${this.sizeHumanRead}`;
          return false
        }

        // 双向绑定
        this.$emit('input', this.file);

        // 文件选择回调 && 两种绑定方式
        this.onChange && this.onChange(this.file, this.file.name);
        this.$emit('onChange', this.file, this.file.name);

        this.imgPreview(this.file);

        this.fileName = this.file.name;

        this.resetInput();
      },
      imgPreview (file) {
        let self = this;

        if (!file || !window.FileReader) return;

        if (/^image/.test(file.type)) {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onloadend = function () {
            self.dataUrl = this.result;
          }

        }
      },
      resetInput () {
        let input = document.getElementById(this.inputId);
        let form = document.createElement('form');

        document.body.appendChild(form);

        let parentNode = input.parentNode;
        // 判断input 是否为最后一个节点
        let isLastNode = parentNode.lastChild === input;
        let nextSibling;
        // 如果后面还有节点，则记录下一个node，做位置标志
        // 如果本身已经是最后一个节点，则直接通过parentNode appendChild即可
        if (!isLastNode) {
          nextSibling = input.nextSibling;
        }

        form.appendChild(input);
        form.reset();

        isLastNode
          ? parentNode.appendChild(input)
          : parentNode.insertBefore(input, nextSibling);

        document.body.removeChild(form);
      }
    },
    watch: {
      imgSrc (newval, oldval) {
        if (newval) {
          this.dataUrl = newval;
        }
      },
      value (newval, oldval) {
        // 重置逻辑
        if (oldval && !newval) {
          this.file = [];
          this.dataUrl = '';
          this.errText = '';
          this.fileName = '';
        }
      }
    }
  };
</script>

<template>
  <div class="img-inputer" :class="[themeClass, sizeClass, nhe ? 'nhe': '', ]" ref="box">
    <i class="iconfont img-inputer__icon" v-html="iconUnicode"></i>
    <p class="img-inputer__placeholder">{{placeholder}}</p>

    <div class="img-inputer__preview-box" v-if="imgSelected">
      <img :src="dataUrl" class="img-inputer__preview-img">
    </div>
    <label :for="readonly ? '' : inputId" class="img-inputer__label"></label>
    <!-- 图片或文件选择后鼠标移入的提示-->
    <div class="img-inputer__mask" v-if="imgSelected && !noMask">
      <p class="img-inputer__file-name">{{fileName}}</p>
      <p class="img-inputer__change" v-if="readonly">{{readonlyTipText}}</p>
      <p class="img-inputer__change" v-else>{{bottomText}}</p>
    </div>
    <!-- input主体-->
    <input
        ref="inputer"
        v-if="capture"
        type="file"
        :name="name"
        :id="inputId"
        :accept="accept"
        capture="video"
        class="img-inputer__inputer"
        @change="handleFileChange"
    />
    <input
        ref="inputer"
        v-else
        type="file"
        :name="name"
        :id="inputId"
        :accept="accept"
        class="img-inputer__inputer"
        @change="handleFileChange"
    />
    <transition name="fade">
      <div class="img-inputer__err" v-if="errText.length">{{errText}}</div>
    </transition>
  </div>
</template>

<style lang="scss">
  @import "../style/main.scss";
</style>
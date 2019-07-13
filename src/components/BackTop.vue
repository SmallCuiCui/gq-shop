<template>
  <div
  class="mg-backtop"
  v-back-top="{ heightToShow, scrollContainer }"
  @click="backToTop"
  >
    <i class="gq-icon">&#xe6ee;</i>
    <span>置顶</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: '',
      isTop: false
    }
  },
  props: {
    heightToShow: {
      type: Number,
      required: true
    },
    scrollContainer: {
      type: String,
      required: true
    }
  },
  directives: {
    // 实现滚动条到一定距离时显示或隐藏此元素
    backTop: {
      inserted (el, binding) {
        const { heightToShow, scrollContainer } = binding.value
        document.querySelector(scrollContainer).onscroll = function () {
          let disTop = this.scrollTop
          if (disTop > heightToShow) {
            el.style.display = 'flex'
          } else {
            el.style.display = 'none'
          }
        }
      }
    }
  },
  methods: {
    backToTop () {
      // 过渡回到顶部
      this.timer = setInterval(() => {
        let disTop = document.querySelector(this.scrollContainer).scrollTop
        let speed = Math.floor(-disTop / 6)
        if (disTop === 0) {
          clearInterval(this.timer)
        } else {
          document.querySelector(this.scrollContainer).scrollTop += speed
        }
      }, 30)
    }
  }
}
</script>

<style lang="scss">
  .mg-backtop{
    height: 50px;
    width: 50px;
    display: flex;
    position: absolute;
    display: none;
    bottom: 20px;
    right: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:rgba(0, 0, 0, .7);
    color: rgba(255, 255, 255, .7);
    font-size: 12px;
    i{
      font-size: 22px;
    }
    span{
      margin-top: -5px;
    }
  }
</style>

<template>
  <div class="scroll" :class="height">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: '',
  components: {},
  props: {
    height: String,
    probeType: Number,
    pullUpLoad: {
      type: Boolean,
      default() {
        return false
      } 
    },
    pullDownRefresh: {
      type: Object | Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      bScroll: ''
    }
  },
  watch: {},
  computed: {},
  methods: {
      
  },
  created() {},
  mounted() {
    this.bScroll = new BScroll(document.querySelector('.scroll'), {
      click: true,
      // probeType: 0/1/2只监听手指滚动 3监听所有滚动
      probeType: this.probeType,
      pullDownRefresh: this.pullDownRefresh,
      pullUpLoad: this.pullUpLoad
    })
    this.bScroll.on('pullingDown',() => {
      this.$emit('pullingDown')
    })

    this.bScroll.on('pullingUp',() => {
      this.$emit('pullingUp')
      // 重置pullingUp
      this.bScroll.finishPullUp()
    })
    
    
    // on('scroll',function)方法需要Bscroll设置probeType:3属性
    this.bScroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    // 滚动结束后刷新bScroll高度
    this.bScroll.on('scrollEnd', (position) => {
      this.$emit('scrollEnd', position)
      // 刷新bScroll高度
      this.bScroll.refresh();
    })
  }
}
</script>
<style scoped>
.wrapper{padding: 0; margin: 0;}
</style>
<template>
  <div class="scroll" :style="height">
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
    height: Object,
    bScroll: String
  },
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.bScroll = new BScroll(document.querySelector('.scroll'), {
      click: true,
      pullDownRefresh: {
        threshold: 50,
        stop: 20
      },
      pullUpLoad: true
    })
    this.bScroll.on('pullingDown',() => {
      console.log('加载')
    })
    this.bScroll.on('pullingUp',() => {
      console.log('加载')
    })
  }
}
</script>
<style scoped>
.wrapper{padding: 0; margin: 0;}
</style>
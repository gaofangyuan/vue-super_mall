<template>
  <div id="app">
    <swiper :someList="someList" :options="options" :titleList="titleList" :link="link"></swiper>
    <homemoudule2 :img="someList"></homemoudule2>
    首页
    <p>{{someList}}</p>
  </div>
</template>

<script>
import mainTopNav from '@/components/content/mainTopNav'
import {getHomeReq} from '@/network/home.js'
import swiper from '@/components/content/swiper/swiper'
import homemoudule2 from './childrenComponents/home_module2'

export default {
  name: '',
  components: {
    mainTopNav,
    swiper,
    homemoudule2
  },
  props: {},
  data() {
    return {
      message: '',
      banner: '',
      someList: [
        'http://gw.alicdn.com/imgextra/i4/74/O1CN01kN84Sl1CPvuclr5U6_!!74-0-lubanu.jpg'
        ,
        'http://gw.alicdn.com/imgextra/i4/74/O1CN01kN84Sl1CPvuclr5U6_!!74-0-lubanu.jpg'
        ,
        'http://gw.alicdn.com/imgextra/i4/74/O1CN01kN84Sl1CPvuclr5U6_!!74-0-lubanu.jpg'
      ],
      titleList: ['http://gw.alicdn.com/imgextra/i4/74/O1CN01kN84Sl1CPvuclr5U6_!!74-0-lubanu.jpg',222,333],
      link: [],
      options: {
        currentPage: 0,//当前页码
        thresholdDistance: 10,//滑动判定距离
        thresholdTime: 1000,//滑动判定时间
        autoplay: 2000,//自动滚动[ms]
        loop: true,//循环滚动
        // direction:'vertical',//方向设置，垂直滚动
        loopedSlides:1,//无限滚动前后遍历数
        slidesToScroll:1,//每次滑动项数
      }
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    getHomeReq().then(res => {
      this.message = res;
    })
    .then(() => {
      console.log(this.message);
      this.someList = this.message.banner.img;
      this.link = this.message.banner.img;
      this.titleList = this.message.banner.title;
    })
  },
  mounted() {}
}
</script>
<style scoped>
  #app{
    padding: 0 0 50px; margin: 0;
    width: 100%;
    /* 换行 */
    word-break:break-all;
  }
</style>
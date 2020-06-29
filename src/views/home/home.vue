<template>
  <div id="app">
    <main-top-nav title="购物"></main-top-nav>
    <swiper :someList="someList" :options="options" :titleList="titleList" :link="link"></swiper>
    <homemoudule2 :img="someList" :title="['菜单1', '菜单2', '菜单3', '菜单4']"></homemoudule2>
    <div class="height1em"></div>
    <homemoudule3 :img="homemoudule3_img"></homemoudule3>
    <div class="height5em" @click="getTabNavNum()"></div>
    <tab-nav :tabnav="['流行', '新款', '精选']" v-on:tabNavClkInx="getTabNavNum"></tab-nav>
    <ame-swiper :swiperOption="swiperOption"></ame-swiper>
    首页
    <p>{{someList}}</p>
    <p>{{someList}}</p>
    <p>{{someList}}</p>
  </div>
</template>

<script>
import mainTopNav from '@/components/content/mainTopNav'
import tabNav from '@/components/content/tabNav/tabNav'
import ameSwiper from '@/components/content/swiper/awesome-swiper'

import {getHomeReq} from '@/network/home.js'
import swiper from '@/components/content/swiper/swiper'
import homemoudule2 from './childrenComponents/home_module2'
import homemoudule3 from './childrenComponents/home_module3'

export default {
  name: '',
  components: {
    mainTopNav,
    tabNav,
    ameSwiper,
    swiper,
    homemoudule2,
    homemoudule3
  },
  props: {},
  data() {
    return {
      options: {
        currentPage: 0,//当前页码
        thresholdDistance: 10,//滑动判定距离
        thresholdTime: 1000,//滑动判定时间
        autoplay: 2000,//自动滚动[ms]
        loop: true,//循环滚动
        // direction:'vertical',//方向设置，垂直滚动
        loopedSlides:1,//无限滚动前后遍历数
        slidesToScroll:1,//每次滑动项数
      },
      swiperOption: {
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        // 初始化显示
        initialSlide: 2,
        preventClicksPropagation : false,
      },
      message: '',
      banner: '',
      someList: ['loding......'],
      titleList: ['loding......'],
      link: ['loding......'],
      homemoudule3_img: ['loding......'],
      goods0: ['loding......'],
      goods1: ['loding......'],
      goods2: ['loding......'],
      num: 1,
    }
  },
  watch: {},
  computed: {
    
  },
  methods: {
    getDataMessage() {
      this.someList = this.message.banner.img;
      this.link = this.message.banner.img;
      this.titleList = this.message.banner.title;
      this.homemoudule3_img = this.message.banner.img3;
    },
    getTabNavNum(index) {
      // this.swiperOption.initialSlide = this.$refs.ref1.num;
      console.log(index);
      this.swiperOption.slideTo(index, 1000, false);//切换到第一个slide，速度为1秒
      // this.swiperOption.init();
    }
  },
  created() {
    getHomeReq().then(res => {
      this.message = res;
    })
    .then(() => {
      this.getDataMessage();
    })
  },
  mounted() {
    
  },
  updated() {
    console.log(this.message);
    var goodsNum = this.message.mall.mallCart;
    for(let i = 0; i < goodsNum.length; i++) {
      if(goodsNum[i].tag == 0) {
        this.goods0.push(goodsNum[i]);
      }else if(goodsNum[i].tag == 1) {
        this.goods1.push(goodsNum[i]);
      }else if(goodsNum[i].tag == 2) {
        this.goods2.push(goodsNum[i]);
      }
    }
    // getTabNavNum();
    console.log(this.goods0);
  }
}
</script>
<style scoped>
  #app{
    padding: 44px 0; margin: 0;
    width: 100%;
    /* 换行 */
    word-break:break-all;
  }
  .height1em {
    height: 1em;
  }
  .height5em{
    height: 0.5em;
  }
</style>
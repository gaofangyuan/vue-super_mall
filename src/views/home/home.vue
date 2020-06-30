<template>
  <div id="app">
    <main-top-nav title="购物"></main-top-nav>
    <div class="wraper">
      <div class="content">
        <oswiper :someList="someList" :options="options" :titleList="titleList" :link="link"></oswiper>
        <homemoudule2 :img="someList" :title="['菜单1', '菜单2', '菜单3', '菜单4']"></homemoudule2>
        <div class="height1em"></div>
        <homemoudule3 :img="homemoudule3_img"></homemoudule3>
        <div class="height5em"></div>
        <tab-nav :tabnav="['流行', '新款', '精选']" v-on:tabNavClkInx="getTabNavNum"></tab-nav>
        <div style="display: none;" :class="{mallDisplayAct: mallIndex == 0 ? true : false}">
          <mall :mall="goods0"></mall>
        </div>
        <div style="display: none;" :class="{mallDisplayAct: mallIndex == 1 ? true : false}">
          <mall :mall="goods1"></mall>
        </div>
        <div style="display: none;" :class="{mallDisplayAct: mallIndex == 2 ? true : false}">
          <mall :mall="goods2"></mall>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainTopNav from '@/components/content/mainTopNav'
import tabNav from '@/components/content/tabNav/tabNav'

import {getHomeReq} from '@/network/home.js'
import oswiper from '@/components/content/swiper/swiper'
import homemoudule2 from './childrenComponents/home_module2'
import homemoudule3 from './childrenComponents/home_module3'
import mall from '@/components/content/mall/mall'
import BScroll from 'better-scroll'


export default {
  name: '',
  components: {
    mainTopNav,
    tabNav,
    oswiper,
    homemoudule2,
    homemoudule3,
    mall
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
      message: '',
      banner: '',
      someList: ['loding......'],
      titleList: ['loding......'],
      link: ['loding......'],
      homemoudule3_img: ['loding......'],
      goods0: [],
      goods1: [],
      goods2: [],
      mallIndex: 0,
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

      // 获取mall商品，并对商品进行分类
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


    },
    getTabNavNum(index) {
      this.mallIndex = index;
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
    new BScroll(document.querySelector('.wraper'), {
      click: true
    })
  }
}
</script>
<style scoped>
  #app{
    margin: 0;
    padding: 0;
  }
  .wraper {
    margin: 44px 0 49px;
    height: calc(100vh - 93px);
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


  .swiper {
    padding-bottom: 49px;
  }
  .swiper-slide {
    height: auto;
    text-align: center;
    font-size: 2em;
    line-height: 300px;
    background-color: #ffffff;
  }
  .swiper-scrollbar {
    top: 0;
    background: rgba(0, 0, 0, 0);
  }
  .swiper-scrollbar-drag {
    background: #55A5C5 !important;
    margin-left: 10%;
    width: 13.33333% !important;
  }
  .mallDisplayAct {
    display: block !important;
  }
</style>
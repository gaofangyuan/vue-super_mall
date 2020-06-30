<template>
  <div class="class">
    <div class="tabNav">
      <tab-nav :tabnav="['流行', '新款', '精选']" v-on:tabNavClkInx="getTabNavNum"></tab-nav>
    </div>
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper" :style="scrollHeight">
          <!-- Slides -->
          <div class="swiper-slide">
            <scroll :height="scrollHeight" :bScroll="bScroll0">
              <mall :mall="goods0"></mall>
            </scroll>
          </div>
          <div class="swiper-slide">
            <scroll :height="scrollHeight" :bScroll="bScroll1">
              <mall :mall="goods1"></mall>
            </scroll>
          </div>
          <div class="swiper-slide">
            <scroll :height="scrollHeight" :bScroll="bScroll2">
              <mall :mall="goods2"></mall>
            </scroll>
          </div>
          ...
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar">
        <div class="swiper-scrollbar-drag"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import tabNav from '@/components/content/tabNav/tabNav'
import mall from '@/components/content/mall/mall'
import BScroll from 'better-scroll'
import scroll from '@/components/common/Bscroll/scroll'

import {getHomeReq} from '@/network/home.js'


import 'swiper/css/swiper.css'

export default {
  name: '',
  components: {
    tabNav,
    mall,
    scroll
  },
  props: {},
  data() {
    return {
      message: '',
      scroll: '',
      bScroll0: '',
      bScroll1: '',
      bScroll2: '',
      goods0: [],
      goods1: [],
      goods2: [],
      scrollHeight: {height: 'calc(100vh - 80px)'}
    }
  },
  watch: {},
  computed: {},
  methods: {
    getTabNavNum(index) {
      this.scroll.slideTo(index, 1000, false);//切换到第一个slide，速度为1秒
      
    },
    getDataMessage() {
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
    this.scroll = new Swiper('.swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar'
      },
    }); 

  }
}
</script>
<style scoped>
  .class{
    padding: 0;
    margin: 0;
  }
  .tabNav {
    position: relative;
    top: 0;
  }
  .swiper-container {
    position: relative;
    top: -5px;
  }
  .swiper-wrapper {
    height: auto;
  }
  .wraper0, .wraper1, .wraper2 {
    height: calc(100vh - 80px);
  }
  .swiper-scrollbar {
    top: 0;
    background: #ffffff;
  }
  .swiper-scrollbar-drag {
    background: #55A5C5 !important;
  }
</style>
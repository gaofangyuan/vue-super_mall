<template>
  <div id="app">
    <back-top :btopclass="btopclass" @click.native="backTopClk()" v-show="isbackTop"></back-top>
    <main-top-nav title="购物"></main-top-nav>
    <tab-nav tabnavclass="tabNavclass" :tabnav="['流行', '新款', '精选']" @tabNavClkInx="getTabNavNum" v-show="istabNav" ref="tabNav1"></tab-nav>
    <scroll height="wraper" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="onScroll" @pullingDown="pullingDown" @pullingUp="pullingUp">
      <oswiper myswiper="mySwiper" :myswiperitem="myswiperitem" :someList="someList" :options="options" :titleList="titleList" :link="link" @imgload="oswiperImgload = true"></oswiper>
      <homemoudule2 :img="someList" :title="['菜单1', '菜单2', '菜单3', '菜单4']" @imgload="homemoudule2Imgload = true"></homemoudule2>
      <div class="height1em"></div>{{$store.state.title}}
      <homemoudule3 :img="homemoudule3_img" @imgload="homemoudule3Imgload = true"></homemoudule3>
      <div class="height5em"></div>
      <tab-nav :tabnav="['流行', '新款', '精选']" @tabNavClkInx="getTabNavNum" ref="tabNav"></tab-nav>
      <div style="display: none;" :class="{mallDisplayAct: mallIndex == 0 ? true : false}">
        <mall :mall="goods0"></mall>
      </div>
      <div style="display: none;" :class="{mallDisplayAct: mallIndex == 1 ? true : false}">
        <mall :mall="goods1"></mall>
      </div>
      <div style="display: none;" :class="{mallDisplayAct: mallIndex == 2 ? true : false}">
        <mall :mall="goods2"></mall>
      </div>
    </scroll>
  </div>
</template>

<script>
import mainTopNav from '@/components/content/mainTopNav'
import tabNav from '@/components/content/tabNav/tabNav'
import scroll from '@/components/common/Bscroll/scroll'
import backTop from '@/components/content/backTop/backTop'

import {getHomeReq} from '@/network/home.js'
import oswiper from '@/components/content/swiper/swiper'
import homemoudule2 from './childrenComponents/home_module2'
import homemoudule3 from './childrenComponents/home_module3'
import mall from '@/components/content/mall/mall'


export default {
  name: '',
  components: {
    mainTopNav,
    tabNav,
    oswiper,
    homemoudule2,
    homemoudule3,
    mall,
    backTop,
    scroll
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
      myswiperitem: `margin: 0;
        padding: 0;
        width: 100vw;
        height: 35vw;
        object-fit: over;
        background: #aaaaaa;
        vertical-align: middle;
      `,
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
      btopclass: 'btopclass',
      isbackTop: false,
      tabOffsetTop: 0,
      oswiperImgload: false,
      homemoudule2Imgload: false,
      homemoudule3Imgload: false,
      istabNav: false
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
      // 同步点击状态
      this.$refs.tabNav.num = index;
      this.$refs.tabNav1.num = index;
    },

    backTopClk() {
      // 调用Bscroll回到顶部
      this.$refs.scroll.bScroll.scrollTo(0, 0);
    },
    onScroll(position) {
      // console.log(position);
      if(position.y < -800) {
        this.isbackTop = true;
      }else {
        this.isbackTop = false;
      }
      // 判断tabNav位置
      if((-position.y) > (this.tabOffsetTop)) {
        this.istabNav = true
      }else{
        this.istabNav = false
      }
    },
    pullingDown() {
      
    },
    pullingUp() {
      var goodsGet0 = this.message.mall.mallCart;
      for(let i = 0; i < 20; i++) {
        // if(this.mallIndex = 0)
        switch(this.mallIndex) {
          case 0:
            this.goods0.push(goodsGet0[i])
            break;
          case 1:
            this.goods1.push(goodsGet0[i])
            break;
          case 2:
            this.goods2.push(goodsGet0[i])
            break;
        }
      }
      console.log('加载了20条数据')
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
    const offsetTopTime = setInterval(() => {
      // 判断图片是否加载完成，如果加载完成则赋值并清除定时器
      if(this.oswiperImgload && this.homemoudule2Imgload && this.homemoudule3Imgload) {
        // tabNav距离顶部距离赋值给tabOffsetTop
        this.tabOffsetTop = this.$refs.tabNav.$el.offsetTop;
        // 所有组件都有一个属性$el,用于获取组件元素
        // console.log(this.$refs.tabNav.$el.offsetTop);
        clearInterval(offsetTopTime)
      }
    },200)
    
  }
}
</script>
<style scoped>
  #app{
    margin: 0;
    padding: 0;
  }
  .btopclass {
    bottom: 54px;
    right: 5px;
  }
  .display-none {
    display: none !important;
  }
  .wraper {
    margin: 0;
    position: fixed;
    z-index: 99;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    height: calc(100vh - 93px);
    width: 100%;
    /* 换行 */
    word-break:break-all;
    overflow: hidden;
  }
  .height1em {
    height: 1em;
  }
  .height5em{
    height: 0.5em;
  }

  .mySwiper {
    width:100vw;margin:0px auto; padding: 0;height:35vw;
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

  .tabNavclass {
    padding: 0; 
    margin: 0;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    position: fixed;
    text-align: center;
    background: #ffffff;
    height: 35px;
  }
</style>
<template>
  <div class="detail">
    <back-top btopclass="btopclass" @click.native="backTopClk" v-show="isbackTop"></back-top>
    <detail-nav :num="detailNavNum" tabnavclass="tabNavclass" :tabnav="['详情', '参数', '推荐']" @tabNavClkInx="getTabNavNum" v-show="istabNav" ref="tabNav">
      <div class="tabNavS" @click="clkback">&lt;</div>
    </detail-nav>
    <detail-bottom-nav @addCart="addCart"></detail-bottom-nav>
    <div class="csback" @click="clkback">&lt;&emsp;</div>
    <oswiper myswiper="mySwiper" :myswiperitem="myswiperitem" :someList="someList" :options="options" :titleList="titleList" :link="link" @imgload="isSwoperImg = true"></oswiper>
    
    <div class="title">
      <h3>{{'￥' + detail.cartPrice}}</h3>{{$store.state.title}}{{$route.params.id}}
      <p>{{detail.cartTitle + '定制纯色亚麻纱帘成品美式田园卧室客厅飘窗落地窗帘遮光隔断窗纱'}}</p>
    </div>

    <!-- 详情 -->
    <div class="height08" id="li1"></div>
    <div class="d_xq">
      <h3>详情</h3>
      <p>{{detail}}</p>
      <img :src="detail.cartImg" alt="" />
      <img :src="detail.cartImg" alt="" />
      <img :src="detail.cartImg" alt="" />
    </div>

    <!-- 参数 -->
    <div class="height08" id="li2"></div>
    <div class="d_xq">
      <h3>参数</h3>
      <p>{{detail}}</p>
      <img :src="detail.cartImg" alt="" />
      <img :src="detail.cartImg" alt="" />
      <img :src="detail.cartImg" alt="" />
    </div>

    <!-- 推荐 -->
    <div class="height08" id="li3"></div>
    <div class="d_xq">
      <h3>推荐</h3>
      <mall :mall="detailTj" @mallClk="mallClk"></mall>
    </div>
    
  </div>
</template>

<script>
import {getDetailReq} from '@/network/detail'

import backTop from '@/components/content/backTop/backTop'
import detailNav from '@/components/content/detail/detailNav'
import detailBottomNav from '@/components/content/detail/detailBottomNav'
import oswiper from '@/components/content/swiper/swiper'
import mall from '@/components/content/mall/mall'

export default {
  name: 'detail',
  components: {
    backTop,
    oswiper,
    detailNav,
    detailBottomNav,
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
      myswiperitem: `margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vw;
        object-fit: over;
        background: #aaaaaa;
        vertical-align: middle;
      `,
      message: [],
      detail: {},
      detailTj: [],
      someList: [],
      titleList: [],
      link: [],
      isbackTop: false,
      istabNav: false,
      li1: null,li2: null,li3: null,
      isSwoperImg: false,
      detailNavNum: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    getDataMessage() {
      this.detailTj = this.message.mall.mallCart;
      this.getDataDetail();
      
    },
    getDataDetail() {
      var id = this.$route.params.id;
      for (let i = 0; i < this.message.mall.mallCart.length; i++) {
        if(this.message.mall.mallCart[i].id == id) {
          // this.detail = this.message.mall.mallCart[i];
          this.detail = Object.assign({}, this.detail, this.message.mall.mallCart[i])
        }
      }
      this.someList = []
      for (let i =0; i < 5; i++) {
        this.someList.push(this.detail.cartImg)
      }
    },
    scrollToTop() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop)
      if(scrollTop > this.li1 - 35) {
        this.istabNav = true
        this.isbackTop = true
      }else{
        this.istabNav = false
        this.isbackTop = false
      }
      
      if(scrollTop > this.li3) {
        this.detailNavNum = 2;
      }else if(scrollTop > this.li2) {
        this.detailNavNum = 1;
      }else{
        this.detailNavNum = 0;
      }
    },
    backTopClk() {
      // 回到顶部
      scrollTo(0, 0);
    },
    getTabNavNum(index) {
      // console.log(index)
      switch(index) {
        case 0:
          document.getElementById('li1').scrollIntoView(true);
          this.detailNavNum = 0;
          break;
        case 1:
          document.getElementById('li2').scrollIntoView(true);
          this.detailNavNum = 1;
          break;
        case 2:
          document.getElementById('li3').scrollIntoView(true);
          this.detailNavNum = 2;
          break;
      }
      
    },
    clkback() {
      // 返回上一个页面
      this.$router.go(-1);
    },
    mallClk() {
      this.getDataDetail();
      location.reload(true)
    },
    addCart() {
      this.$store.state.title.push(this.detail)
    }
  },  
  watch: {
    // 数据变化后处理,解决路由跳转数据不刷新问题
    '$route.path': function() {
      location.reload(true)
    }
  },
  created() {
    
    // 获取活动路由值
    // console.log(this.$route.params)
    // 获取数据
    getDetailReq().then(res => {
      this.message = res;
    })
    .then(() => {
      this.getDataMessage();
    }).catch(() => {
      location.reload(true) 
    })
    
  },
  
  mounted() {
    window.addEventListener('scroll', this.scrollToTop);
    const offsetTopTime = setInterval(() => {
      // 判断图片是否加载完成，如果加载完成则赋值并清除定时器
      if(this.isSwoperImg) {
        this.li1 = document.querySelector('#li1').offsetTop -20;
        this.li2 = document.querySelector('#li2').offsetTop -20;
        this.li3 = document.querySelector('#li3').offsetTop -20;
        // console.log(this.li1,this.li2,this.li3)
        clearInterval(offsetTopTime)
      }
    },50);
    // 返回
    window.addEventListener("popstate", function(e) {
      // location.reload(true) 
      
    }, false);
  }
}
</script>
<style scoped>
.detail{padding: 0 0 50px; margin: 0;position: relative; z-index: 999; background: #ffffff;}
.btopclass {
  position: fixed;
  bottom: 54px;
  right: 5px;
  z-index: 999;
}
.mySwiper {
  width:100vw;margin:0px auto; padding: 0;height:100vw;
}
.tabNavclass {
  padding: 0; 
  margin: 0;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  position: fixed;
  text-align: center;
  background: #ffffff;
  height: 44px;
}
.tabNavS {
  height: 44px;
  width: 30px;
  text-align: center;
  line-height: 44px;
  font-family: serif;
}
.csback {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, .3);
  border-radius: 30px;
  text-align: center;
  z-index: 9;
  line-height: 30px;
  color: #ffffff;
  font-size: 1.2em;
  font-family: serif;
}

.height08 {
  width: 100%;
  height: 35px;
  margin-top: -25px;
  position: absolute;
  z-index: 0;
  background: #f2f2f2;
}

.title {
  position: relative;
  margin: 0;
  padding: 0 0 10px;
  z-index: 9;
  background: #ffffff;
}
.title h3 {
  margin: 0;
  font-size: 1.4em;
  color: coral;
  padding: 0 10px;
  font-weight: 600;
  line-height: 2em;
}
.title p {
  margin: 0;
  font-size: 1em;
  color: #333333;
  padding: 0 10px;
  font-weight: 400;
  line-height: 1.4em;
}

.d_xq {
  position: relative;
  z-index: 9;
  margin-top: 10px;
  background: #ffffff;
}
.d_xq h3 {
  margin: 0;
  padding: 0 10px;
  line-height: 2em;
  font-size: 1.2em;
  color: #666666;
  font-weight: 400;
  border-left: 3px solid coral;
  box-shadow: 0 3px 3px 1px rgba(0, 0, 0, .1);
}
.d_xq p {
  padding: 0 10px;
  line-height: 2em;
  word-break: break-all;
  font-weight: 800;
  color: #aaaaaa;
}
.d_xq img {
  width: calc(100% - 5px);
  height: auto;
  vertical-align: middle;
  padding: 2.5px;
}
</style>
<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div :class="myswiper">
      <!-- Using the slider component -->
      <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem v-for="(item,index) in someList" :key="index">
            <a :href="link[index]">
              <img :style="myswiperitem" :src="item" alt="" @load="imgload">
            </a>
            <p>{{titleList[index]}}</p>
          </slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
      </slider>
  </div>
</template>

<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
import {getHomeReq} from '@/network/home.js'

export default {
  props: {
    myswiper: {
      type: String,
      default() {
        return 'mySwiper'
      }
    },
    myswiperitem: {
      type: String,
      default() {
        return 'myswiperitem'
      }
    },
    //data list [array]
    someList: {
      type: Array,
      default() {
        return []
      }
    },
    titleList: {
      type: Array,
      default() {return []}
    },
    link: {
      type: Array,
      default: []
    },
    //Slider configuration [obj]
    options: {
      type: Object,
      default() {
        return {
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
    }
  },  
  data () {
    return {
      
    }
  },
  components: {
    slider,
    slideritem
  },
  methods: {
    imgload() {
      this.$emit('imgload')
    }
  },
  created() {
  },
}
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .mySwiper {
    width:100vw;margin:0px auto; padding: 0;height:35vw;
  }
  .myswiperitem {
    /* width: 100%;
    height: 35vw; */
    vertical-align: middle;
    object-fit: cover;
  }
  
  p {
    width: 100vw;
    position: absolute;
    text-indent: 10px;
    font-size: 14px;
    bottom: 0px;
    line-height: 20px;
    /* background: rgba(0, 0, 0, .5); */
    text-align: left;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  
</style>
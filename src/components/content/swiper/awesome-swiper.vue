<template>
<div>
    <swiper class="swiper" :options="swiperOption">
      <div class="swiper-scrollbar" slot="scrollbar">
        <div class="swiper-scrollbar-drag">
        </div>
      </div>
      <swiper-slide>
        <div class="">
          <img src="https://www.swiper.com.cn/templets/default/images/logo.png" />
        </div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'



import 'swiper/css/swiper.css'

export default {
  name: '',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    swiperOption: {
      type: Object,
      default: function() {
        return {
          scrollbar: {
            el: '.swiper-scrollbar',
            // hide: true
          },
          // 初始化显示
          initialSlide: 1
        }
      }
    }
  },
  data() {
    return {
      // swiperOption: {
      //     scrollbar: {
      //       el: '.swiper-scrollbar',
      //       // hide: true
      //     },
      //     // 初始化显示
      //     initialSlide: 1
      //   }
    }
  },
  watch: {},
  computed: {},
  methods: {
  },
  created() {
    
  },
  mounted() {
    
  }
}

</script>

<style scoped>
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
  
</style>

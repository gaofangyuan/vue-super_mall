<template>
  <div class="detailBottomNav">
    <div class="detailBottomNavItem">
      <img src="~@/assets/img/detailBottomN/dp.png" alt="">
      <p>店铺</p>
    </div>
    <div class="detailBottomNavItem">
      <img src="~@/assets/img/detailBottomN/kf.png" alt="">
      <p>客服</p>
    </div>
    <div class="detailBottomNavItem">
      <img src="~@/assets/img/detailBottomN/sc.png" alt="">
      <p>收藏</p>
    </div>
    <div class="detailBottomNavItem detailFlex2 background1" @click="addCart">
      <p>加入购物车</p>
    </div>
    <div class="detailBottomNavItem detailFlex2 background2">
      <p>立即购买</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    addCart() {
      this.$emit('addCart');
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
.detailBottomNav{
  padding: 0; 
  margin: 0;
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  z-index: 999;
  box-shadow: 0px 0px 10px 1px rgba(122, 122, 122, .1);
}
.detailBottomNavItem {
  flex: 1;
  height: 50px;
  text-align: center;
  background: #ffffff;
}
.detailBottomNavItem img {
  height: 22px;
  width: 22px;
  padding: 8px 0 0;
  vertical-align: middle;
  object-fit: cover;
}
.detailBottomNavItem p {
  color: #aaaaaa;
  margin: 0;
  font-size: 0.6em;
  line-height: 20px;
}
.detailFlex2 {
  flex: 2;
}
.detailFlex2 p {
  margin: 0;
  font-size: 1em;
  line-height: 50px;
  color: #ffffff;
}
.background1 {
  background: darkorange;
}
.background2 {
  background: red;
}
</style>
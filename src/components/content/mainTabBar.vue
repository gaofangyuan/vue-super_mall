<template>
  <div id="app">
    <tabBar>
      <tBitem tBI_p="首页" path="/Home" colorActive="#55A5C5">
        <img slot="img" src="@/assets/img/tabBar/home.png" alt="" />
        <img slot="img_active" src="@/assets/img/tabBar/home_active.png" alt="" />
      </tBitem>
      <tBitem tBI_p="分类" path="/Class">
        <img slot="img" src="@/assets/img/tabBar/class.png" alt="" />
        <img slot="img_active" src="@/assets/img/tabBar/class_active.png" alt="" />
      </tBitem>
      <tBitem tBI_p="购物车" path="/Cart">
        <img slot="img" src="@/assets/img/tabBar/cart.png" alt="" />
        <img slot="img_active" src="@/assets/img/tabBar/cart_active.png" alt="" />
      </tBitem>
      <tBitem tBI_p="我的" path="/User">
        <img slot="img" src="@/assets/img/tabBar/user.png" alt="" />
        <img slot="img_active" src="@/assets/img/tabBar/user_active.png" alt="" />
      </tBitem>
    </tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/common/tabBar/tabBar';
import tBitem from '@/components/common/tabBar/tabBarItem';

export default {
  name: 'mainTabBar',
  components: {
    tabBar,
    tBitem
  },
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style scoped>


</style>

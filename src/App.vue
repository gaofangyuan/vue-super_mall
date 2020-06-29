<template>
  <div id="app">
    <!-- <mainTopNav :title="title"></mainTopNav> -->
    <router-view></router-view>
    <mainTabBar/>
  </div>
</template>

<script>
import mainTabBar from '@/components/content/mainTabBar'
// import mainTopNav from '@/components/content/mainTopNav'

export default {
  name: 'App',
  components: {
    mainTabBar,
    // mainTopNav
  },
  props: {},
  data() {
    return {
      title: ''
    }
  },
  watch: {},
  computed: {
  },
  methods: {
  },
  created() {},
  mounted() {},
  updated() {
    this.title = this.$route.meta.title
  }
}
</script>

<style>
@import "~@/assets/css/base.css";
#app {
  margin: 0;
  padding: 0;
}
#mainTopNav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>

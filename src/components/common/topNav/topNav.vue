<template>
  <div class="wrapper">
    <div class="left">
      <slot name="nat_left"></slot>
    </div>
    <div class="center">
      <slot name="nat_center"></slot>
    </div>
    <div class="right">
      <slot name="nat_right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    title: String
  },
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
.wrapper{
  padding: 0; margin: 0;
  display: flex;
  background: rgba(85, 165, 197, 1);
  text-align: center;
  height: 44px;
  line-height: 44px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
}
.left, .right {
  width: 60px;
  font-weight: 400;
  font-size: 20px;
}
.center {
  flex: 1;
}
</style>
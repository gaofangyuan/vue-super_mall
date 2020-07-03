<template>
  <div id="cart">
    购物车
    {{cart}}

  </div>
</template>

<script>

export default {
  name: '',
  components: {
  },
  props: {},
  data() {
    return {
      cart: [],
      cartImg: ''
    }
  },
  watch: {},
  computed: {
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
  activated() {
    this.cart.splice(0, 1, this.$store.state.title);
    // console.log('进入页面')
  }
}
</script>
<style scoped>
  #cart {
    padding: 0; 
    margin: 0;
  }
</style>
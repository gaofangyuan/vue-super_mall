<template>
  <div class="backTop" :class="btopclass">
    <img src="~@/assets/img/backTop.png" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    btopclass: String
  },
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
.backTop{padding: 0; margin: 0;
position: fixed;
z-index: 999;
}
.backTop img {
  width: 3em;
  height: 3em;
  background: #ffffff;
  border-radius: 3em;
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, .2);
}
</style>
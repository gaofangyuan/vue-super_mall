<template>
  <div id="tab-bar">
    <slot></slot>
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

.wrapper{padding: 0; margin: 0;}

#tab-bar {
  display: flex;
  background: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 0px solid #dddddd;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .1);
  z-index: 99;
}

</style>
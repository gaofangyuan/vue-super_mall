<template>
  <div class="home_module3">
    <div class="home_m3_f" v-for="(item, index) in img" :key="index">
      <a :href="item.img">
        <img :src="item.img" alt="" />
        <p>{{item.name}}</p>
      </a>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    img: Array
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
.home_module3{
  padding: 0; 
  margin: 0;
  width: 100vw;
  padding-bottom: 15px;
  text-align: center;
  background: #ffffff;
}
.home_m3_f {
  width: 25vw;
  height: 30vw;
  float: left;
}
.home_m3_f img {
  width: calc(25vw - 30px);
  height: calc(25vw -30px);
  margin: 15px 15px 0;
  max-width: 100px;
  max-height: 100px;
  vertical-align: middle;
  object-fit: cover;
  border-radius: 100px;
}
.home_m3_f p {
  color: #555555;
  font-size: 0.8em;
}
</style>
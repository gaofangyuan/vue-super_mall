<template>
  <div class="wrapper">
    <div class="home_module2" v-for="(item,index) in img" :key="index">
      <a :href="item">
        <img :src="item" :alt="item" @load="imgload" />
        <p>{{title[index]}}</p>
      </a>

    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    img: {
      type: Array
    },
    title: {
      type: Array
    }
  },
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    imgload() {
      this.$emit('imgload')
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
.wrapper{ 
  padding: 0;
  margin: 0;
  display: flex;
  background: #ffffff;
}
.home_module2 {
  flex: 1;
  width: 25vw;
  height: 30vw;
  padding: 10px;
  text-align: center;
}
.home_module2 a {
  text-decoration: none;
}
.home_module2 img {
  width: calc(25vw - 20px);
  height: calc(25vw - 20px);
  max-width: 100px;
  max-height: 100px;
  border-radius: 25vw;
  
  object-fit: cover;
  vertical-align: middle;
}
.home_module2 p {
  color: #333333;
}
</style>
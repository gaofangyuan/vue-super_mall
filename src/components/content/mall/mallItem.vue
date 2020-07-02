<template>
  <div class="mall_item" @click="mallClk">
    <img :src="mallImg">
    <p>{{mallName}}</p>
    <h3>{{mallPrice | toFPrice}}</h3>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    mallImg: String,
    mallName: String,
    mallPrice: Number
  },
  data() {
    return {
    }
  },
  watch: {},
  computed: {
  },
  methods: {
    mallClk() {
      this.$emit('mallClk')
    }
  },
  created() {},
  mounted() {},
  filters: {
    // 过滤price数据
    toFPrice(mallPrice) {
      return '￥' + mallPrice.toFixed(2);
    }
  }
}
</script>
<style scoped>
  .mall_item{
    padding: 0;
    margin: 5px 10px;
    height: calc(65vw + 3.6em + 5px);
  }
  .mall_item img {
    height: 65vw;
    width: calc(50vw - 20px);
    vertical-align: middle;
    object-fit: cover;
    border-radius: 10px;
  }
  .mall_item p {
    margin: 5px 10px 0px;
    font-size: 1em;
    line-height: 1.2em;
    color: #555555;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .mall_item h3 {
    margin: 0 10px;
    font-size: 1em;
    line-height: 1.2em;
    color: darkorange;
  }
</style>
<template>
  <div class="mall">
    <div class="mallim" v-for="(item, index) in mall" :key="index">
      <a :href="item.cartImg">
        <mall-item :mallImg="item.cartImg" :mallName="item.cartTitle" :mallPrice="item.cartPrice"></mall-item>
      </a>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
import mallItem from './mallItem'

export default {
  name: '',
  components: {
    mallItem
  },
  props: {
    mall: {
      type: Array,
      default() {
        return [{
          cartTitle: '商品名称',
          tag: 0,
          cartImg: 'http://img.alicdn.com/bao/uploaded/i2/2331174328/O1CN01yDnzNE1hqGlRIhNyu_!!0-item_pic.jpg',
          cartPrice: 64.48
        }]
      }
    }
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
  .mall{
    padding: 5px 2.5px 20px; 
    margin: 0;
    background: #ffffff;
  }
  .mallim {
    width: calc(50vw - 5px);
    float: left;
  }

</style>
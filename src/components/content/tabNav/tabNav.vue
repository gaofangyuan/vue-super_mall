<template>
  <div :class="tabnavclass">
    <div class="tabNav_item" v-for="(item, index) in tabnav" :key="index" @click="clkInx(index)">
      <p :class="{tabNav_item_active: index == num ? true : false}">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    tabnav: {
      type: Array,
      default: function() {
        return ['推荐', '流行', '时尚']
      }
    },
    tabnavclass: {
      type: String,
      default() {
        return 'tabNav'
      }
    }
  },
  data() {
    return {
      num: 0
    }
  },
  watch: {},  
  computed: {},
  methods: {
    clkInx(index) {
      this.num = index;
      this.$emit('tabNavClkInx', index)
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
  .tabNav{
    padding: 0; 
    margin: 0;
    display: flex;
    text-align: center;
    background: #ffffff;
    height: 35px;
    position: sticky;
    top: 44px;
  }
  .tabNav_item {
    flex: 1;
    
  }
  .tabNav_item p {
    font-size: 1em;
    line-height: 25px;
    width: 3em;
    margin: 5px auto;
  }
  .tabNav_item_active {
    border-bottom: 3px solid #55A5C5;
  }
</style>
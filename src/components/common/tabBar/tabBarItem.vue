<template>
    <div class="tab-bar-item" @click="itemClick()">
      <div v-if="isActive"><slot name="img"></slot></div>
      <div v-else><slot name="img_active"></slot></div>
      <p :style="isStyle">{{tBI_p}}</p>
    </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    tBI_img: String,
    tBI_p: {
      type: String,
      default: ''
    },
    path: String,
    colorActive: {
      type: String,
      default: '#55A5C5'
    }
  },
  data() {
    return {
    }
  },
  watch: {},
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path);
    },
    isStyle() {
      return !this.isActive ? {color: this.colorActive, fontWeight: '600'} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
      // console.log(this.$route.path == this.path);
      
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  height: 25px;
  width: 25px;
  margin-top: 5px;
  padding: 0;
  margin: 3px 0 1px ;
  object-fit: contain;
  vertical-align: middle;
}
.tab-bar-item p {
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}
.active {
  color: #55A5C5;
  font-weight: 600;
}

</style>
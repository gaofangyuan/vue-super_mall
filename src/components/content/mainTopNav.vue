<template>
  <div class="wrapper">
    <topNav>
      <p class="nat_left" slot="nat_left">&lt;</p>
      <p class="nat_center" slot="nat_center">{{title}}</p>
      <p class="nat_right" slot="nat_right">&times;</p>
    </topNav>
  </div>
</template>

<script>
import topNav from '@/components/common/topNav/topNav'

export default {
  name: '',
  components: {
    topNav
  },
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
.wrapper{padding: 0; margin: 0;}
.nat_center, .nat_left, .nat_right {
  margin: 0;
  padding: 0;
}
</style>
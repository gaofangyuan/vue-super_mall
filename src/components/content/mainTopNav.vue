<template>
  <div class="mainTopNav">
    <topNav>
      <p class="nat_left" slot="nat_left"></p>
      <p class="nat_center" slot="nat_center">{{title}}</p>
      <p class="nat_right" slot="nat_right"></p>
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
.mainTopNav{padding: 0; margin: 0;position: fixed; top: 0; left: 0; right: 0;z-index: 99;}
.nat_center, .nat_left, .nat_right {
  margin: 0;
  padding: 0;
}
</style>
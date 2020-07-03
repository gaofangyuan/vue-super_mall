    import Vue from 'vue'
    import vuex from 'vuex'
    // 安装插件
    Vue.use(vuex)
    // 创建对象
    const store = new vuex.Store({
      // 保存状态
      state: {
        title: [],
      },
      // 操作状态，不能有异步操作
      mutations: {
        numPluss(state, payload) {console.log(payload);}
      },
      actions: {
      },
      getters: {
      },
      modules: {
      }
    })
    // 导出store
    export default store
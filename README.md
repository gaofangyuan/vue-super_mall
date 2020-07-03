# super_mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### src目录结构
```
assets          资源，图片，css，js
common          公用js文件，用于存放经常用到的常量
components      公用组件
network         网络相关
router          路由
store           全局变量，vuex大管家
views           组件

node_modules:
axios网络请求
vue-concise-slider轮播
better-scroll移动端滚动


mixin 混入

const router = new Router({
  // 解决调整页面不再最顶端显示
  scrollBehavior(to,from,saveTop){ if(saveTop){ return saveTop; }else{ return {x:0,y:0} } }
})
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

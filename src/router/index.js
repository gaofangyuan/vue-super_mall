import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/home/home')
const Class = () => import('@/views/class/class')
const Cart = () => import('@/views/cart/cart')
const User = () => import('@/views/user/user')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/Class',
    component: Class,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/Cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/User',
    component: User,
    meta: {
      title: '用户'
    }
  }
]

const router = new Router({
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
// to and from are both route objects. must call `next`.
  document.title = to.meta.title
  next()
})

export default router
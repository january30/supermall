import Vue from 'vue'
import VueRouter from 'vue-router'

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

// const originalReplace = VueRouter.prototype.replace
// VueRouter.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err)
// }
Vue.use(VueRouter)


const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')

const Detail = () => import('views/detail/Detail.vue')
const Login = () => import('views/profile/childComps/Login.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // console.log('全局路由守卫');
//   if(to.path == '/login') return next();
//   const userFlag = window.sessionStorage.getItem('username');
//   if(!userFlag) return next ('/login');
//   next()
// })

export default router

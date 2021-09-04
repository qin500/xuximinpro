import { createRouter, createWebHistory } from 'vue-router'
const Home =()=>import('../views/home/Home')
const Category =()=>import('../views/category/Category')
const Profile =()=>import('../views/profile/Profile')
const ShopCart =()=>import('../views/shopcart/ShopCart')
const Detail =()=>import('../views/detail/Detail')

const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta:{
      title:'图书兄弟'
    }
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'图书兄弟'
    }
  },{
    path: '/category',
    name: 'Category',
    component: Category,
    meta:{
      title:'图书兄弟-商品分类'
    }
  },{
    path: '/detail',
    name: 'Detail',
    component: Detail
  },{
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta:{
      title:'图书兄弟-购物车'
    }
  },{
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{
      title:'图书兄弟-个人中心'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//导航守卫
router.beforeEach((to,from)=>{
  //如果没有登录,在这里到login



  document.title=to.meta.title
})
export default router

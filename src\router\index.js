import Vue from "vue"
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import Login from "../views/Login.vue";
const Login = () => import("@/views/Login");
const routes = [{
  path: '/',
  name: '登录',
  component: Login,
}]

const router = new VueRouter({
  mode: 'hash', // hash history
  routes //必须这样写routes
})

//全局路由导航守卫 前置守卫
router.beforeEach((to, from, next) => {
  if(to.path == '/' || to.path == '/Login'){
    next()
    return
  }else if(sessionStorage.getItem("userInfo")){
    next()
  }else{
    next('/')
    return
  }
})

//后置守卫
// router.afterEach((to,from)=>{
//   // console.log(to,from)
// })

export default router;

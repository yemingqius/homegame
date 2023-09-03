import {createRouter,createWebHistory} from 'vue-router'

const routes = [
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/login/index.vue")
  },
  {
    path:"/",
    name:"home",
    component:()=>import("../layout/index.vue"),
    children:[
      {
        path:"/list",
        name:"list",
        component:()=>import("../views/user/userList.vue")
      },
      {
        path:"/add",
        name:"add",
        component:()=>import("../views/user/userAdd.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  // token判断跳转逻辑
  let token = localStorage.getItem("mushan-token");
  if(to.name != 'login' && !token){
    next({name:"login"})
  }else{
    next()
  }


})

export default router
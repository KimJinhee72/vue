import { createRouter, createWebHistory } from "vue-router";
// import에 연결할 views에 연결한 하위파일을 담는다
import Home from "@/views/Home.vue";
import Aobut from "@/views/Aobut.vue";
import Check from "@/views/Check.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Review from "@/views/Review.vue";
// routes에 연결할 views에 연결한 path 담는다
const routes  = [
    {path:"/" , component:Home},
    {path:"/aobut" , component:Aobut},
    {path:"/check" , component:Check},
    {path:"/login" , component:Login},
    {path:"/signup" , component: Signup},
    {path:"/review" , component:Review},
]
// router는 공식으로 똑같이 붙임
const router = createRouter({
    history : createWebHistory(),
    routes,
})
export default router;
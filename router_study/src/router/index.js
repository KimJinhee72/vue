import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue";
import About from "@/views/About.vue";
import Reservation from "@/views/Reservation.vue";
import VPayment from "@/views/VPayment.vue";
import Vlogin from "@/views/Vlogin.vue";
import JoinUS from "@/views/JoinUS.vue";
import Review from "@/views/Review.vue";
import Menu1 from "@/views/home/Menu1.vue";
import Menu2 from "@/views/home/Menu2.vue";
import Menu3 from "@/views/home/Menu3.vue";
import Menu4 from "@/views/home/Menu4.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/reservation", component: Reservation },
  { path: "/payment", component: VPayment },
  { path : "/login" , component: Vlogin },
  { path : "/join" , component : JoinUS},
  { path : "/review" , component : Review},
  { path : "/menu1" , component : Menu1},
  { path : "/menu2" , component : Menu2},
  { path : "/menu3" , component : Menu3},
  { path : "/menu4" , component : Menu4},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

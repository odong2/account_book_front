import Vue from 'vue';
import VueRouter from 'vue-router';
import GridSystem from '@/views/GridSystem';
import GridListPage from '@/views/GridListPage';
import BreakPoint from '@/views/BreakPoints';
import Thypography from '@/views/ThypoGraphy';
import TablesVue from '@/views/TablesVue';
import Login from '@/views/auth/Login';
import SocialSignup from "@/views/auth/SocialSignup";
import Kakaojoin from "@/views/auth/Kakaojoin";
import AuthenticationLayout from "@/layouts/auth/Index";
import Calendar from '@/views/Calendar';
import DefaultLayout from '@/layouts/default/Index';
Vue.use(VueRouter);

const routes = [
  // 로그인, 회원가입
  {
    path: "/auth",
    component: AuthenticationLayout,
    children: [
      {
        path: "login",
        name: "로그인",
        component: Login,
      },
      {
        path: "social/sign-up",
        name: "회원가입",
        component: SocialSignup,
      },
      {
        path: "kakao/join",
        name: "카카오",
        component: Kakaojoin,
      },
    ],
  },
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "calendar",
        name: "캘린더",
        component: Calendar,
      },
      {
        path: "grid-system",
        name: "GridSystem",
        component: GridSystem,
      },
      {
        path: "grid-list-page",
        name: "GridListPage",
        component: GridListPage,
      },
      {
        path: "break-point",
        name: "BreakPoint",
        component: BreakPoint,
      },
      {
        path: "thypography",
        name: "Thypography",
        component: Thypography,
      },
      {
        path: "tables",
        name: "TablesVue",
        component: TablesVue,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

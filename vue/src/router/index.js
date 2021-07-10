import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Login = () => import("../views/Login.vue");
const Register = () => import("../views/Register.vue");
const Register1 = () => import("@/components/Register1.vue");
const Register2 = () => import("@/components/Register2.vue");
const Register3 = () => import("@/components/Register3.vue");
const Register4 = () => import("@/components/Register4.vue");
const Register5 = () => import("@/components/Register5.vue");
const profile = () => import("../views/profile.vue");
const MyAccount = () => import("@/components/MyAccount.vue");
const MyTicket = () => import("@/components/MyTicket.vue");
const newMainpage = () => import("../views/newMainpage.vue");
const forget = () => import("@/components/forgetPass.vue");
const resetpass = () => import("@/components/resetPass.vue");

const routes = [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/register1",
      name: "Register1",
      component: Register1,
    },
    {
      path: "/register2",
      name: "Register2",
      component: Register2,
    },
    {
      path: "/register3",
      name: "Register3",
      component: Register3,
    },
    {
      path: "/register4",
      name: "Register4",
      component: Register4,
    },
    {
      path: "/register5",
      name: "Register5",
      component: Register5,
    },
    {
      path: "/profile",
      name: "profile",
      component: profile,
    },
    {
      path: "/myaccount",
      name: "myaccount",
      component: MyAccount,
    },
    {
      path: "/myticket",
      name: "myticket",
      component: MyTicket,
    },
    {
      path: "/",
      name: "newmain",
      component: newMainpage,
    },
    {
      path: "/forget",
      name: "forget",
      component: forget,
    },
    {
      path: "/reset",
      name: "reset",
      component: resetpass,
    }
  ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

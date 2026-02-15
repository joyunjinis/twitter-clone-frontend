import FeedItem from "@/components/FeedItem.vue";
import ItemComponent from "@/components/ItemComponent.vue";
import DemoPage from "@/views/DemoPage.vue";
import LifeCycle from "@/views/LifeCycle.vue";
import LoginPage from "@/views/LoginPage.vue";
import MainPage from "@/views/MainPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LoginPage,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("access_token");
        if (token) {
          next("/main");
        } else {
          next();
        }
      },
    },
    {
      path: "/demo",
      component: DemoPage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/signup",
      component: SignUpPage,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("access_token");
        if (token) {
          next("/main");
        } else {
          next();
        }
      },
    },
    {
      path: "/main",
      component: MainPage,
      beforeEnter: (to, form, next) => {
        const token = localStorage.getItem("access_token");
        if (token) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/lifecycle",
      component: LifeCycle,
    },
    {
      path: "/item",
      component: ItemComponent,
    },
    {
      path: "/feeditem",
      component: FeedItem,
    },
  ],
});

export default router;

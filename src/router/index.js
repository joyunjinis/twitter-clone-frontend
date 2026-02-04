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
    },
    {
      path: "/main",
      component: MainPage,
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

import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3ConfirmDialog from "vue3-confirm-dialog";
import "vue3-confirm-dialog/style";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(Vue3ConfirmDialog);
app.component("vue3-confirm-dialog", Vue3ConfirmDialog.default);
app.mount("#app");

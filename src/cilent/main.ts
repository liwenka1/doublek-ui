import { createApp } from "vue";
import App from "./App.vue";
import { creatUI } from "..";

createApp(App).use(creatUI()).mount("#app");

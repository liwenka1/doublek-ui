import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { creatUI } from "doublek-ui";
import "doublek-ui/dist/style.css"

createApp(App).use(creatUI()).mount("#app");

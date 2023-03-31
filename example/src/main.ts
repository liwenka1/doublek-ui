import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import { creatUI } from 'doublek-ui'
import "doublek-ui/dist/style.css";
import { DoubleKButton } from "doublek-ui";

createApp(App).component("k-button", DoubleKButton).mount("#app");

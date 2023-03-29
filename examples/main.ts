import { createApp } from 'vue'
import App from './app.vue'
const app = createApp(App)
import doublekui from "doublek-ui"
import { Button } from "doublek-ui"
app.use(doublekui)
app.use(Button)
console.log(doublekui);

app.mount('#app') 
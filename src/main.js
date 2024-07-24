import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
    config: { id: "process.env.VUE_APP_GA_MEASUREMENT_ID " }
});
const app = createApp(App);
app.use(router);

app.mount("#app");

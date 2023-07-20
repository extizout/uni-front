import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Router from "./router";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import vuetify from "./plugins/vuetify";

const app = createApp(App);
const pinia = createPinia();

app.use(vuetify)
app.use(pinia)
app.use(Router);
app.mount("#app");

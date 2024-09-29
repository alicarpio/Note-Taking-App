import {createApp} from 'vue'
import "./index.css";
import App from './App.vue'
import router from "./routes";
import {AxiosPlugin} from "@/axios.ts";
import {VueQueryPlugin} from "@tanstack/vue-query";
import {createPinia} from "pinia";

const pinia = createPinia();


createApp(App).use(pinia).use(router).use(VueQueryPlugin).use(AxiosPlugin).mount('#app')

import axios from "axios";
import {App} from "vue";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL ?? "http://localhost:5315",
});

apiClient.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("access_token");
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error?.response.status === 401) {

        } else {
            return Promise.reject(error);
        }
    }
);


export const AxiosPlugin = {
    install: (app: App) => {
        app.config.globalProperties.$apiClient = apiClient;
    },
};

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $axios: typeof apiClient;
    }
}
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        name: "login",
        path: "/login",
        component: () => import("@pages/LoginPage.vue"),
    },
    {path: "/home", component: () => import("@pages/Home.vue")},
    {path: "/", redirect: "/login"},
    {name: "register", path: "/register", component: () => import("@pages/RegisterPage.vue")},
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, _from) => {
    const accessToken = localStorage.getItem("access_token");
    const authenticated = accessToken !== null;

    if (!authenticated && to.path !== "/login" && to.path !== "/" && to.path !== "/register") {
        return "/login";
    }

    if (authenticated && to.path === "/login") {
        return "/home";
    }
});


export default router;

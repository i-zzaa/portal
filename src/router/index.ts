import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/store/module_login";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      redirect: "/login-2",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/Login.vue"),
      meta: { title: "Login" },
    },
    {
      path: "/login-2",
      name: "login2",
      component: () => import("@/pages/Login-2.vue"),
      meta: { title: "Login" },
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("@/pages/Home.vue"),
      meta: { title: "Home" },
    },
    {
      path: "/help-desk",
      name: "HelpDesk",
      component: () => import("@/pages/HelpDesk.vue"),
      meta: { title: "Home" },
    },
    {
      path: "/meus-chamados",
      name: "Chamados",
      component: () => import("@/pages/MyCalls.vue"),
      meta: { title: "Home" },
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const store = useAuth();
//   const loggedIn = store.isLoggedIn;

//   if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
//     next({
//       name: "login",
//       query: { redirect: to.fullPath },
//     });

//     store.logout();
//     next("/login-2");
//   } else {
//     next();
//   }
// });

export default router;

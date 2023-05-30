import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/store/module_login";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/Login.vue"),
      meta: { requiresVisitor: true, children: "Login", title: "Login" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useAuth();
  const loggedIn = store.isLoggedIn;

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next({
      name: "login",
      query: { redirect: to.fullPath },
    });

    store.logout();
    next("/login");
  } else {
    next();
  }
});

export default router;

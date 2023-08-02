import { createRouter, createWebHistory } from "vue-router";
// import { useAuth } from "@/store/module_login";
import PNav from "@/components/Nav.vue";
import PFooter from "@/components/Footer.vue";
import { useAuth } from "@/store/module_login";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/Login.vue"),
      meta: { title: "Login" },
    },
    {
      path: "/",
      name: "Home",
      components: {
        PNav,
        default: () => import("@/pages/Home.vue"),
        PFooter,
      },
      meta: { title: "Home", requiresAuth: true },
    },
    {
      path: "/help-desk",
      name: "HelpDesk",
      components: {
        PNav,
        default: () => import("@/pages/HelpDesk.vue"),
        PFooter,
      },
      meta: { title: "Help Desk", requiresAuth: true },
    },
    {
      path: "/meus-chamados",
      name: "Chamados",
      components: {
        PNav,
        default: () => import("@/pages/MyCalls.vue"),
        PFooter,
      },
      meta: { title: "Meus Chamados", requiresAuth: true },
    },
  ],
});

router.beforeEach((to, _, next) => {
  const store = useAuth();

  const loggedIn = store.isLoggedIn;

  switch (true) {
    case (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) ||
      (router.resolve(to.path).matched.length === 0 && !loggedIn):
      store.logout();
      next("/login");
      break;
    case router.resolve(to.path).matched.length === 0 && loggedIn:
      next("/");
      break;

    default:
      next();
      break;
  }
});

export default router;

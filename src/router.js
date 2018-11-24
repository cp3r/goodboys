import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome.vue";
import Breeds from "./views/Breeds.vue";
import Breed from "./views/Breed.vue";
import BreedsMenu from "./components/BreedsMenu.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/breeds",
      name: "breeds",
      component: Breeds,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/breeds/:breed",
      name: "breed",
      children: [
        {
          path: ":subbreed",
          component: Breed
        }
      ],
      components: {
        default: Breed,
        menu: BreedsMenu
      },
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    if (localStorage.getItem("user-token")) {
      next();
    } else {
      next({
        path: "/",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;

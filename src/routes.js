import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "./components/pages/TheHome.vue";
import Notify from "./components/pages/TheNotifyPage.vue";
import NoteFound from "./components/pages/TheNotFound.vue";

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/notify",
      name: "notify",
      component: Notify,
    },
    {
      path: "*",
      name: "noteFound",
      component: NoteFound,
    },
  ],
});

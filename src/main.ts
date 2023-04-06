import { createApp } from "vue";
import { App } from "./App";
import { createRouter } from "vue-router";
import { routes } from "./config/routes";
import { history } from "./shared/history";
import "@svgstore";
import { createPinia, storeToRefs } from "pinia";
import { useMeStore } from "./stores/useMeStore";

const router = createRouter({ history, routes });
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");

const meStore = useMeStore();
const { mePromise } = storeToRefs(meStore);
meStore.fetchMe();

const whiteList: Record<string, "exact" | "stratsWith"> = {
  "/": "exact",
  "/items": "exact",
  "/welcome": "stratsWith",
  "/sign_in": "stratsWith",
};
router.beforeEach((to, from) => {
  for (const key in whiteList) {
    const value = whiteList[key];
    if (value === "exact" && to.path === key) {
      return true;
    }
    if (value === "stratsWith" && to.path.startsWith(key)) {
      return true;
    }
  }
  return mePromise!.value!.then(
    () => true,
    () => "/sign_in?return_to=" + to.path
  );
});

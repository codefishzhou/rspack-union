import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerRemoteRoutes } from '@module-federation/utilities'
const app = createApp(App);

export const bootstrap = () => {
  app
    .use(store(app))
    .use(router)
    .mount("#root");
};

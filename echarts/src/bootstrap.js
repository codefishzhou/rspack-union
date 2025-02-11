import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

export const bootstrap = () => {
    return createApp(App)
      .use(store)
      .use(router)
    .mount("#root");
};

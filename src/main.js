import { createApp } from "vue";
import App from "./App.vue";

import VRipple from "./custom-directives/v-ripple";

const app = createApp(App);

app.directive("ripple", VRipple);

app.mount("#app");

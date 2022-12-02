import Vue from "vue";
import VueRouter from "vue-router";
import VueCarousel from "vue-carousel";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import AOS from "aos";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "aos/dist/aos.css";

import router from "./router";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(faShoppingCart, faBars, faInstagramSquare);

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");

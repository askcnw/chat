import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueChatScroll from "vue-chat-scroll";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/scss/style";
import "@/assets/js/index";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueChatScroll);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");

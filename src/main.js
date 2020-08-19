import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueChatScroll from "vue-chat-scroll";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/scss/loading.scss";
import "./assets/scss/loading-btn.scss";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueChatScroll);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
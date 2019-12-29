import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import waiForm from "./packages/wai-form/index";
// Vue.use(waiForm);
import waiui from "./waiui";
Vue.use(waiui);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");

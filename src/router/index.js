import Vue from "vue";
import VueRouter from "vue-router";
import waiFormDemo from "../packages/wai-form/demo";
import waiButtonDemo from "../packages/wai-button/demo.vue";
import waiAvatarDemo from "../packages/wai-avatar/demo.vue";
import waiToastDemo from "../packages/wai-toast/demo.vue";
import waiIconDemo from "../packages/wai-icon/demo.vue";

import demoVue from "../packages/demoVue/a.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/waiform", component: waiFormDemo },
    { path: "/waibutton", component: waiButtonDemo },
    { path: "/waiavatar", component: waiAvatarDemo },
    { path: "/waitoast", component: waiToastDemo },
    { path: "/waiicon", component: waiIconDemo },
    { path: "/demoVue", component: demoVue },
];

const router = new VueRouter({
    routes,
});

export default router;

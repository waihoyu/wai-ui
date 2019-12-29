import Vue from "vue";
import VueRouter from "vue-router";
import waiFormDemo from "../packages/wai-form/demo";
import waiButtonDemo from "../packages/wai-button/demo.vue";
import waiAvatarDemo from "../packages/wai-avatar/demo.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/waiform", component: waiFormDemo },
    { path: "/waibutton", component: waiButtonDemo },
    { path: "/waiavatar", component: waiAvatarDemo },
];

const router = new VueRouter({
    routes,
});

export default router;

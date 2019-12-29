import WToast from "./wToast.vue";
import "./wToast.scss";

WToast.install = function(Vue) {
    Vue.component(WToast.name, WToast);
};
export default WToast;

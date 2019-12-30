import WIcon from "./wIcon.vue";
import "./wIcon.scss";

WIcon.install = function(Vue) {
    Vue.component(WIcon.name, WIcon);
};
export default WIcon;

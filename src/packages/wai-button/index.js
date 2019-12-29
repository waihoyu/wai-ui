import WButton from "./wButton.vue";
import "./wButton.scss";

WButton.install = function(Vue) {
    Vue.component(WButton.name, WButton);
};
export default WButton;

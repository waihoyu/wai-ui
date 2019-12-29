import WAvatar from "./wAvatar.vue";
import "./avatar.scss";

WAvatar.install = function(Vue) {
    Vue.component(WAvatar.name, WAvatar);
};
export default WAvatar;

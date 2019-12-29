import WForm from "./wForm.vue";
import "./wForm.scss";

WForm.install = function(Vue) {
    Vue.component(WForm.name, WForm);
};
export default WForm;

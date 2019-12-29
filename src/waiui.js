import waiForm from "./packages/wai-form";
import waiButton from "./packages/wai-button";
import waiAvatar from "./packages/wai-avatar";
import { version } from "../package.json";
import { packages as pkgList } from "./config.json";
const packages = {
    waiForm,
    waiButton,
    waiAvatar,
};
const components = {};
pkgList.map(item => {
    const pkg = packages[item.name];
    if (!pkg) {
        return;
    }
    if (item.type == "component") {
        if (pkg.name) {
            components[pkg.name] = pkg;
        } else {
            for (const key in pkg) {
                components[key] = pkg[key];
            }
        }
    }
});

const install = function(Vue, opts = {}) {
    if (install.installed) {
        return;
    }
    for (let ctp in components) {
        if (components[ctp] && components[ctp].name) {
            Vue.component(components[ctp].name, components[ctp]);
        }
    }
};
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
export default {
    version,
    install,
    ...components,
};

<template>
<div id="app">
    <div class="showNav">
        <br>
        <router-link to="waiicon">1. 图标组件</router-link>
        <br>
        <router-link to="waibutton">2. 按钮组件</router-link>
        <br>
        <router-link to="waiavatar">3. 头像组件</router-link>
        <br>
        <router-link to="waiform">4. 表单组件</router-link>
        <br>
        <router-link to="waitoast">5. 吐司组件</router-link>
        <br>
        <router-link to="demoVue">6. 递归调用</router-link>
        <br>
        <router-link to="demoVue">7. 递归调用</router-link>
        <br>
        <router-link to="demoVue">8. 递归调用</router-link>
        <br>
        <router-link to="demoVue">9. 递归调用</router-link>
        <br>
        <router-link to="demoVue">10. 递归调用</router-link>
        <br>
        <router-link to="demoVue">11. 递归调用</router-link>
        <br>
        <router-link to="demoVue">12. 递归调用</router-link>
        <br>
        <router-link to="demoVue">13. 递归调用</router-link>
        <br>
        <router-link to="demoVue">14. 递归调用</router-link>
        <br>
        <router-link to="demoVue">15. 递归调用</router-link>
        <br>
        <router-link to="demoVue">16. 递归调用</router-link>
        <br>
        <router-link to="demoVue">17. 递归调用</router-link>
        <br>
        <router-link to="demoVue">18. 递归调用</router-link>
        <br>
        <router-link to="demoVue">19. 递归调用</router-link>
        <br>
        <router-link to="demoVue">20. 递归调用</router-link>
        <br>
        <br>
    </div>
    <div class="showArea">
        <router-view class="showView"></router-view>
    </div>

</div>
</template>

<script>
export default {
    name: 'app',
    components: {}
}
</script>

<style>
#app{
    display: flex;
    flex-direction: row;
}
.showNav{
    margin-left: 50px;
}
.showArea {
    background-color: aquamarine;
    align-content: center;
    margin: 10px 100px;
    width: 600px;
    height: 100%;
}

.showView {
    align-content: center;
    margin: 10px;
}
</style>

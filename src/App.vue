<template>
<div id="app">
    <router-link to="waiform">表单组件</router-link>
    <br>
    <router-link to="waiavatar">头像组件</router-link>
    <br>
    <router-link to="waibutton">按钮组件</router-link>
    <br>
    <br>
    <br>
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
.showArea {
    background-color: aquamarine;
    align-content: center;
    margin: 0 auto;
    width: 400px;
    height: 300px;
}

.showView {
    align-content: center
}
</style>

<template>
<div id="main">
    <br>
    <wai-button>默认按钮</wai-button>
    <br>
    <wai-button shape="circle">圆角默认按钮</wai-button>
    <br>
    <wai-button type="actived">活动默认按钮</wai-button>
    <br>
    <wai-button type="actived" shape="circle">活动圆角按钮</wai-button>
    <br>
    <wai-button :disabled="true">禁用按钮</wai-button>
    <br>
    <wai-button :small="true">小号按钮</wai-button>
    <br>
</div>
</template>

<script>
export default {
    name: "demo"
}
</script>

<style lang="scss" scoped>
#main {
    display: flex;
    flex-wrap: wrap;

    div {
        margin: 10px;
    }
}
</style>

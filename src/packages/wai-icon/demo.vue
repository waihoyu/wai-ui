<template>
<div>
    <h4>所有ICON</h4>
    <table>
        <tr>
            <td>
                <wai-icon type="top"></wai-icon><span>top</span>
            </td>
            <td>
                <wai-icon type="down"></wai-icon><span>down</span>
            </td>
            <td>
                <wai-icon type="right"></wai-icon><span>right</span>
            </td>
            <td>
                <wai-icon type="action"></wai-icon><span>action</span>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: "demo"
}
</script>

<style lang="scss" scoped>
table{
    width:100%;
    border-collapse:collapse;
    td{
        width:25%;
        text-align:center;
        vertical-align: middle;
        height:100px;
        border:1px solid #ebebeb;
        font-size:12px;
    }
    span{
        display:block;
    }
}
</style>

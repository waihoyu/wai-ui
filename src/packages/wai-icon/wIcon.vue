<template>
<div>
    <i :class="['wai-icon ','wai-icon-'+ type ]" v-html="this.icon"></i>
</div>
</template>

<script>
const types = ['top', 'action', 'cross', 'down', 'right', 'more', 'plus', 'search', 'trolley', 'tick', 'minus', 'circle-cross'];

export default {
    name: 'waiIcon',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#2e2d2d'
        }
    },
    data() {
        return {
            icon: null
        }
    },
    created() {
        if (types.indexOf(this.type) === -1) {
            console.error('wai-icon组件type值（' + this.type + ')有误，无此图标');
        } else {
            this.icon = require('../../assets/svg/' + this.type + '.svg');
            console.log(this.icon)
        }
    },
    methods: {

    }
}
</script>

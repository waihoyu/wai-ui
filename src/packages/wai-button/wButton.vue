<template>
<div>
    <button :class="btnClsStyle" :disabled="disabled" @click="handleClick">
        <span>
            <slot></slot>
        </span>
    </button>
</div>
</template>

<script>
export default {
    name: "WaiButton",
    data() {
        return {
            
        }
    },
    props: {
        type: {
            type: String,
            default: '',
            required: false
        },
        shape: {
            type: String,
            default: ''
        },
        small: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
        }
    },
    computed: {
        btnClsStyle() {
            let cls = 'wai-button default ';
            cls += `${this.type} ${this.shape}`;
            cls += this.small ? 'small' : ''
            return cls
        }
    },
    methods: {
        handleClick() {
            alert('我被点击了')
            this.$emit('click')
        }
    }
}
</script>

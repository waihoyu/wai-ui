<template>
<div>
    <input :type='type' :value='inputValue' @input='handleInput'>
</div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            inputValue: this.value
        }
    },
    methods: {
        handleInput(e) {
            this.inputValue = e.target.value
            this.$emit('input', this.inputValue)
            this.$parent.$emit('validate', this.inputValue)
        }
    },

}
</script>

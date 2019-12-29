<template>
<div>
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'waiForm',
    provide() {
        return {
            'form': this
        }
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    },
    created() {
        this.fields = []
        this.$on('formItemAdd', item => {
            this.fields.push(item)
        })
    },
    methods: {
        validate(callback) {

        }
    },
}
</script>

<style lang="scss" scoped>

</style>

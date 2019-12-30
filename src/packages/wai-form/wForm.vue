<template>
<div :class="['w-form']">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'waiForm',
    provide() {
        return {
            form: this
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
            console.log(this.fields[0])
            const tasks = this.fields.map(item=>item.validate())
            let ret = true;
            Promise.all(tasks).then(results => {
                results.forEach(valid=>{
                    if (!valid) {
                        ret = false
                    }
                })
                callback(ret)
            })
        }
    },
}
</script>


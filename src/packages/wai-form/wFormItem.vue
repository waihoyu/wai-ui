<template>
<div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="validateStatus==='error'" class="error">{{errorMessage}}</p>
</div>
</template>

<script>
import schema from 'async-validator'
export default {
    data() {
        return {
            validateStatus: '',
            errorMessage: ''
        }
    },
    props: {
        label: {
            type: String,
            default: ""
        },
        prop: {
            type: String,
            default: ""
        }
    },
    inject: ['form'],
    mounted() {
        if (this.prop) {
            this.$parent.$emit('formItemAdd', this)
        };
    },
    methods: {
        validate(value) {
            return new Promise(resolve => {
                console.log(value);
                let descriptor = {}
                descriptor[this.prop] = this.form.rules[this.prop]
                const validator = new schema(descriptor)
                let obj = {}
                obj[this.prop] = value
                validator.validate(obj, errors => {
                    if (errors) {
                        console.log('error')
                        this.validateStatus = "error"
                        this.errorMessage = errors[0].message
                        resolve(false)
                    } else {
                        console.log('ok')
                        this.validateStatus = ""
                        this.errorMessage = ""
                        resolve(true)
                    }
                })
            })

        }
    },
    created() {
        this.$on('validate', this.validate);
    },
}
</script>

<style lang="scss" scoped>

</style>

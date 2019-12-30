<template>
<div>
    <wai-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <w-form-item label="用户名" prop="name">
            <w-form-input v-model="ruleForm.pwd"></w-form-input>
        </w-form-item>
        <w-form-item label="密码" prop="pwd">
            <w-form-input type="password" v-model="ruleForm.pwd"></w-form-input>
        </w-form-item>
            <input type="button" @click="submitForm('ruleForm')" value="提交"></input>
    </wai-form>
</div>
</template>

<script>
import wFormItem from './wFormItem.vue';
import wFormInput from './wInput.vue';
export default {
    name: "demo",
    data() {
        return {
            ruleForm: {
                name: "",
                pwd: ""
            },
            rules: {
                name: [{
                        required: true,
                        message: '请输入用户名'
                    },
                    {
                        min: 1,
                        max: 10,
                        message: '用户名需要6-10个字符'
                    }
                ],
                pwd: [{
                    required: true,
                    message: '请输入密码'
                }]
            }
        }
    },
    methods: {
        submitForm(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    alert('验证成功')
                } else {
                    alert('验证失败');
                    return false
                }
            })
        }
    },
    components: {
        wFormItem,
        wFormInput,
    }
};
</script>

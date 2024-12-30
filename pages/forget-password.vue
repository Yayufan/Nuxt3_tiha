<template>


    <section class="forget-password-section">

        <el-breadcrumb :separator-icon="ArrowRight" class="article-list-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/login' }">會員登入</el-breadcrumb-item>
            <el-breadcrumb-item>找回密碼</el-breadcrumb-item>
        </el-breadcrumb>




        <div class="forget-pwd-container">
            <el-card class="forget-pwd-card">

                <h2 class="forget-pwd-title">找回密碼</h2>

                <el-form :model="form" :rules="rules" ref="formRef" label-position="top" class="forget-pwd-form">

                    <el-form-item label="請輸入信箱/E-mail" prop="email">
                        <el-input v-model="form.email" type="email" />
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm(formRef)" :loading="loadingStatus"
                            class="submit-button">送出</el-button>
                    </el-form-item>

                </el-form>
            </el-card>
        </div>

    </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { ArrowRight } from '@element-plus/icons-vue'

const router = useRouter()

const formRef = ref<FormInstance>()

let loadingStatus = ref(false)

let form = reactive({
    email: '',
})



//找回密碼function
const forgetPassword = async () => {
    let res = await CSRrequest.post("member/forget-password", {
        body: form
    })

    return res
}

const rules = reactive<FormRules>({
    email: [
        {
            required: true,
            message: '請輸入電子郵件',
            trigger: 'blur'
        },
        {
            type: 'email',
            message: '請輸入有效的電子郵件地址',
            trigger: 'blur'
        }
    ]
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(async (valid) => {
        if (valid) {
            //在送出表單前關閉按鈕，得到響應後開啟按鈕
            loadingStatus.value = true
            let res = await forgetPassword()
            loadingStatus.value = false
            if (res.code != 200) {
                ElMessage.error("無此信箱,或者嘗試第三方社群登入")
                return
            }
            ElMessage.success(res.msg)

        } else {
            ElMessage.error("請輸入正確信箱格式")
        }
    })
}
</script>



<style scoped lang="scss">
.forget-password-section {
    margin-top: 3%;
    font-family: initial;

    .article-list-breadcrumb {
        margin: 0 8%;
    }

    /** 重寫麵包屑導航樣式 */

    :deep(.el-breadcrumb) {
        font-size: 1rem;
        letter-spacing: 0.1rem;
    }

    :deep(.el-breadcrumb__inner.is-link:hover) {
        color: var(--el-text-color-regular);
    }

    :deep(.el-breadcrumb__inner.is-link) {
        color: #242B64;
    }

    :deep(.el-breadcrumb__separator) {
        color: #242B64;
    }


    .forget-pwd-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        margin: 5% 0;

        @media screen and (max-width:850px) {
            margin: 5% 0;
            min-height: auto;
        }

        .forget-pwd-card {
            width: 100%;
            max-width: 500px;
            border: 3px #C0E1E9 solid;
            border-radius: 25px;
            box-shadow: 0 4px 12px rgba(130, 211, 222, 0.1);

            @media screen and (max-width:481px) {
                width: 90%;
            }


            .forget-pwd-title {
                font-size: 1.3rem;
                letter-spacing: 0.3rem;
                color: #242B64;
                text-align: center;
                margin: 2% 0;
            }

            .forget-pwd-form {

                :deep(.el-form-item__label) {
                    color: #242B64;
                    font-weight: 540;
                    letter-spacing: 0.1rem;
                    margin-bottom: 0;
                    margin-top: 4px;
                }


                .submit-button {
                    width: 100%;
                    background-color: #C3E2Ea;
                    border-color: #C3E2Ea;
                    color: #1C2B6E;
                    letter-spacing: 0.1rem;
                    font-weight: bold;
                }

                .submit-button:hover,
                .submit-button:focus {
                    color: #ffffff;
                }
            }

        }

    }

}
</style>
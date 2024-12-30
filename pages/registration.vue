<template>

  <section class="registration-section">

    <el-breadcrumb :separator-icon="ArrowRight" class="article-list-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/login' }">會員登入</el-breadcrumb-item>
      <el-breadcrumb-item>註冊會員</el-breadcrumb-item>
    </el-breadcrumb>




    <div class="registration-container">
      <el-card class="registration-card">

        <h2 class="registration-title">會員註冊</h2>

        <el-form :model="form" :rules="rules" ref="formRef" label-position="top" class="registration-form">

          <el-form-item label="電子郵件" prop="email">
            <el-input v-model="form.email" type="email" />
          </el-form-item>

          <el-form-item label="密碼" prop="password">
            <el-input v-model="form.password" type="password" show-password />
          </el-form-item>

          <el-form-item label="二次密碼確認" prop="confirmPassword">
            <el-input v-model="form.confirmPassword" type="password" show-password />
          </el-form-item>

          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" />
          </el-form-item>

          <el-form-item label="院所" prop="department">
            <el-input v-model="form.department" />
          </el-form-item>

          <el-form-item label="職稱" prop="jobTitle">
            <el-input v-model="form.jobTitle" />
          </el-form-item>

          <el-form-item label="電話" prop="phone">
            <el-input v-model="form.phone" placeholder="09XX-XXX-XXX" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)" :loading=loadingStatus
              class="submit-button">註冊</el-button>
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
  password: '',
  confirmPassword: '',
  name: '',
  department: '',
  jobTitle: '',
  phone: ''
})

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value !== form.password) {
    callback(new Error("與密碼不一致"))
  } else {
    callback()
  }

}

//註冊function
const register = async () => {
  let res = await CSRrequest.post("member/register", {
    body: form
  })
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
  ],
  password: [
    {
      required: true,
      message: "密碼不能為空",
      trigger: 'blur'
    }
  ],
  confirmPassword: [{
    required: true,
    message: "二次密碼確認不能為空",
    trigger: 'blur'
  },
  {
    validator: validatePass2,
    trigger: 'blur'
  }
  ],
  name: [
    {
      required: true,
      message: '請輸入姓名',
      trigger: 'blur'
    }
  ],
  department: [
    {
      required: true,
      message: '請輸入院所',
      trigger: 'blur'
    }
  ],
  jobTitle: [
    {
      required: true,
      message: '請輸入職稱',
      trigger: 'blur'
    }
  ],
  phone: [
    { required: true, message: '請輸入行動電話', trigger: 'blur' },
    { pattern: /^09\d{2}-\d{3}-\d{3}$/, message: '請輸入有效的電話號碼', trigger: 'blur' }
  ]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      ElMessage.success("校驗合格，資料送出")
      loadingStatus.value = true
      await register()
      loadingStatus.value = false
      router.push("login")

    } else {
      ElMessage.error("校驗不合格")
    }
  })
}
</script>



<style scoped lang="scss">
.registration-section {
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


  .registration-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: white;
    margin: 2% 0;

    @media screen and (max-width:850px) {
      margin: 5% 0;
      min-height: auto;
    }

    .registration-card {
      width: 100%;
      max-width: 500px;
      border: 3px #C0E1E9 solid;
      border-radius: 25px;
      box-shadow: 0 4px 12px rgba(130, 211, 222, 0.1);

      @media screen and (max-width:481px) {
        width: 90%;
      }


      .registration-title {
        font-size: 1.3rem;
        letter-spacing: 0.3rem;
        color: #242B64;
        text-align: center;
        margin: 2% 0;
      }

      .registration-form {

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
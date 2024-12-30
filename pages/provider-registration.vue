<template>
  <div class="registration-container">
    <el-card class="registration-card">
      <template #header>
        <h2 class="registration-title">資料填寫</h2>
      </template>
      <el-form :model="form" :rules="rules" ref="formRef" label-position="top">
        <el-form-item label="電子郵件" prop="email">
          <el-input v-model="form.email" type="email" />
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
          <el-button type="primary" @click="submitForm(formRef)" class="submit-button">送出</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const formRef = ref<FormInstance>()
const tempMemberInofState = useTempMemberInfo()

let form = reactive({
  email: '',
  name: '',
  department: '',
  jobTitle: '',
  phone: ''
})

Object.assign(form, tempMemberInofState.value)


//更新Line 註冊者資料function
const register = async () => {
  let res = await CSRrequest.post("member/provider-register", {
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
      ElMessage.success("資料送出，請等待審核通過")
      await register()
      router.push("login")

    } else {
      ElMessage.error("校驗不合格")
    }
  })
}



</script>



<style scoped lang="scss">
.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
  margin: 2% 0;

  .registration-card {
    width: 100%;
    max-width: 500px;

    @media screen and (max-width:481px) {
      width: 90%;
    }

  }


  .registration-title {
    color: #6BC1CE;
    text-align: center;
    margin: 0;
  }

  .submit-button {
    width: 100%;
    background-color: #6BC1CE;
    border-color: #6BC1CE;
  }

  .submit-button:hover,
  .submit-button:focus {
    background-color: #5AAEBB;
    border-color: #5AAEBB;
  }

}
</style>
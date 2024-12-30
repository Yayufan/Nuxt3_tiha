<!--  -->
<template>


    <section class="login-section">

        <el-breadcrumb :separator-icon="ArrowRight" class="article-list-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item >會員登入</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="login-container">
            <el-card class="login-card">
                <template #header>
                    <h2 class="login-title">會員登入</h2>
                    <div class="additional-options">
                        <el-button text @click="register" class="login-options">加入會員</el-button>
                        <el-button text @click="forgotPassword" class="login-options">忘記密碼</el-button>
                        <el-button class="line-login-button" @click="accessUrlGen">
                            <!-- <span><img  src="@/assets/img/line-logo.svg" style="width: 15px;" ></span> -->
                            快速登入
                            <!-- <img src="@/assets/img/btn_login_base.png" alt="LINE" class="line-icon" />  -->
                        </el-button>
                    </div>
                </template>
                <el-form :model="loginInfo" :rules="loginRules" label-position="top" :hide-required-asterisk="true"
                    class>
                    <el-form-item prop="email" label="帳戶" class="form-item">
                        <el-input v-model="loginInfo.email" placeholder="請輸入電子郵件" :prefix-icon="Message" name="email" />
                    </el-form-item>
                    <el-tooltip :visible="isCapslock" content="大寫鎖定" placement="right">
                        <el-form-item prop="password" label="密碼" class="form-item">
                            <el-input v-model="loginInfo.password" type="password" placeholder="請輸入密碼"
                                @keyup="checkCapslock" @keyup.enter="handleLogin" :prefix-icon="Lock" show-password />
                        </el-form-item>
                    </el-tooltip>

                    <el-form-item>
                        <el-button :loading="loading" type="primary" native-type="submit" class="login-button"
                            @click.prevent="handleLogin">會員登入</el-button>
                    </el-form-item>


                </el-form>


            </el-card>
        </div>

    </section>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import { Message, Lock } from '@element-plus/icons-vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { ElLoading } from 'element-plus'
import { ArrowRight } from '@element-plus/icons-vue'


const isCapslock = ref(false); // 是否大寫鎖定
const loading = ref(false); // 按鈕loading
const route = useRoute()
const router = useRouter()

const tempMemberInofState = useTempMemberInfo()


const loginRules = reactive<FormRules>({
    email: [
        {
            required: true,
            trigger: "blur",
            message: "E-mail不可為空",

        },
        {
            type: "email",
            message: '請輸入正確的email格式',
            trigger: "blur",
        }
    ],
    password: [
        {
            required: true,
            trigger: "blur",
            message: "Password不可為空",
        },
        {
            min: 6,
            message: "最小長度為6",
            trigger: "blur",
        },
    ],

})

//loading動畫，這裡設置成異步的,這樣login function 就可以等待這個動畫結束才跳轉
const openFullScreen2 = () => {
    return new Promise<void>((resolve) => {
        const loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)',
        })
        setTimeout(() => {
            loading.close()
            resolve()
        }, 2000)
    })
}
//登入
const handleLogin = async () => {

    await openFullScreen2()

    loading.value = true
    let res = await CSRrequest.post("member/login", {
        body: loginInfo
    })
    loading.value = false

    if (res.data == null) {
        ElMessage.error("查無無此帳號,或是帳號密碼錯誤")
    }

    //判斷資料完整性，如果資料不完整，那就跳轉到補上資料的頁面
    if (res.data.name == null) {
        //跳轉到資料補充的位置
        tempMemberInofState.value = res.data
        router.push("provider-registration")
        return
    }


    //如果沒有token 代表他還沒審核通過
    if (res.data.token == null) {
        router.push("pending-review")
        return
    }

    //如果資料都完整那應該會得到完整的token資訊
    //將token 放進localStorage中, 傳輸資料時再將token 放進 header
    localStorage.setItem(res.data.token.tokenName, 'Bearer ' + res.data.token.tokenValue)

    ElMessage.success("登入成功")

    //跳轉到專業醫療文章
    router.push("/professional/1838825061494820866")

}

//跳轉至註冊
const register = () => {
    router.push("registration")
}

//跳轉至查詢密碼
const forgotPassword = () => {
    router.push("forget-password")
}


/**
 * 檢查輸入大小寫
 */
function checkCapslock(event: KeyboardEvent) {
    // 防止浏览器密碼自动填充时报错
    if (event instanceof KeyboardEvent) {
        isCapslock.value = event.getModifierState("CapsLock");
    }
}

// channel ID, 目前使用新川 Line Developer 內串接的頻道
let clientId = '2006384557'
// 回調url 必須跟 Line Developer裡面的 Line Login設定,設置的一樣
let redirectUri = 'http://localhost/login'

//頻道秘密
let channelSecret = 'd86af2d42fe54edd6bf07ac2e39a6aa8'


//創建每次state不同,且完整的url
const accessUrlGen = () => {

    //使用已經寫好的function,創建唯一的state
    let state = generateRandomString(16)

    //bot_prompt 可選 normal 和 aggressive
    let fullUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&bot_prompt=aggressive&state=${state}&scope=profile%20openid`

    //開啟導向Line的頁面
    window.location.href = fullUrl


}

//這邊設置一個隨機產生state值得function
const generateRandomString = (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

// 先獲取url上的參數，使用解構賦值並提供默認值來避免參數缺失時報錯
//之後把這個參數帶著POST訪問 https://api.line.me/oauth2/v2.1/token
const { error = null, error_description = null, state = null, code = "", friendship_status_changed = null } = route.query;

// console.log("Line Error: ", error)
// console.log("Line state: ", state)
// console.log("Line Error描述: ", error_description)
// console.log("Line code: ", code)
// console.log("Line 好友狀態變更: ", friendship_status_changed)

// 定義一個輔助函數來安全地獲取字符串值

//登入的資訊
let loginInfo = reactive<{
    provider: string | null,
    providerUserId: string | null,
    email: string | null,
    password: string | null
}>({
    provider: null,
    providerUserId: null,
    email: null,
    password: null
});


//當頁面掛載時才執行,這樣就能避免在Server端還會處理一次
onMounted(async () => {
    if (code != "" && code != null && code != undefined) {

        let res = await $fetch('https://api.line.me/oauth2/v2.1/token', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            //這個是為了 Contnet-Type 設定成表單傳送, 所以這邊要用URLSearchParams包起來
            body: new URLSearchParams({
                grant_type: "authorization_code",
                redirect_uri: redirectUri,
                client_id: clientId,
                client_secret: channelSecret,
                code: code?.toString(),
            }).toString()
        }).catch((err) => {
            console.log("錯誤信息: ", err)
        })


        if (res != undefined) {
            let userInfoRes = await $fetch('https://api.line.me/v2/profile', {
                method: "get",
                headers: {
                    'Authorization': 'Bearer ' + (res as { access_token: string }).access_token
                },
            }) as { userId: string }

            let { userId } = userInfoRes

            //填充登入資訊
            loginInfo.provider = "Line"
            loginInfo.providerUserId = userId

            //獲取userId後觸發登入
            handleLogin()


        }

    }
})


</script>

<style scoped lang="scss">
.login-section {
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


    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        background-color: #fff; //#f4f6f6

        @media screen and (max-width:850px) {
            margin-top: 5%;
            height: auto;
        }

        .login-card {
            width: 40%;
            border: 2px #C0E1E9 solid;
            border-radius: 20px;
            box-shadow: 0 4px 12px rgba(130, 211, 222, 0.1);
            /* 柔和的阴影，使用主色调 */

            @media screen and (max-width:850px) {
                width: 70%;
            }

            /** 重寫el-card header template */
            :deep(.el-card__header) {
                border-bottom: none;
            }

            /** 重寫el-card body template */
            :deep(.el-card__body) {
                padding: 0 20px 20px 20px;
            }


            .login-title {
                font-size: 1.3rem;
                text-align: center;
                color: #242B64;
                font-weight: bold;
                letter-spacing: 0.3rem;
            }



            .additional-options {
                margin-top: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #C3E2EA;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                :deep(.el-button) {
                    padding: 0;
                }

                :deep(.el-button+.el-button) {
                    margin-left: 0 !important;
                }

                .login-options {
                    font-weight: bold;
                    color: #242B64;
                    letter-spacing: 0.1rem;
                }


                .line-login-button {
                    width: 100%;
                    letter-spacing: 0.1rem;
                    margin-top: 10px;
                    padding: 20px 0;
                    background-color: #00B900;
                    color: white;

                    ::before {
                        content: url("@/assets/img/line-logo.svg");
                        width: 1rem;
                        position: relative;
                        top: 2px;
                        padding: 2px;

                    }

                }

                .line-icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 8px;
                }

            }

            .form-item {
                color: #242B64;
                font-weight: bold;
            }

            .login-button {
                width: 100%;
                background-color: #C3E2EA;
                border-color: #C3E2EA;
                color: #242B64;
                font-weight: bold;
                letter-spacing: 0.3rem;
            }

            .login-button:hover,
            .login-button:focus {
                color: #ffffff;
            }



        }

    }
}
</style>

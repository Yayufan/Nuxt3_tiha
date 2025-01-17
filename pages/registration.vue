    <template>
        <div>
            <Breadcrumbs firstRoute="加入會員" secoundRoute="會員註冊"></Breadcrumbs>
            <div class="common-section">
                <h1 class="common-title">加入會員</h1>

                <div class="content-box">
                    <p class="title">須知事項</p>
                    <div class="statement">
                        <p>
                            親愛的朋友您好，歡迎您一起加入腸保健康，一起攜手打造一個溫暖、包容的社群。
                            無論您是自身受影響還是關心他人的支持者，您的參與將是我們團體的寶貴貢獻，請詳閱以下說明事項及流程：

                        <ul>
                            <li>【入會辦法】年滿十八歲贊同本會宗旨之投入熱忱者 ，填妥註冊資料，經理事會審查通過，
                                並繳納會費後即為個人會員。
                            </li>

                            <li>
                                【會費】NT$200 （入會費$100、常年會費$100）
                            </li>
                            <li>
                                【繳費方式】郵政劃撥繳費（恕不接受其他方式繳納，敬請見諒）。
                            </li>
                        </ul>
                        </p>
                    </div>
                </div>

                <div class="form-section">
                    <p class="notice">(以下欄位有<span>*</span>標示者為必填)</p>
                    <el-form ref="ruleFormRef" class="form" :model="form" :rules="formRules" label-position="top">
                        <el-form-item label="申請人 :" label-width="270" prop="name" class="form-item1">
                            <el-input v-model="form.name" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="出生日期：" label-width="270" prop="birthday" class="form-item1">
                            <el-date-picker v-model="form.birthday" type="date"
                                value-format="YYYY-MM-DD"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="國民身分證統一編號（居留證號）：" prop="idCard" label-width="270" class="form-item1">
                            <el-input v-model="form.idCard" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="生理性別" label-width="270" prop="gender" class="form-item1">
                            <el-radio-group v-model="form.gender">
                                <el-radio label="男" value="男"></el-radio>
                                <el-radio label="女" value="女"></el-radio>
                                <el-radio label="其他，請說明:" value="其他"></el-radio>
                            </el-radio-group>
                            <el-input class="sex-other" v-if="form.gender === '其他'" v-model="form.genderOther"
                                width="150">

                            </el-input>
                        </el-form-item>
                        <el-form-item label="服務單位" label-width="270" prop="serviceUnit" class="form-item1">
                            <el-input v-model="form.department" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="職稱" label-width="270" prop="jobTitle" class="form-item1">
                            <el-input v-model="form.jobTitle" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="聯絡地址：" label-width="270" prop="address" class="form-item1 address">
                            <el-input v-model="form.contactAddress" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="聯絡電話：" label-width="270" prop="phone" class="form-item1">
                            <el-input v-model="form.phone" type="tel"></el-input>
                        </el-form-item>
                        <el-form-item label="E-Mail：" label-width="270" prop="email" class="form-item1">
                            <el-input class="email-input" v-model="form.email" type="email"></el-input>
                        </el-form-item>

                        <div class="captcha-box">
                            <client-only>
                                <img v-if="captchaImg" :src="captchaImg" @click="refreshCaptcha" alt="點擊刷新驗證碼"
                                    class="captcha-image" />
                            </client-only>
                            <el-form-item prop="verificationCode" class="captcha-label">
                                <el-input v-model="form.verificationCode" type="text"></el-input>
                            </el-form-item>
                        </div>
                        <!-- <div class="instructions-div">
                        <el-form-item>
                            <el-checkbox v-model="approveInstructions" class="instructions"><u
                                    @click="drawer = true">我已閱讀並同意說明事項</u></el-checkbox>
                        </el-form-item>
                    </div> -->
                        <div class="submit-section">
                            <el-form-item>
                                <el-button class="submit" @click="submitForm(ruleFormRef)">送出資料</el-button>
                                <el-button class="reset" @click="resetForm(ruleFormRef)">重新填寫</el-button>
                            </el-form-item>
                        </div>
                    </el-form>
                </div>

            </div>

        </div>
    </template>
<script lang="ts" setup>
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import type { FormInstance, FormRules } from 'element-plus'

const approveInstructions = ref(false)
const drawer = ref(false)
const isReadInstructions = ref(false)
const ruleFormRef = ref<FormInstance>()
const formRules = reactive<FormRules<form>>({
    name: [
        {
            required: true,
            message: '請輸入簽署人',
            trigger: 'blur'
        }
    ],
    idCard: [
        {
            required: true,
            message: '請輸入國民身分證統一編號',
            trigger: 'blur'
        },
        {
            validator: (
                rule: unknown,
                value: string,
                callback: (error?: Error) => void
            ) => {
                const { valid, message } = checkResidentCertificate(value);
                if (!valid) callback(new Error(message));
                else callback();
            },
            trigger: "blur",
        },
    ],
    birthday: [
        {

            required: true,
            message: '請輸入出生日期',
            trigger: 'blur'
        },
        {
            type: 'date',
            message: '請依照正確格式輸入: yyyy-mm-dd',
            trigger: 'blur'
        },
        {
            validator: (rule, value, callback) => {
                const today = new Date();
                const birthDate = new Date(value);
                const age = ref(today.getFullYear() - birthDate.getFullYear())
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age.value--;
                }
                if (age.value < 18) {
                    callback(new Error('申請人必須年滿18歲'));
                } else {
                    callback();
                }
            },
            trigger: 'blur'
        }
    ],
    email: [
        {
            type: 'email',
            required: true,
            message: '請輸入正確的電子郵件',
            trigger: 'blur'
        }
    ],
    phone: [
        {
            required: true,
            message: '請輸入手機號碼',
            trigger: 'blur'
        }
    ],
    gender: [
        { required: true, message: '請選擇生理性別', trigger: 'change' },
        {
            validator: (rule, value, callback) => {
                if (value === '其他' && !form.genderOther) {
                    callback(new Error('請填寫其他性別說明'));
                } else {
                    callback();
                }
            },
            trigger: 'change',
        },
    ],
    verificationCode: [
        {
            required: true,
            message: '請輸入驗證碼',
            trigger: 'blur',
        },
    ],

})

interface form {
    name: string,
    birthday: string,
    idCard: string,
    gender: string,
    genderOther?: string,
    contactNumber: string,
    phone: string,
    department: string,
    jobTitle: string,
    email: string,
    contactAddress: string,
    verificationKey: string,
    verificationCode: string
}

const form = reactive<form>({
    name: '',
    idCard: '',
    birthday: '',
    gender: '',
    genderOther: '',
    contactNumber: '',
    phone: '',
    department: '',
    jobTitle: '',
    email: '',
    contactAddress: '',
    verificationKey: '',
    verificationCode: ''
})



watch(() => approveInstructions.value, (newVal) => {
    if (newVal && !isReadInstructions.value) {
        drawer.value = true;
    }
})

watch(() => drawer.value, (newVal) => {
    if (newVal) {
        isReadInstructions.value = true;
    }
})

// -------------------------------------------------------------------

/**身分證校驗函數 */
// 定义校验结果类型
interface CheckResult {
    valid: boolean;
    message: string;
}

const codeMap: Record<string, number> = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    I: 34,
    J: 18,
    K: 19,
    L: 20,
    M: 21,
    N: 22,
    O: 35,
    P: 23,
    Q: 24,
    R: 25,
    S: 26,
    T: 27,
    U: 28,
    V: 29,
    W: 32,
    X: 30,
    Y: 31,
    Z: 33,
};

function checkCkDigit(code: string): CheckResult {
    if (!/^[A-Z][0-9]{9}$/.test(code)) {
        return { valid: false, message: "身份證格式不正確" };
    }



    const placeCode = codeMap[code[0]];
    if (!placeCode) {
        return { valid: false, message: "首碼無效" };
    }

    const bodyCode = code.substring(1, 9);
    const lastCode = code[9];

    const calHead = (num: number): number =>
        Math.floor(num / 10) * 1 + (num % 10) * 9;

    const calBody = (code: string): number => {
        let sum = 0;
        for (let i = 0; i < code.length; i++) {
            sum += parseInt(code[i]) * (8 - i);
        }
        return sum;
    };

    const idSum =
        calHead(placeCode) + calBody(bodyCode) + parseInt(lastCode) * 1;
    const isValid = idSum % 10 === 0;

    return isValid
        ? { valid: true, message: "合法" }
        : { valid: false, message: "身分證號不合法" };
}

// 舊版居留證號驗證邏輯
const checkOldResidentCertificate = (code: string): CheckResult => {
    if (!/^[A-Z][A-D][0-9]{8}$/.test(code)) {
        return { valid: false, message: '舊版居留證格式不正確' };
    }

    const placeCode = codeMap[code[0]];
    const genderCode = codeMap[code[1]] % 10; // 取個位數;
    // console.log("舊版校驗性別碼為: ", genderCode)
    const bodyCode = code.substring(2, 9);
    // console.log("舊版校驗區域碼為 ", bodyCode)

    const lastCode = code[9];

    if (!placeCode || genderCode === undefined) {
        return { valid: false, message: '首碼或性別碼無效' };
    }

    // 計算num 除以10的商,並向下取整,獲取10位數字
    // 例如，num = 23，则 Math.floor(23 / 10) 为 2。
    const calHead = (num: number): number => {
        // console.log("舊版校驗地區值 ", (Math.floor(num / 10) * 1) + ((num % 10) * 9))
        return (Math.floor(num / 10) * 1) + ((num % 10) * 9);
    }


    const calBody = (code: string): number => {
        let sum = 0;
        // console.log("舊版body code長度", code.length)
        for (let i = 0; i < code.length; i++) {
            // console.log("當前code號 ", code[i])
            sum += parseInt(code[i]) * (7 - i);
        }
        return sum;
    };

    const idSum =
        calHead(placeCode) + genderCode * 8 + calBody(bodyCode) + parseInt(lastCode) * 1;

    console.log("舊版居留證號值", idSum)

    const isValid = idSum % 10 === 0;

    return isValid
        ? { valid: true, message: '合法' }
        : { valid: false, message: '舊版居留證號不合法' };
};

// 新版居留證驗證邏輯
const checkNewResidentCertificate = (code: string): CheckResult => {
    if (!/^[A-Z][89][0-9]{8}$/.test(code)) {
        return { valid: false, message: '新版居留證格式不正確' };
    }

    const placeCode = codeMap[code[0]];
    const bodyCode = code.substring(1, 9);
    console.log("新版body code ", bodyCode)
    const lastCode = code[9];

    if (!placeCode === undefined) {
        return { valid: false, message: '首碼無效' };
    }

    const calHead = (num: number): number =>
        Math.floor(num / 10) * 1 + (num % 10) * 9;

    const calBody = (code: string): number => {
        let sum = 0;
        for (let i = 0; i < code.length; i++) {
            sum += parseInt(code[i]) * (8 - i);
        }
        return sum;
    };

    const idSum =
        calHead(placeCode) + calBody(bodyCode) + parseInt(lastCode) * 1;

    console.log("新版居留證號值", idSum)

    const isValid = idSum % 10 === 0;

    return isValid
        ? { valid: true, message: '合法' }
        : { valid: false, message: '新版居留證號不合法' };
};

// 居留證驗證邏輯（舊版或新版）
const checkResidentCertificate = (code: string): CheckResult => {
    const oldResult = checkOldResidentCertificate(code);
    const newResult = checkNewResidentCertificate(code);
    const icCaedResult = checkCkDigit(code);

    if (oldResult.valid || newResult.valid || icCaedResult.valid) {
        return { valid: true, message: '合法' };
    } else {
        return { valid: false, message: '身分證 （居留證號）不合法' };
    }
};
// -------------------------------------------------------------------

const insertMemberForm = async () => {
    let res = await CSRrequest.post("member", {
        body: form
    })
    return res

}

const ScreenLoading = () => {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    setTimeout(() => {
        loading.close()
    }, 2000)
}

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            ScreenLoading()
            let res = await insertMemberForm()
            if (res.code != 200) {
                ElMessage.error(res.msg)
                return
            }
            ElMessage.success("註冊成功")
            resetForm(ruleFormRef.value)
            form.contactAddress = ''
            form.department = ''
            refreshCaptcha()

        } else {
            ElMessage.error("請填寫完整的資訊")
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

/** 驗證碼，僅在客户端执行 */
// 定義驗證碼圖片
const captchaImg = ref('')

// 只在客户端调用
const refreshCaptcha = async () => {
    try {
        const response = await CSRrequest.get('member/captcha',)

        console.log('響應為:', response)

        captchaImg.value = response.data.image
        form.verificationKey = response.data.key

        console.log("驗證碼key為:", form.verificationKey)


    } catch (error) {
        console.error('刷新驗證碼失敗', error)
    }
}

onMounted(() => {
    refreshCaptcha()
})

</script>

<style lang="scss" scoped>
.common-section {
    width: $common-section-width;
    margin: $common-section-margin;
    font-family: $common-section-font-family;

    @media screen and (max-width:481px) {
        :deep(.el-drawer) {
            width: 80% !important;
        }

    }

    .common-title {
        color: $main-color;
        font-weight: $common-title-font-weight;
        font-size: $common-title-font-size;
        letter-spacing: $common-title-letter-spacing;
        margin-left: 10%;
        margin-bottom: 3%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

    }

    .content-box {
        margin-left: 10%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

        .title {
            background-color: $main-color;
            color: white;
            // width: 10vw;
            display: inline-block;
            text-align: center;
            padding: 5px 15px;
            letter-spacing: 0.1rem;
            border-radius: 35px;
        }

        .statement {
            color: $main-content-color;
            max-width: 80%;
            margin: 1% 0 2rem 2%;
            font-size: 1rem;

            @media screen and (max-width:850px) {
                max-width: 100%;
                margin: 1% 0 0 0;
                font-size: 0.9rem;

            }

            p {
                @media screen and (max-width:850px) {
                    display: inline;

                }
            }
        }

        .donation-form {
            color: $main-color;
            padding: 0 5px;
            font-size: 1.3rem;

            @media screen and (max-width:850px) {
                font-size: 1rem;
            }
        }

        .cancel-form {
            color: #F49E19;
            padding: 0 5px;
            font-size: 1.3rem;

            @media screen and (max-width:850px) {
                font-size: 1rem;
            }
        }
    }

    //表單區塊
    .form-section {
        background-color: #F2F2F1;
        // padding: 1% 10%;
        padding: 1% 11%;

        // 提醒標示
        .notice {
            color: $main-content-color;
            margin: 3% 0 3% 5%;

            span {
                color: red;
            }
        }

        .form {

            .form-item1,
            .legal-representative-ID {
                :deep(.el-form-item__label) {
                    font-size: 1.3rem;
                    color: black;

                    @media screen and (max-width:850px) {
                        font-size: 0.9rem;
                        width: 40% !important;

                    }
                }

                .el-radio {
                    margin-right: 1vw;

                    :deep(.el-radio__label) {
                        font-size: 1.3rem;
                        color: black;

                        @media screen and (max-width:850px) {
                            font-size: 0.9rem;
                            width: 60% !important;

                        }
                    }
                }

                .sex-other {
                    width: 10%;

                    @media screen and (max-width:850px) {
                        width: 60%;

                    }
                }
            }



            .email {
                :deep(.el-form-item__label) {
                    margin-right: 0.3rem;

                    @media screen and (max-width:850px) {
                        margin-right: 0;
                        font-size: 0.9rem;
                        width: 39% !important;

                    }
                }
            }

            .address {
                margin-bottom: 5vw;
            }

            .unnecessary {
                padding-left: 0.9rem;

                :deep(.el-form-item__label) {
                    font-size: 1.3rem;
                    color: black;

                    @media screen and (max-width:850px) {
                        font-size: 0.9rem;
                        // width: 65%;
                        width: 70%;

                    }
                }
            }

            //法定代理人身分證
            .legal-representative-ID {
                margin-bottom: 3vw;

                :deep(.el-form-item__label) {
                    @media screen and (max-width:850px) {
                        font-size: 0.9rem;
                        width: 16rem !important;
                    }
                }
            }

            .consent-card {
                :deep(.el-form-item__label) {
                    @media screen and (max-width:850px) {
                        font-size: 0.9rem;
                        width: 12rem !important;
                    }
                }
            }

            :deep(.el-input) {
                width: 100%;
            }

            .text-area {
                display: flex;

                @media screen and (max-width:850px) {
                    display: block;
                }

                .reason,
                .word-to-family {
                    display: block;
                    width: 50%;

                    @media screen and (max-width:850px) {
                        width: 100%;

                    }

                    :deep(.el-textarea__inner) {
                        border-radius: 25px;
                    }

                }
            }

            .donate-organs {
                display: block;
                max-width: 100%;

                .el-checkbox-group {
                    width: 100%;

                    .checkbox-div {
                        display: flex;
                        justify-content: space-between;
                    }
                }

                .el-checkbox {
                    margin: 1rem 0 0 0;
                    max-width: 100%;
                    min-width: 30%;

                    @media screen and (max-width:850px) {
                        margin-right: 0;
                    }
                }

                :deep(.el-checkbox__label) {
                    font-size: 1.3rem;
                    color: $main-content-color;

                    @media screen and (max-width:850px) {
                        font-size: 0.9rem;
                        width: 60% !important;
                        margin-right: 0.3rem;

                    }
                }
            }

            .instructions-div {
                margin-top: 3rem;
                display: flex;
                justify-content: center;

                :deep(.el-checkbox__label) {
                    color: $main-color;
                    font-size: 1.3rem;
                }

                :deep(.el-checkbox__inner) {
                    border-radius: 25px;
                }
            }

            .submit-section {
                display: flex;
                justify-content: center;

                .el-button {
                    border-radius: 25px;
                    color: white;
                    font-size: 1rem;
                    padding: 0 2rem;
                }

                .submit {
                    background-color: #E9B2B1;
                }

                .reset {
                    background-color: #F49E19;
                }
            }

            .captcha-box {
                display: flex;
                justify-content: center;
                align-items: flex-end;
                margin-top: 1rem;
                margin-bottom: 1.3rem;

                .captcha-label {
                    margin-bottom: 0;
                    margin-left: 20px;
                }

            }
        }
    }

    .drawer-header {
        color: $main-color;
        font-size: 1.3rem;
        margin: 1rem 0;
    }

    .drawer-content-box {
        margin: 0 1rem;
        // color: black;

        .notice {
            color: $main-color;
            font-weight: bold;
            margin-bottom: 1rem;

            span {
                color: red;
            }
        }

        .instructions-title {
            color: $main-content-color;
            margin: 1rem 0;
        }

    }
}
</style>
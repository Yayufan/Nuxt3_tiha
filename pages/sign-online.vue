<template>
    <div>
        <Breadcrumbs firstRoute="簽署器捐" secoundRoute="線上簽署"></Breadcrumbs>
        <div class="common-section">
            <h1 class="common-title">線上簽署</h1>

            <div class="content-box">
                <p class="title">器官捐贈同意書</p>
                <div class="statement">
                    <p>本人瞭解醫療有其極限，而愛心可以延續，經閱讀，知悉後列說明後，願意簽署
                        <a class="donation-form" href="/files/organs-donate-consent.pdf" target="_blank">
                            <u>【器官捐贈同意書】</u>
                        </a>，
                    </p>
                    <p>並將此意願註記於健保卡，於生命之盡頭，捐贈可用器官，讓其他需要的病人能因此而獲得重生機會。</p>
                    <p>如須撤銷器捐同意，請下載
                        <a class="cancel-form" href="/files/cancel-organs-donate.pdf" target="_blank">
                            <u>【撤銷器捐同意書】</u>
                        </a>填寫後由寄正本到本會。
                    </p>
                </div>
            </div>

            <div class="form-section">
                <p class="notice">(以下欄位有<span>*</span>標示者為必填)</p>
                <el-form ref="ruleFormRef" class="form" :model="form" :rules="formRules" label-position="left">
                    <el-form-item label="簽署人：" label-width="270" prop="name" class="form-item1">
                        <el-input v-model="form.name" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="國民身分證統一編號：" prop="idCard" label-width="270" class="form-item1">
                        <el-input v-model="form.idCard" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="出生日期：" label-width="270" prop="birthday" class="form-item1">
                        <el-date-picker v-model="form.birthday" type="date" value-format="YYYY-MM-DD"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="連絡電話：" label-width="270" prop="contactNumber" class="form-item1">
                        <el-input v-model="form.contactNumber" type="tel"></el-input>
                    </el-form-item>
                    <el-form-item label="手機號碼：" label-width="270" prop="phoneNumber" class="form-item1">
                        <el-input v-model="form.phoneNumber" type="tel"></el-input>
                    </el-form-item>
                    <el-form-item label="E-Mail：" label-width="250" prop="email" class="unnecessary email">
                        <el-input class="email-input" v-model="form.email" type="email"></el-input>
                    </el-form-item>
                    <el-form-item label="聯絡地址：" label-width="270" prop="address" class="form-item1 address">
                        <el-input v-model="form.address" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="法定代理人姓名：" label-width="270" prop="legalRepresentativeName" class="form-item1">
                        <el-input v-model="form.legalRepresentativeName" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="法定代理人國民身分證統一編號：" class="legal-representative-ID"
                        prop="legalRepresentativeIdCard">
                        <el-input v-model="form.legalRepresentativeIdCard" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="本人獲得器官捐贈同意卡：" class="unnecessary form-item1 consent-card">
                        <el-radio-group v-model="form.consentCard">
                            <el-radio label="希望" value="1"></el-radio>
                            <el-radio label="不希望" value="-1"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div class="text-area">
                        <el-form-item class="reason unnecessary" label="簽署的原因：" label-width="auto">
                            <el-input v-model="form.reason" type="textarea" rows="6"></el-input>
                        </el-form-item>
                        <el-form-item class="word-to-family unnecessary" label="給家人的話：" label-width="auto">
                            <el-input v-model="form.wordToFamily" type="textarea" rows="6"></el-input>
                        </el-form-item>
                    </div>
                    <el-form-item class="donate-organs unnecessary" label="願意捐贈器官/組織項目(可複選)" prop="donateOrgans">
                        <el-checkbox-group v-model="form.donateOrgans">
                            <div class="checkbox-div">
                                <el-checkbox label="全部捐贈" value="all"></el-checkbox>
                                <el-checkbox label="肺臟" value="lung"></el-checkbox>
                                <el-checkbox label="胰臟" value="pancreas"></el-checkbox>
                                <el-checkbox label="小腸" value="smallIntestine"></el-checkbox>
                            </div>
                            <div class="checkbox-div">
                                <el-checkbox label="皮膚" value="skin"></el-checkbox>
                                <el-checkbox label="心瓣膜" value="heartValve"></el-checkbox>
                                <el-checkbox label="心臟" value="heart"></el-checkbox>
                                <el-checkbox label="肝臟" value="liver"></el-checkbox>
                            </div>
                            <div class="checkbox-div">
                                <el-checkbox label="腎臟" value="kidney"></el-checkbox>
                                <el-checkbox label="眼角膜" value="cornea"></el-checkbox>
                                <el-checkbox label="骨骼" value="bones"></el-checkbox>
                                <el-checkbox label="血管" value="bloodVessels"></el-checkbox>
                            </div>
                        </el-checkbox-group>
                    </el-form-item>
                    <div class="instructions-div">
                        <el-form-item>
                            <el-checkbox v-model="approveInstructions" class="instructions"><u
                                    @click="drawer = true">我已閱讀並同意說明事項</u></el-checkbox>
                        </el-form-item>
                    </div>
                    <div class="submit-section">
                        <el-form-item>
                            <el-button class="submit" @click="submitForm(ruleFormRef)">送出資料</el-button>
                            <el-button class="reset" @click="resetForm(ruleFormRef)">重新填寫</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
            <el-drawer v-model="drawer" direction="rtl" size="30%">
                <template #header>
                    <h4 class="drawer-header">說明事項</h4>
                </template>
                <template #default>
                    <div class="drawer-content-box">
                        <p class="notice">
                            <span>★</span>提醒您，線上送出資料後，請務必<u>列印同意書</u>，簽名後郵寄至本會，後續辦理健保IC卡登錄，才算完成器捐意願預立。如不便列印，請來信或致電告知姓名、收件地址，由本會郵寄同意書。
                        </p>
                        <p>說明事項：</p>
                        <p class="instructions-title">
                            一、依人體器官移植條例之規定，器官捐贈必須為無償之行為，且器官之摘取，應於病人之診治醫師判定死亡後為之（含腦死判定）。如病人為非病死或疑似為非病死者，必須於依法相驗完畢後，且經檢察官認無繼續勘驗之必要後，才能施行。
                        </p>

                        <p class="instructions-title">二、另依人體器官移植條例第六條之規定，醫師自往生者遺體摘取器官以供移植，須符合下列規定之一：


                        <p> 　（一）往生者生前以書面（如本同意書）或遺囑同意。
                        </p>
                        <p> 　（二）往生者最近親屬以書面同意。</p>
                        </p>

                        <p class="instructions-title">
                            三、您簽署的器官捐贈同意書，將依人體器官移植條例第六條規定，加註於健保卡並掃描存檔於「衛生福利部安寧療護及器官捐贈意願資訊系統」；如醫院、醫師遇有病人經診斷其病情於近期內進行至死亡已不可避免，且該病人無法清楚表達意識之情況下，將以此作為決定器官捐贈之依循，並可讓家屬充分瞭解病人生前之意願。醫院、醫師絕不會因知悉此捐贈意願而不施予必要治療。
                        </p>
                        <p class="instructions-title"> 四、捐贈者如患無法控制的感染性疾病，如庫賈氏病（Creutzfeldt-Jakob
                            Disease，CJD）…等等，為避免因器官移植而傳染給受贈者，醫院、醫師得不接受病人之器官捐贈。
                        </p>
                        <p class="instructions-title">
                            五、您所表達之器官捐贈意願，可隨時查詢或撤回。如欲查詢或撤回該意願，可聯絡「衛生福利部安寧療護及器官捐贈意願資料處理小組」單位協助處理，電話：02-2393-3298。
                        </p>
                        <p class="instructions-title"> 六、本資料僅供器官捐贈意願表達使用，將依個人資料保護法，善盡保密之責任。
                        </p>
                    </div>
                </template>

            </el-drawer>
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
        }
    ],
    birthday: [
        {

            required: true,
            message: '請輸入出生日期',
            trigger: 'blur'
        },
        {
            type: 'date',
            message: '請依照正確格是輸入: yyyy-mm-dd',
            trigger: 'blur'
        }
    ],
    contactNumber: [
        {
            required: true,
            message: '請輸入連絡電話',
            trigger: 'blur'
        }
    ],
    phoneNumber: [
        {
            required: true,
            message: '請輸入手機號碼',
            trigger: 'blur'
        }
    ],
    address: [
        {
            required: true,
            message: '請輸入聯絡地址',
            trigger: 'blur'
        }
    ],
    legalRepresentativeName: [
        {
            required: true,
            message: '請輸入法定代理人姓名',
            trigger: 'blur'
        }
    ],
    legalRepresentativeIdCard: [
        {
            required: true,
            message: '請輸入法定代理人國民身分證統一編號'
            , trigger: 'blur'
        }
    ],
    donateOrgans: [
        {
            type: 'array',
            required: true,
            message: '請至少勾選一個捐贈項目',
            trigger: 'change',
        },
    ],

})

interface form {
    name: string,
    idCard: string,
    birthday: string,
    contactNumber: string,
    phoneNumber: string,
    email: string,
    address: string,
    legalRepresentativeName: string,
    legalRepresentativeIdCard: string,
    consentCard: string,
    reason: string,
    wordToFamily: string,
    donateOrgans: string[]
}

const form = reactive<form>({
    name: '',
    idCard: '',
    birthday: '',
    contactNumber: '',
    phoneNumber: '',
    email: '',
    address: '',
    legalRepresentativeName: '',
    legalRepresentativeIdCard: '',
    consentCard: '-1',
    reason: '',
    wordToFamily: '',
    donateOrgans: ["lung", "skin", "smallIntestine"]
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

const insertConsentForm = async () => {
    let res = await CSRrequest.post("organ-donation-consent", {
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
            if (approveInstructions.value) {
                // console.log('submit!', form)
                ScreenLoading()
                let res = await insertConsentForm()
                if (res.code != 200) {
                    ElMessage.error(res.msg)
                    return
                }
                ElMessage.success("上傳成功")
                resetForm(ruleFormRef.value)

            } else {
                ElMessage.error('請先閱讀並同意說明事項')
            }
        } else {
            ElMessage.error("請填寫完整的資訊")
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    form.consentCard = '-1'
    form.donateOrgans = []
    console.log(form);
}


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
            margin: 1% 0 2rem 10%;
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
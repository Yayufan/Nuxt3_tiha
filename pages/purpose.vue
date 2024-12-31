<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="加入我們" secoundRoute="宗旨任務"></Breadcrumbs>

        <section class="common-section">



            <h1 class="common-title">宗旨任務</h1>

            <div class="content-box">

                <article class="paragraph purpose-box">
                    <h2 class="sub-title">宗旨</h2>
                    <p class="content">
                        為了全國與腸道疾病及發炎性腸道疾病搏鬥的病友們提供支持、資源和共享經驗的平台，
                        <br>
                        並提供病友了解發炎性腸道疾病及腸道疾病的相關知識，並促進病友之間的交流與互助為宗旨。
                        <br>
                    </p>
                </article>


                <article class="paragraph mission-box">
                    <h2 class="sub-title">任務</h2>
                    <ol class="content">
                        <li>教育與資訊傳播：提供最新的疾病相關資訊和治療方法，以及舉辦教育講座和工作坊等。</li>
                        <li>病友支持：為患有腸道疾病和發炎性腸道疾病的患者及其家屬提供互助平台，分享經驗和資訊。</li>
                        <li>協助病友提升生活品質：提供飲食和營養建議，以及組織康復和運動活動等。</li>
                        <li>資源整合：整合各方資源，為病友提供全面支持。</li>
                        <li>提供就醫指引和建議：協助病友獲得適當的醫療資源，提供就醫指引和建議。</li>
                    </ol>
                </article>

                <!-- <article class="paragraph ">
                    <h2 class="sub-title">組織架構</h2>
                    <div class="content organizational-structure-box ">
                        <img src="@/assets/img/organizational-chart.png">
                    </div>
                </article> -->

                <!-- <article class="paragraph ">
                    <h2 class="sub-title">歷屆理監事</h2>
                    <div class=" supervisors-box ">

                        <div class="supervisors-item" v-for="(item, index) in supervisorsList" :key="index">
                            <p class="supervisors-session"> {{ item.session }} </p>
                            <p class="supervisors-term-of-office">({{ item.termOfOffice }})</p>

                            <div class="supervisors-info">
                                <div class="supervisors-info-label">理事長</div>：
                                <div class="supervisors-info-content">{{ item.chairman }}</div>
                            </div>

                            <div class="supervisors-info">
                                <div class="supervisors-info-label">常務理事</div>：
                                <div class="supervisors-info-content">{{ item.executiveDirector }}</div>
                            </div>

                            <div class="supervisors-info">
                                <div class="supervisors-info-label">理事</div>：
                                <div class="supervisors-info-content">{{ item.director }}</div>
                            </div>

                            <div class="supervisors-info">
                                <div class="supervisors-info-label">常務監事</div>：
                                <div class="supervisors-info-content">{{ item.executiveSupervisor }}</div>
                            </div>

                            <div class="supervisors-info">
                                <div class="supervisors-info-label">監事</div>：
                                <div class="supervisors-info-content">{{ item.supervisor }}</div>
                            </div>

                        </div>
                    </div>

                    <div class="supervisors-more-box">
                        <button v-if="!showFullList" class="supervisors-more-btn" @click="getOtherList">查看更多</button>
                        <button v-else class="supervisors-more-btn" @click="getOtherList"> 收起更多 </button>
                    </div>

                </article> -->

                <!-- <article class="paragraph ">
                    <h2 class="sub-title">協會章程</h2>
                    <div class="content regulation-box">
                        <a class="download-link" href="/files/regulation_1071005.pdf"
                            target="_blank">社團法人章程-1071005修正版.pdf</a>
                    </div>

                </article> -->

            </div>

        </section>
    </div>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

let showFullList = ref(false)

// 定義 Supervisor 類型
interface Supervisor {
    session: string;
    termOfOffice: string;
    chairman: string;
    executiveDirector: string;
    director: string;
    executiveSupervisor: string;
    supervisor: string;
}

//一開始預設只有四屆
let initialSupervisorsList = reactive<Supervisor[]>([
    {
        session: '第一屆',
        termOfOffice: '82.8.27~85.9.6',
        chairman: '葉高芳',
        executiveDirector: '周天瑞、黃明義、魏崢、蘇宜三',
        director: '賴明坤、連榮達、朱樹勳、林孝義、易長筠、蘇培人、陳武宗、嚴道、周昌德、秦燕、孫鉞',
        executiveSupervisor: '鄭敏朗',
        supervisor: '黃俊雄、李伯皇、詹德順、江易雄'
    },
    {
        session: '第二屆',
        termOfOffice: '85.9.6~88.9.11',
        chairman: '魏崢',
        executiveDirector: '葉高芳、嚴道、黃桂福、黃明義',
        director: '賴明坤、蘇培人、林孝義、朱樹勳、孫鉞、連榮達、江淇松、周昌德、周天瑞、陳武宗',
        executiveSupervisor: '陳淑麗',
        supervisor: '謝輝和、鄭敏朗、柯文哲、陳庵君'
    },
    {
        session: '第三屆',
        termOfOffice: '88.9.11~91.9.19',
        chairman: '賴明坤',
        executiveDirector: '魏崢、嚴道、黃明義、 連榮達',
        director: '鄭隆賓、蘇培人、周迺寬、朱樹勳、莫等卿、張忠毅、楊美都、周昌德、江淇松、陳豐仁、周天瑞、黃桂福、林孝義、高平通、陳武宗、侯靜蘭',
        executiveSupervisor: '陳淑麗',
        supervisor: '謝輝和、吳志雄、柯文哲、邱虛谷、鄭敏朗、李玉蓉'
    },

])

//加載後的剩餘理事會名單
let otherSupervisorsList = reactive<Supervisor[]>([
    {
        session: '第四屆',
        termOfOffice: '91.9.19~94.9.3',
        chairman: '鄭隆賓',
        executiveDirector: '魏崢、賴明坤、連榮達、侯靜蘭',
        director: '莫等卿、陳淑麗、張忠毅、王志文、黃翠花、楊美都、謝輝和、李伯璋、林清麗、江淇松、周昌德、陳豐仁、朱樹勳、周迺寬、柯文哲、吳志雄',
        executiveSupervisor: '韓月英',
        supervisor: '李玉蓉、張志豐、蔡文玲、 林寶玉、鄭敏朗、黃智勇'
    },
    {
        session: '第五屆',
        termOfOffice: '94.9.3~97.9.3',
        chairman: '魏崢',
        executiveDirector: '鄭隆賓、李伯璋、李芳艷、張忠毅',
        director: '王志文、陳靜陵、林齊國、賴明坤、謝輝和、楊美都、何金龍、吳志雄、朱樹勳、陳淑麗、周昌德、張奇香、傅明貴、林清麗、李盛財、林孝義',
        executiveSupervisor: '韓月英',
        supervisor: '邱虛谷、林寶玉、張志豐、黃俊雄、蔡文玲、李亮德'
    },
    {
        session: '第六屆',
        termOfOffice: '97.8.31~100.8.31',
        chairman: '魏崢',
        executiveDirector: '張忠毅、謝輝和、洪芳明、陳淑麗',
        director: '鄭隆賓、賴明坤、張奇香、李芳艷、陳靜陵、楊美都、邱亦宣、王志文、鄭麗容、朱樹勳、李伯璋、林孝義、陳芬芩、周昌德、傅明貴、蔡正祥',
        executiveSupervisor: '韓月英',
        supervisor: '林寶玉、黃俊雄、張志豐、李亮德、邱虛谷、陳韋豪'
    },
    {
        session: '第七屆',
        termOfOffice: '100.8.27~103.8.26',
        chairman: '龍藉泉',
        executiveDirector: '魏崢、張忠毅、張奇香、謝輝和',
        director: '鄭隆賓、李芳艷、劉美蓮、鄭麗容、呂金春、邱亦宣、陳隆進、陳靜陵、朱樹勳、蔡正祥、楊松齡、張龍雄、王志文、楊美都、李伯璋、安斯泰來製藥',
        executiveSupervisor: '韓月英',
        supervisor: '李亮德、林寶玉、黃俊雄、陳韋豪、廖美麗、黃文彰'
    },
    {
        session: '第八屆',
        termOfOffice: '103.8.23~106.8.22',
        chairman: '張忠毅',
        executiveDirector: '魏崢、蔡建松、張奇香、王志文',
        director: '鄭麗容、邱亦宣、詹佳蓁、韓肇中、龍藉泉、謝輝和、陳靜陵、李伯璋、江仰仁、李芳艷、劉美蓮、王家財、楊松齡、張龍雄、周迺寬、中國附醫',
        executiveSupervisor: '陳韋豪',
        supervisor: '廖美麗、蔡正祥、林寶玉、黃文彰、李亮德、陳國銘'
    },
    {
        session: '第九屆',
        termOfOffice: '106.8.19~109.8.18',
        chairman: '李明哲',
        executiveDirector: '張奇香、李芳艷',
        director: '魏崢、邱亦宣、江仰仁、陳靜陵、鄭麗容、呂金春、張龍雄、顏俊輝、劉美蓮、蔡建松、王植熙、謝宗保',
        executiveSupervisor: '李亮德',
        supervisor: '林寶玉、黃文彰、蔡正祥、韓月英'
    },
    {
        session: '第十屆',
        termOfOffice: '109.8.14~112.8.13',
        chairman: '李明哲',
        executiveDirector: '張奇香、江仰仁',
        director: '鄭麗容、鍾孟軒、李芳艷、邱亦宣、魏  崢、潘瑾慧、蔡建松、陳靜陵、周迺寬、蔡長穎、張龍雄、劉美蓮',
        executiveSupervisor: '韓月英',
        supervisor: '林寶玉、蔡正祥、李亮德、黃文彰'
    },
    {
        session: '第十一屆',
        termOfOffice: '112.8.25~115.8.24',
        chairman: '江仰仁',
        executiveDirector: '李明哲、潘瑾慧',
        director: '魏崢、張奇香、白金川、李芳艷、陳靜陵、鄭麗容、簡鑠驊、陳淑玲、鍾孟軒、蔡長穎、吳沅衿、紀炳宏',
        executiveSupervisor: '韓月英',
        supervisor: '李亮德、林寶玉、王家財、陳國銘'
    },
])


// 實際顯示用的列表
let supervisorsList = reactive<Supervisor[]>([...initialSupervisorsList])


//獲取其他List
const getOtherList = () => {
    if (!showFullList.value) {

        /**
         * array.splice(startIndex, deleteCount, item1, item2, ...), 會更改原本的數組
         * 參數說明  ：
         * startIndex：開始修改的位置（索引）
         * deleteCount：要刪除的元素數量
         * item1, item2, ...：要新增的元素（可選） 
         * 
         **/

        // 展開列表：加入剩餘資料
        supervisorsList.splice(initialSupervisorsList.length, 0, ...otherSupervisorsList)
        showFullList.value = true
    } else {
        // 縮減列表：移除額外資料
        supervisorsList.splice(initialSupervisorsList.length, otherSupervisorsList.length)
        showFullList.value = false
    }

    console.log(supervisorsList)

}



</script>

<style scoped lang="scss">
.common-section {
    width: $common-section-width;
    margin: $common-section-margin;
    font-family: $common-section-font-family;

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
        // background-color: aqua;
        width: 100%;
        color: $main-content-color;


        /**這邊是處理通用段落、sub-title 和 內容 */
        .paragraph {
            margin-bottom: 3%;

            @media screen and (max-width:480px) {
                margin-bottom: 6%;
            }

        }

        .sub-title {
            display: inline-block;
            margin-left: 10%;
            color: #fff;
            background-color: $main-color;
            padding: 5px 2.5rem;
            border-radius: 16px;
            font-size: $paragraph-font-size;

            @media screen and (max-width:480px) {
                margin-left: 0;
            }

        }

        .content {
            margin-left: 14%;
            margin-top: 2%;
            font-size: $paragraph-font-size;
        }


        /** 任務盒子內的樣式  */
        .mission-box {
            ol {
                list-style: none;
                /* 隱藏預設的數字標記 */
                counter-reset: item;
                /* 重置計數器 */
            }

            li {
                counter-increment: item;
                /* 每個 li 自增 1 */
                margin: 1.5rem 0;
                /* 每個項目的上下間距 */
                position: relative;
                /* 相對定位，為子元素定位 */
            }

            li::before {
                content: counter(item);
                /* 插入計數器的數值 */
                background-color: orange;
                /* 背景顏色 */
                color: white;
                /* 文字顏色 */
                border-radius: 50%;
                /* 圓形 */
                width: 2rem;
                /* 圓形寬度 */
                height: 2rem;
                /* 圓形高度 */
                display: inline-block;
                /* 使其為行內塊元素 */
                text-align: center;
                /* 文字置中 */
                line-height: 2rem;
                /* 行高等於圓形高度以置中 */
                position: absolute;
                /* 絕對定位 */
                left: -40px;
                /* 相對於 li 的位置 */
                top: 50%;
                /* 垂直置中 */
                transform: translateY(-50%);
                /* 調整位置至垂直中心 */
            }

        }

        /** 組織架構盒子內的樣式  */
        .organizational-structure-box {
            max-width: 65%;
            margin-top: 3%;

            img {
                width: 100%;
            }
        }

        /** 歷屆理監事盒子內的樣式 */
        .supervisors-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            margin-top: 3%;


            .supervisors-item {
                width: 30.5%;
                flex-wrap: wrap;
                color: #fff;
                background-color: #96B6A2;
                border-radius: 16px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                margin-bottom: 2%;
                margin-right: 1%;
                padding: 0.7rem;

                @media screen and (max-width:850px) {
                    width: 44%;
                }

                @media screen and (max-width:480px) {
                    width: 80%;
                    margin: 0 auto;
                    margin-bottom: 6%;
                }


                .supervisors-session {
                    text-align: center;
                    font-size: 1.3rem;
                }

                .supervisors-term-of-office {
                    text-align: center;
                }

                .supervisors-info {
                    display: flex;
                    justify-content: flex-start;
                    align-items: baseline;
                    font-size: 0.9rem;

                    margin: 5% 0;

                    .supervisors-info-label {
                        text-align: justify;
                        text-align-last: justify;
                        min-width: 5rem;

                    }

                    .supervisors-info-content {
                        /* 允许换行 */
                        white-space: normal;
                        /** 文字不因換行而分段 */
                        word-break: keep-all
                    }

                }
            }

        }

        /**用來觸發查看更多歷屆理監事的按鈕 */
        .supervisors-more-box {
            text-align: center;

            .supervisors-more-btn {
                color: #fff;
                background-color: $main-color;
                padding: 1rem 5rem;
                border-radius: 16px;
                letter-spacing: 0.1rem;
                border: none;
                font-weight: normal;
                transition: 0.5s;

                &:hover {
                    cursor: pointer;
                    background-color: $main-hover-btn-bg;
                    color: $main-hover-btn-text;
                }
            }
        }


        /** 章程下載盒子 */
        .regulation-box {
            margin-bottom: 3%;

        }

    }

}
</style>

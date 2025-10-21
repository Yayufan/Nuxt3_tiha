<template>
    <div>
        <Breadcrumbs firstRoute="關於我們" secoundRoute="協會組織名單"></Breadcrumbs>
        <section class="common-section">

            <h1 class="common-title">協會組織名單</h1>

            <div class="organization-list" v-for="(item, index) in supervisorsList" :key="index">

                <h2 class="section">{{ item.session }} 組織成員</h2>

                <div class="section">
                    <div class="section-title">理事長</div>
                    <div class="section-content">{{ item.chairman }}</div>
                </div>

                <div class="section">
                    <div class="section-title">常務理事</div>
                    <div class="section-content">{{ item.executiveDirector }}</div>
                </div>

                <div class="section">
                    <div class="section-title">理事</div>
                    <div class="section-content">{{ item.director }}</div>
                </div>

                <div class="section">
                    <div class="section-title">常務監事</div>
                    <div class="section-content">{{ item.executiveSupervisor }}</div>
                </div>

                <div class="section">
                    <div class="section-title">監事</div>
                    <div class="section-content">{{ item.supervisor }}</div>
                </div>

                <div class="section">
                    <div class="section-title">秘書長</div>
                    <div class="section-content">{{ item.secretaryGeneral }}</div>
                </div>

                <div class="section">
                    <div class="section-title">副秘書長</div>
                    <div class="section-content">{{ item.deputySecretaryGeneral }}</div>
                </div>

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
    secretaryGeneral: string;
    deputySecretaryGeneral: string;
}

//一開始預設只有四屆
let initialSupervisorsList = reactive<Supervisor[]>([
    {
        session: '第一屆',
        termOfOffice: '',
        chairman: '陳冠仰',
        executiveDirector: '李伯賢、鍾承軒',
        director: '陳冠仰、李伯賢、周仁偉、黃天祐、賴明瑋、李鈺淳、林敬斌、莊喬雄、鍾承軒',
        executiveSupervisor: '鄭敏朗',
        supervisor: '戴維震、黃鈺軒、李詠瑄',
        secretaryGeneral: '章振旺',
        deputySecretaryGeneral: '黃樂心、陳哲士、劉靜錤、邱凡華'
    },
    // {
    //     session: '第二屆',
    //     termOfOffice: '85.9.6~88.9.11',
    //     chairman: '魏崢',
    //     executiveDirector: '葉高芳、嚴道、黃桂福、黃明義',
    //     director: '賴明坤、蘇培人、林孝義、朱樹勳、孫鉞、連榮達、江淇松、周昌德、周天瑞、陳武宗',
    //     executiveSupervisor: '陳淑麗',
    //     supervisor: '謝輝和、鄭敏朗、柯文哲、陳庵君',
    //     secretaryGeneral: '章振旺',
    //     deputySecretaryGeneral: '黃樂心、陳哲士、劉靜錤、邱凡華'
    // },
    // {
    //     session: '第三屆',
    //     termOfOffice: '88.9.11~91.9.19',
    //     chairman: '賴明坤',
    //     executiveDirector: '魏崢、嚴道、黃明義、 連榮達',
    //     director: '鄭隆賓、蘇培人、周迺寬、朱樹勳、莫等卿、張忠毅、楊美都、周昌德、江淇松、陳豐仁、周天瑞、黃桂福、林孝義、高平通、陳武宗、侯靜蘭',
    //     executiveSupervisor: '陳淑麗',
    //     supervisor: '謝輝和、吳志雄、柯文哲、邱虛谷、鄭敏朗、李玉蓉',
    //     secretaryGeneral: '章振旺',
    //     deputySecretaryGeneral: '黃樂心、陳哲士、劉靜錤、邱凡華'
    // },

])

//加載後的剩餘理事會名單
let otherSupervisorsList = reactive<Supervisor[]>([
    // {
    //     session: '第四屆',
    //     termOfOffice: '91.9.19~94.9.3',
    //     chairman: '鄭隆賓',
    //     executiveDirector: '魏崢、賴明坤、連榮達、侯靜蘭',
    //     director: '莫等卿、陳淑麗、張忠毅、王志文、黃翠花、楊美都、謝輝和、李伯璋、林清麗、江淇松、周昌德、陳豐仁、朱樹勳、周迺寬、柯文哲、吳志雄',
    //     executiveSupervisor: '韓月英',
    //     supervisor: '李玉蓉、張志豐、蔡文玲、 林寶玉、鄭敏朗、黃智勇'
    // },
    // {
    //     session: '第五屆',
    //     termOfOffice: '94.9.3~97.9.3',
    //     chairman: '魏崢',
    //     executiveDirector: '鄭隆賓、李伯璋、李芳艷、張忠毅',
    //     director: '王志文、陳靜陵、林齊國、賴明坤、謝輝和、楊美都、何金龍、吳志雄、朱樹勳、陳淑麗、周昌德、張奇香、傅明貴、林清麗、李盛財、林孝義',
    //     executiveSupervisor: '韓月英',
    //     supervisor: '邱虛谷、林寶玉、張志豐、黃俊雄、蔡文玲、李亮德'
    // },
    // {
    //     session: '第六屆',
    //     termOfOffice: '97.8.31~100.8.31',
    //     chairman: '魏崢',
    //     executiveDirector: '張忠毅、謝輝和、洪芳明、陳淑麗',
    //     director: '鄭隆賓、賴明坤、張奇香、李芳艷、陳靜陵、楊美都、邱亦宣、王志文、鄭麗容、朱樹勳、李伯璋、林孝義、陳芬芩、周昌德、傅明貴、蔡正祥',
    //     executiveSupervisor: '韓月英',
    //     supervisor: '林寶玉、黃俊雄、張志豐、李亮德、邱虛谷、陳韋豪'
    // },
    // {
    //     session: '第七屆',
    //     termOfOffice: '100.8.27~103.8.26',
    //     chairman: '龍藉泉',
    //     executiveDirector: '魏崢、張忠毅、張奇香、謝輝和',
    //     director: '鄭隆賓、李芳艷、劉美蓮、鄭麗容、呂金春、邱亦宣、陳隆進、陳靜陵、朱樹勳、蔡正祥、楊松齡、張龍雄、王志文、楊美都、李伯璋、安斯泰來製藥',
    //     executiveSupervisor: '韓月英',
    //     supervisor: '李亮德、林寶玉、黃俊雄、陳韋豪、廖美麗、黃文彰'
    // },
    // {
    //     session: '第八屆',
    //     termOfOffice: '103.8.23~106.8.22',
    //     chairman: '張忠毅',
    //     executiveDirector: '魏崢、蔡建松、張奇香、王志文',
    //     director: '鄭麗容、邱亦宣、詹佳蓁、韓肇中、龍藉泉、謝輝和、陳靜陵、李伯璋、江仰仁、李芳艷、劉美蓮、王家財、楊松齡、張龍雄、周迺寬、中國附醫',
    //     executiveSupervisor: '陳韋豪',
    //     supervisor: '廖美麗、蔡正祥、林寶玉、黃文彰、李亮德、陳國銘'
    // },
    // {
    //     session: '第九屆',
    //     termOfOffice: '106.8.19~109.8.18',
    //     chairman: '李明哲',
    //     executiveDirector: '張奇香、李芳艷',
    //     director: '魏崢、邱亦宣、江仰仁、陳靜陵、鄭麗容、呂金春、張龍雄、顏俊輝、劉美蓮、蔡建松、王植熙、謝宗保',
    //     executiveSupervisor: '李亮德',
    //     supervisor: '林寶玉、黃文彰、蔡正祥、韓月英'
    // },
    // {
    //     session: '第十屆',
    //     termOfOffice: '109.8.14~112.8.13',
    //     chairman: '李明哲',
    //     executiveDirector: '張奇香、江仰仁',
    //     director: '鄭麗容、鍾孟軒、李芳艷、邱亦宣、魏  崢、潘瑾慧、蔡建松、陳靜陵、周迺寬、蔡長穎、張龍雄、劉美蓮',
    //     executiveSupervisor: '韓月英',
    //     supervisor: '林寶玉、蔡正祥、李亮德、黃文彰'
    // },
    // {
    //     session: '第十一屆',
    //     termOfOffice: '112.8.25~115.8.24',
    //     chairman: '江仰仁',
    //     executiveDirector: '李明哲、潘瑾慧',
    //     director: '魏崢、張奇香、白金川、李芳艷、陳靜陵、鄭麗容、簡鑠驊、陳淑玲、鍾孟軒、蔡長穎、吳沅衿、紀炳宏',
    //     executiveSupervisor: '韓月英',
    //     supervisor: '李亮德、林寶玉、王家財、陳國銘'
    // },
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



    /**這邊是處理通用段落、sub-title 和 內容 */
    .paragraph {
        margin-bottom: 3%;

        @media screen and (max-width:480px) {
            margin-bottom: 6%;
        }

    }

    .organization-list {
        font-family: "Microsoft JhengHei", sans-serif;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 2%;
        font-size: $paragraph-font-size;
        line-height: 1.6;
        color: #333;

        h2 {
            background-color: $main-color;
            color: #fff;
            padding: 0.5rem 1rem;
            margin-top: 2rem;
            font-size: 1.2rem;
            font-weight: bold;
            border-left: 5px solid $sub-color ;
        }

        .section {
            display: flex;
            padding: 0.5rem 1rem;
            border-bottom: 1px solid #e0e0e0;

            .section-title {
                width: 120px;
                font-weight: bold;
                flex-shrink: 0;
            }

            .section-content {
                flex: 1;
                // word-break: break-word;
                /* 允许换行 */
                white-space: normal;
                /** 文字不因換行而分段 */
                word-break: keep-all
            }
        }
    }

}
</style>

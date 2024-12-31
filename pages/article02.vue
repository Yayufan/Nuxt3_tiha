<!--  -->
<template>

    <section class="article-section">

        <Breadcrumbs firstRoute="衛教資訊" :secoundRoute="article.type"></Breadcrumbs>

        <div class="title-box">
            <div class="title">{{ article.title }}</div>
            <div class="announcementDate">{{ article.announcementDate }}</div>
        </div>

        <div class="article-content ck-content">

            <h1>林口長庚醫院發炎性腸道疾病中心主任 李柏賢副教授</h1>

            <h2>重拾設計夢——生物製劑助克隆氏症合併廔管患者回歸幸福生活</h2>
            <p style="text-indent: 2em;margin-bottom: 3%;">
                32歲的室內設計師小安因右下腹疼痛、血便、反覆泌尿道感染及體重減輕八公斤，過去一年多來多次就醫卻未見改善，
                甚至被迫辭去工作。起初診斷為腸躁症與痔瘡，僅被建議低腹敏飲食及多喝水減少感染。直到一次大腸鏡檢查前清腸時，
                腹部一顆紅色小痘痘破裂流出糞便，揭示她的真實病情。經腸鏡及核磁共振檢查，小安被確診為克隆氏症，
                併發小腸到皮膚及膀胱的複雜廔管，糞便經異常通道流入膀胱，引發反覆感染。在診斷後一個月，她接受生物製劑治療。三個月內，
                尿液檢查完全正常；四個月後，腹部廔管成功閉合。如今，小安僅需每兩個月施打一劑生物製劑，生活完全回歸正軌，
                重新投入熱愛的設計工作。兩年後的大腸鏡檢查顯示腸道潰瘍完全癒合，三年後影像亦無發炎跡象，達到全層癒合。
            </p>

            

            <h2>生物製劑改寫克隆氏症治療篇章</h2>
            <p style="text-indent: 2em;margin-bottom: 3%;">
                傳統治療如局部抗發炎藥（5-ASA）對克隆氏症無顯著效果；類固醇則因副作用大，僅適用於急性期短期緩解。
                生物製劑與小分子藥物的出現為患者帶來新希望，這些進階治療針對發炎核心機制，提供更精準且安全的選擇。
                研究顯示，對於中重度克隆氏症患者，特別是合併廔管或腹腔膿瘍者，越早使用生物製劑，療效越佳。
                若能在診斷後六個月至兩年內開始治療，不僅可顯著降低手術與感染風險，還能提升長期病情控制效果。
            </p>

            <h2>攜手健康未來</h2>
            <p style="text-indent: 2em;margin-bottom: 3%;">
                克隆氏症的治療目標是「內視鏡黏膜癒合」，即腸道黏膜恢復正常，進一步降低復發、住院及手術風險。隨著治療選項愈加多元，
                醫療團隊可針對患者需求制定個人化治療計畫，共同決策最佳方案。治療克隆氏症，除了藥物，還需健康飲食、心理支持及病友間的互助。
                希望病友團體與專業醫學會攜手合作，提供更全面的支持，讓更多患者如小安一樣，重新擁抱健康與幸福的未來。
            </p>


        </div>

    </section>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import 'ckeditor5/ckeditor5.css';
import Breadcrumbs2 from '@/components/layout/Breadcrumbs2.vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

const route = useRoute();

//預設假資料
const article = reactive({
    type: '案例分享',
    title: '重拾設計夢—生物製劑助克隆氏症合併廔管患者回歸幸福生活＿李柏賢醫師',
    announcementDate: '2024-12-31'
})


</script>

<style scoped lang="scss">
.article-section {
    margin: 0 auto;
    margin-bottom: 3%;
    font-family: initial;

    .title-box {
        margin: 3% 8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1%;
        border-bottom: 1px #686A69 solid;
        font-size: 1.4rem;
        color: $main-color;

        .title {
            letter-spacing: 0.2rem;
            font-weight: 600;
        }

        .announcementDate {
            min-width: 70px;
        }

    }

    .article-content {
        margin: 0 8%;
    }

}
</style>

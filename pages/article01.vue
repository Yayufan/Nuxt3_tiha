<!--  -->
<template>

    <section class="article-section">

        <Breadcrumbs firstRoute="衛教資訊" :secoundRoute="article.type"></Breadcrumbs>

        <div class="title-box">
            <div class="title">{{ article.title }}</div>
            <div class="announcementDate">{{ article.announcementDate }}</div>
        </div>

        <div class="article-content ck-content">

            <h1>台北馬偕紀念醫院 消化科系 胃腸科主任 章振旺 </h1>

            <h2>腸道發炎性疾病，能不能生小孩?</h2>
            <p style="text-indent: 2em;margin-bottom: 3%;">
                病房的住院醫師在護理站叫住我，表示24A的林小姐想轉照顧的主治醫師改成我?
                一問之下才知道，原來是我的老病人。28歲林小姐在大學三年級時就因反覆腹瀉，血便住院，後來診斷為潰瘍性大腸炎；長久以來，她都是使用”5-氨基水楊酸（5-ASA） 配合 ”塞劑”
                控制良好，有很長一段時間沒有發作。林小姐是個樂觀開朗的女孩，在疾病診斷初期便坦然面對疾病，配合治療且控制良好，一年多前突然沒有回診，我以為她搬家或是換工作地點，沒想到再次見面竟然是潰瘍性大腸炎急性發作住院。
            </p>

            <p style="text-indent: 2em;margin-bottom: 3%;">住院醫師引導我到病房了解情況，林小姐支開病床旁的男友，小聲地的表示抱歉，這一年有些事耽擱所以沒有回診，
                不知道我是否可以繼續診治她的疾病；進一步詢問才了解，這一年由於男友的出現，對於這個病她有點心慌，不知如何面對。
                男友了解她的疾病也可以接受，對方是傳統家庭，男友的父母可能無法接受一個生病的女孩，很怕有病的女孩會影響下一代。
                再加上須長期使用藥物，她自己也擔心藥物是否有影響生育，不知道自己能不能生小孩?她們沒有跟男方父母講是甚麼病，而且索性不回診，
                不讓對方父母以為她一直在生病。
            </p>
            <p style="text-indent: 2em;margin-bottom: 3%;">
                其實，從來都沒有人說過她不能生小孩? 不管國內或國外的治療準則也都明白指出這類疾病是可以懷孕且平安生下健康寶寶。
            </p>


            <h2>腸道發炎性疾病，會不會遺傳?</h2>
            <p style="text-indent: 2em;margin-bottom: 3%;">
                根據之前的報導，國內女性的腸道發炎性疾病患者，大部分都是生育年齡的患者，有超過50%的患者是介於15-45歲之間，
                目前對於腸道發炎性疾病的真正原因仍不清楚，但知道是多重原因，從遺傳，環境，飲食與壓力等都有被討論；至於會不會遺傳，
                答案是很少見，真的不要太擔心。
            </p>



            <h2>吃這些藥，會不會影響小孩?</h2>
            <p style="text-indent: 2em;margin-bottom: 3%;">
                腸道發炎性疾病常用的藥物包括5-氨基水楊酸（5-ASA）藥物，免疫調節劑或生物製劑等；嚴格來說，
                只有Methotrexate這種藥物跟最新的小分子藥物不可使用在孕婦，其他藥物大致上沒有問題。
            </p>

            <p style="text-indent: 2em;margin-bottom: 3%;">
                媽媽的健康遠比其他的問題都還要重要，一個不健康的媽媽，小孩容易有早產或體重過輕，對小孩的影響會更大，
                所以對於腸道發炎疾病的病人，一定要特別的注意疾病的控制。 曾經有一個很有名的婦產科教授曾對我說，
                早產或體重過輕的嬰兒根本不是問題，高危險妊娠的醫師就是專門服務這些寶寶，真的不用擔心。在我的臨床經驗中，
                有很多的病友，都生兩個或三個小孩，也都沒有任何問題。
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
    title: '腸道發炎性疾病，能不能生小孩？_章振旺醫師',
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

<!--  -->
<template>
    <!-- 自我介紹Section -->
    <Introduce></Introduce>

    <!-- 服務介紹Section -->
    <!-- <Service></Service> -->

    <!-- 疾病及治療介紹 -->
    <div ref="educationRef" class="ref-item" :class="{ 'visible': isEducationVisible, 'fade-in': isEducationVisible, }">
        <Education></Education>
    </div>


    <!-- 團隊介紹 -->
    <div ref="teamRef" class="ref-item" :class="{ 'visible': isTeamVisible, 'fade-in': isTeamVisible, }">
        <TeamIntroduction></TeamIntroduction>
    </div>

    <!-- 最新消息Section -->
    <div ref="newsRef" class="ref-item" :class="{ 'visible': isNewsVisible, 'fade-in': isNewsVisible, }">
        <News></News>
    </div>


    <div ref="conceptRef" class="ref-item" :class="{ 'visible': isConceptVisible, 'fade-in': isConceptVisible }">
        <!-- 團隊理念 -->
        <Concept></Concept>
    </div>

    <!-- 前景介紹Section -->
    <!-- <Prospect></Prospect> -->

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Introduce from '~/components/home/Introduce2.vue'
import Education from '~/components/home/Education.vue'
import News from '~/components/home/News2.vue'
import TeamIntroduction from '~/components/home/TeamIntroduction2.vue'
import Concept from '~/components/home/Concept.vue'

const educationRef = ref()
const teamRef = ref()
const conceptRef = ref()
const newsRef = ref()

const isTeamVisible = ref(false)
const isConceptVisible = ref(false)
const isNewsVisible = ref(false)
const isEducationVisible = ref(false)


const observerOptions = {
    threshold: 0.2, // 當 20% 的元素可見時觸發
    //rootMargin: '0px 0px -100px 0px' // 提前 100px 觸發
}

//創建一個空數組來存儲所有的 Intersection Observer 實例。
let observers: any[] = []
onMounted(() => {

    //使用了 Intersection Observer API 來檢測元素是否進入視口
    //這是一個函數，用於創建和設置 Intersection Observer。
    // 它接受兩個參數：ref: 要觀察的 DOM 元素的引用 ， visibilityRef: 一個響應式引用，用於控制元素的可見性狀態

    const createObserver = (ref: any, visibilityRef: any) => {
        //創建一個新的 Intersection Observer 觀察器實例。  它接受兩個參數：一個回調函數  和一個配置對象（observerOptions）。
        const observer = new IntersectionObserver((entries) => {
            //對每個被觀察的元素（在這個案例中只有一個）執行回調。
            entries.forEach((entry) => {
                //檢查元素是否進入視口。
                if (entry.isIntersecting) {
                    //如果元素進入視口，設置一個 100 毫秒的延遲，然後將可見性狀態設為 true。
                    // 使用 setTimeout 來確保 CSS 轉換能夠正確觸發
                    setTimeout(() => {
                        visibilityRef.value = true
                    }, 100)

                    //停止觀察這個元素，因為我們只需要觸發一次動畫。
                    // observer.unobserve(entry.target)
                } else {
                    //元素如果離開視口，將可見性狀態設為 false。
                    visibilityRef.value = false
                }
            })
        }, observerOptions)


        //如果 ref 存在（即 DOM 元素已經渲染），開始觀察這個元素。
        if (ref.value) {
            observer.observe(ref.value)
        }

        //返回這個觀察器，他就會自動去觀察這個元素，去開啟是否讓元素可視
        return observer
    }

    createObserver(educationRef, isEducationVisible)
    createObserver(teamRef, isTeamVisible)
    createObserver(conceptRef, isConceptVisible)
    createObserver(newsRef, isNewsVisible)


})

onUnmounted(() => {
    observers.forEach(observer => {
        observer.disconnect()
    })
})

</script>

<style scoped lang="scss">
.ref-item {
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
}

.visible {
    opacity: 1;
}

.fade-in {
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

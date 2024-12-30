<template>
  <!-- 最外層新增一個wrapper,是為了搭配content 撐開中間內容為空的路由組件來達成一頁的效果  -->
  <div class="wrapper">
   
    <!-- 共用的Header -->
    <Header></Header>
    <Menu class="menu-bar"></Menu>
    <!-- 先用一個main標籤將之後要顯示的路由組件包起來 -->
    <main class="content">
      <NuxtPage></NuxtPage>
      <!-- 將button放置在main內容下,預設使用fixed黏在整個頁面,到Footer時則轉為 absolute -->
      <el-button class="top-button" :class="{ 'button-arrives-footer': buttonArrivesFooter }" v-if="showTopButton"
        @click="backToTop"><img src="@/assets/img/top-button.png" alt="" class="top-button-img"></el-button>
    </main>

    <!-- 共用的Footer -->
    <Footer ref="footerRef"></Footer>
  </div>

</template>

<script setup lang="ts">

import Header from './components/layout/Header.vue';
import Menu from '@/components/layout/Menu.vue';
import Footer from '@/components/layout/Footer.vue';
import {  ref } from 'vue';

//這邊注意只是獲取組件而已
const footerRef = ref()

//按鈕抵達Footer組件
const buttonArrivesFooter = ref(false)

//顯示Button變量
const showTopButton = ref(false);

//這邊使用在easyState.ts , export 出來的useScrollPosition
//獲得全局共享變量scrollPosition
const scrollPosition = useScrollPosition()

//獲得全局共享變量viewportWidth視口寬度
const viewportWidth = useViewportWidth()




//掛載完畢
onMounted(() => {
  //監聽滑鼠滾動事件
  window.addEventListener('scroll', handleScroll);

  //首次加載時,加載視口寬度,
  viewportWidth.value = window.innerWidth;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 當 footer 進入視口時，固定按鈕
        buttonArrivesFooter.value = true;
      } else {
        // 當 footer 離開視口時，解放按鈕
        buttonArrivesFooter.value = false;
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0
  });

  // 確保 footer.value 是有效的 Element，然後才進行 observe
  if (footerRef) {
    const footerElement = footerRef.value?.$el
    observer.observe(footerElement);  // 開始監控 footer
  }

  onBeforeUnmount(() => {
    //移除observer
    if (footerRef.value) {
      observer.disconnect();
    }

    //移除監聽滑鼠滾動事件
    window.removeEventListener('scroll', handleScroll);

  })

})

//監聽滾動位置
watch(scrollPosition, (newValue) => {
  showTopButton.value = newValue > 130;
});

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


//當有滑鼠滾動事件被觸發,需要執行的回調函數
function handleScroll() {
  // 獲取滾動到的位置
  let scrollPositionY = window.scrollY
  ////為全局變量scrollPosition進行賦值
  scrollPosition.value = scrollPositionY
  //console.log('滾輪位置',scrollPosition.value)
}


</script>


<style lang="scss">

//覆蓋子選單的邊框
.my-popper {
  --el-popover-border-radius: 15px;

  .el-menu--popup {
    border-radius: 15px;
    min-width: 150px !important;
    padding: 0 !important;
    --el-menu-text-color: #1C2B6E !important;
    --el-menu-active-color: #6A6969 !important;
    --el-menu-hover-text-color: #6A6969 !important;
    --el-menu-hover-bg-color: none !important;
  }

  li {
    padding: 0 !important;
    height: auto !important;
    margin: 0 10px !important;
    line-height: 30px !important;
  }

}

//這個設定是撐開中間內容為空的組件
//讓他Header組件和Footer組件固定在最上方和最下方
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex-grow: 1;
    position: relative;

  }

  .menu-bar {
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .top-button {
    position: fixed;
    right: 1%;
    bottom: 12vh;
    // margin-bottom: 10%;
    width: 6rem;
    border: none;
    opacity: 0.7;
    background-color: transparent;
    transition: 0.5s;


    &:active {
      background-color: transparent;
      border: none;
    }

    &:hover {
      opacity: 1;
      background-color: transparent;
      border: none;
    }
  }

  .top-button-img {
    width: 100%;
    height: 100%;
  }

  .button-arrives-footer {
    position: absolute;
  }




}
</style>

<!--  -->
<template>
  <nav>

    <div class="navbarOuterBox">

      <!-- logo盒子,含首頁跳轉 -->
      <div class="logoBox">
        <NuxtLink to="/">
          <img ref="logoImg" src="/img/logo01.png">
        </NuxtLink>
      </div>

      <div class="navItemOuterBox">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="navMenu" :popper-offset="100" >
          <el-menu-item index="1" class="navItem" >首頁</el-menu-item>
          <el-sub-menu index="2" class="navItem" >
            <template #title>團隊介紹</template>
            <el-menu-item index="2-1">成員介紹</el-menu-item>
            <el-menu-item index="2-2">醫療優勢</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3" class="navItem">
            <template #title>一般民眾</template>
            <el-menu-item index="2-1">疾病及治療介紹</el-menu-item>
            <el-menu-item index="2-2">醫學新知</el-menu-item>
          </el-sub-menu>

          <el-menu-item index="4" class="navItem">手術介紹</el-menu-item>
          <el-menu-item index="5" class="navItem">醫學專業資訊</el-menu-item>
          <el-menu-item index="6" class="navItem">聯絡我們</el-menu-item>
        </el-menu>

      </div>

      <!-- PC和 ipad顯示的導覽欄 -->
      <!-- <div class="navItemOuterBox">

        <ul class="navItemInnerBox">
          <NuxtLink to="/">
            <li class="navItem">首頁</li>
          </NuxtLink>

          <NuxtLink to="/introduce">
            <li class="navItem">團隊介紹</li>
          </NuxtLink>

          <NuxtLink to="/education/1-1">
            <li class="navItem">公眾衛生資訊</li>
          </NuxtLink>

          <NuxtLink v-show="showProfessionLink" to="/education/1-1">
            <li class="navItem">醫學專業資訊</li>
          </NuxtLink>

          <NuxtLink to="/contact">
            <li class="navItem">聯絡我們</li>
          </NuxtLink>

        </ul>
      </div> -->

      <!--v-if="viewportWidth < 481"-->
      <div class="menuMobileImgBox" @click="toggleNav">
        <img src="/img/menu.svg">
      </div>

      <!-- v-if="viewportWidth < 481" -->
      <div class="menuMobileContentBox" ref="menuMobileContentBox">
        <div class="menuHeaderBox">
          <div class="menuHeaderTitle">Menu</div>
          <div class="menuHeaderCrossBox">
            <img class="crossIcon" src="/img/cross.svg" @click="toggleNav">
          </div>
        </div>
        <div class="menuBodyBox">
          <ul class="">


            <NuxtLink to="/" @click="toggleNav">
              <li class="navItem">首頁</li>
            </NuxtLink>

            <!-- <NuxtLink to="/news" @click="toggleNav">
              <li class="navItem">最新消息</li>
            </NuxtLink> -->


            <NuxtLink to="/introduce" @click="toggleNav">
              <li class="navItem">團隊介紹</li>
            </NuxtLink>

            <NuxtLink to="/education" @click="toggleNav">
              <li class="navItem">公眾衛生資訊</li>
            </NuxtLink>

            <NuxtLink v-show="showProfessionLink" to="/professional" @click="toggleNav">
              <li class="navItem">醫學專業資訊</li>
            </NuxtLink>

            <!-- <NuxtLink to="/clinicHours" @click="toggleNav">
              <li class="navItem">就診資訊</li>
            </NuxtLink> -->


            <NuxtLink to="/contact" @click="toggleNav">
              <li class="navItem">聯絡我們</li>
            </NuxtLink>

          </ul>
        </div>
      </div>


    </div>

  </nav>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

let showProfessionLink = ref(false)
//啟用Mobile導覽欄狀態,預設為false
let isEnableMobileNav = false

//獲取logoImg的Dom元素
const logoImg = ref()
//獲取Mobile的Nav
const menuMobileContentBox = ref()

//獲取滑鼠滾動的全局
const scrollPosition = useScrollPosition()
//獲取視口寬度
const viewportWidth = useViewportWidth()


//監聽滑鼠滾動的全局變量
watch(scrollPosition, () => {
  if (scrollPosition.value > 200) {
    logoImg.value.style.height = '50px'
  } else {
    logoImg.value.style.height = '75px'
  }
})

//Mobile導覽欄切換顯示
function toggleNav() {
  if (isEnableMobileNav) {
    menuMobileContentBox.value.style.left = '0%'
    isEnableMobileNav = !isEnableMobileNav
  } else {
    menuMobileContentBox.value.style.left = '100%'
    isEnableMobileNav = !isEnableMobileNav
  }

}

</script>

<style scoped lang="scss">
//整個導覽欄,滑超過這個Nav的高度後會沾黏在最上方
nav {
  /**使用sticky務必和top:0一起使用,否則不生效 */
  position: sticky;
  top: 0;
  //z-index: 50;
  width: 100%;
  background-color: $main-color;

  //整個導覽欄內容,會比整個導覽欄短一點
  .navbarOuterBox {
    width: 90%;
    margin: 0px auto;
    display: flex;
    justify-content: left;
    align-items: center;

    .navMenu{
      width: 100%;
    }

    @media screen and (max-width:481px) {
      justify-content: space-between;
    }

    /**Logo的盒子 */
    .logoBox {
      padding: 5px 0;

      //transition: height 1s ease 1s;
      @media screen and (max-width:481px) {
        display: none;
      }

      img {
        width: 75px;
        height: 75px;
        transition: height 1s ease;
      }

    }

    /** 一般PC+ipad 導覽欄  */
    .navItemOuterBox {

      //預設顯示,當成為手機視口時,才進行隱藏
      @media screen and (max-width:481px) {
        display: none;
      }

      /**導覽欄內部Item */
      .navItemInnerBox {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        font-weight: 600;

        /**每個路由Item */
        .navItem {
          padding: 5px 1rem;
          // font-size: 0.8rem;
          font-size: 1rem;

          @media screen and (max-width:769px) {
            font-size: 1.3rem;
          }

          @media screen and (max-width:481px) {}

          @media screen and (max-width:400px) {}


        }
      }
    }

    /**Mobile導覽欄開啟的Icon */
    .menuMobileImgBox {

      display: none;

      @media screen and (max-width:481px) {
        display: block
      }

      img {
        width: 30px;
        height: 30px;
      }


    }

    /**Mobile導覽欄,預設他由左往右偏移100%, 寬度為100% , 並加上transition過度 */
    /**打開Mobile Nav透過JS更改left 偏移量為0%, 他就能達到從右邊往左延伸至全螢幕的效果了 */
    /**關閉Mobile Nav透過JS更改left 偏移量為100%, */
    .menuMobileContentBox {
      position: fixed;
      top: 0;
      left: 100%;
      width: 100%;
      height: 100vh;
      background-color: #F8F9FA;
      transition: 1s;

      //預設隱藏
      display: none;

      //當成為手機視口時才打開
      @media screen and (max-width:481px) {
        display: block
      }

      /**Mobile導覽欄,頭部盒子,包含Title(Menu), 以及刪除Icon */
      .menuHeaderBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem;

        /**Mobile Navbar Title */
        .menuHeaderTitle {
          font-weight: 700;
          font-size: 1.5rem;
        }

        /**Mobile Navbar 刪除icon盒子 */
        .menuHeaderCrossBox {
          .crossIcon {
            width: 30px;
            height: 30px;
          }
        }

      }

      /**Mobile Navbar 路由連結 */
      .menuBodyBox {
        padding: 0 1rem;
        padding-left: 2.5rem;

        ul {
          font-size: 1.5rem;
          font-weight: 600;
          /**重置樣式 */
          list-style: none;
          padding: 0;

          li {
            padding: 1rem 0;
          }
        }
      }
    }

  }

}
</style>

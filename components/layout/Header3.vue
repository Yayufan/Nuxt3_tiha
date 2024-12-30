<template>

  <div class="top-space"></div>

  <div class="PC-menu-box">

    <div class="logo-box" @click="goToPath('/')">
      <img ref="logoImg" class="logoImg" src="/img/logo03.png" alt="Element logo" />
    </div>

    <el-menu :default-active="activeMenu" class="PC-navbar" :ellipsis="false" mode="horizontal" @select="handleSelect"
      :popper-offset="-5" popper-class="my-popper">

      <el-menu-item index="/introduce" @click="goToPath('/introduce')">醫療團隊</el-menu-item>

      <el-sub-menu index="/education">
        <template #title>一般民眾</template>
        <el-menu-item index="/education" @click="goToPath('/education')">疾病及治療介紹</el-menu-item>
        <el-menu-item index="/medical-knowledge" @click="goToPath('/medical-knowledge')">醫學新知</el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/education-surgery" @click="goToPath('/education-surgery')">手術衛教</el-menu-item>
      <el-menu-item index="/professional" @click="goToPath('/professional')">醫學專業資訊</el-menu-item>
      <el-menu-item index="/contact" @click="goToPath('/contact')">聯絡我們</el-menu-item>

    </el-menu>


  </div>



  <!-- 手機navbar -->
  <div class="mobile-navbar">

    <div class="left">
      <div class="icon-box" @click="openDrawer">
        <img src="@/assets/img/expand.svg">
      </div>
    </div>

    <div class="right">
      <img src="/img/logo03.png">
    </div>

  </div>



  <!-- 手機抽屜選單 -->
  <div class="mobile-drawer-box">


    <el-drawer v-model="drawer" class="mobile-drawer" title="I am the title" size="80%" direction="ltr">
      <template #header>
        <div>
          <img src="/img/logo03.png">
        </div>

      </template>

      <el-menu :default-active="activeMenu" class="drawer-menu" :ellipsis="false" @select="handleSelect"
        :unique-opened="true">
        <!-- <div class="flex-grow" ></div> -->

        <el-menu-item index="/" @click="goToPath('/')">首頁</el-menu-item>
        <el-menu-item index="/introduce" @click="goToPath('/introduce')">醫療團隊</el-menu-item>

        <el-sub-menu index="/education">
          <template #title>一般民眾</template>
          <el-menu-item index="/education" @click="goToPath('/education')">疾病及治療介紹</el-menu-item>
          <el-menu-item index="/medical-knowledge" @click="goToPath('/medical-knowledge')">醫學新知</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/education-surgery">
          <template #title>手術衛教</template>

          <!-- 使用遞歸函數渲染子菜單 -->
          <template v-if="educationSurgeryList.length > 0">
            <!-- 使用遞歸組件 -->
            <RecursiveMenu v-for="(item, index) in educationSurgeryList" :key="item.articleCategoryId" :item="item"
              routePath="education-surgery" />
          </template>
        </el-sub-menu>


        <el-sub-menu index="/professional">
          <template #title>醫學專業資訊</template>
          <!-- 使用遞歸函數渲染子菜單 -->
          <template v-if="professionalList.length > 0">
            <!-- 使用遞歸組件 -->
            <RecursiveMenu v-for="(item, index) in professionalList" :key="item.articleCategoryId" :item="item"
              routePath="professional" />
          </template>
        </el-sub-menu>
        <el-menu-item index="/contact" @click="goToPath('/contact')">聯絡我們</el-menu-item>

      </el-menu>


    </el-drawer>
  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { h } from 'vue';

const route = useRoute()
const router = useRouter()
let drawer = ref(false)

//獲取滑鼠滾動的全局
const scrollPosition = useScrollPosition()
//獲取視口寬度
const viewportWidth = useViewportWidth()

let educationSurgery = "educationSurgery"

let professionalMedical = "professionalMedical"

//獲取logoImg的Dom元素
const logoImg = ref()


//獲取手術衛教的分類Menu
// 獲取嵌套的 data 數據
let { data: eduSurResponse } = await SSRrequest.get(`article-category/${educationSurgery}`, {
})

let { data: professResponse } = await SSRrequest.get(`article-category/${professionalMedical}`, {
})


// 直接使用 response.data 作為文章分類數據
const educationSurgeryList = computed(() => eduSurResponse.value?.data || [])

const professionalList = computed(() => professResponse.value?.data || [])

const activeMenu = computed(() => {
  return route.path; // 如果沒有匹配到，返回完整路徑
});


const goToPath = (targetPath: string) => {
  drawer.value = false
  router.push(targetPath)
}

//Navbar被點擊後觸發
const handleSelect = (key: string, keyPath: string[]) => {
  console.log('被點擊')
  drawer.value = false

}

const openDrawer = () => {
  drawer.value = true
}



</script>

<style lang="scss" scoped>
.top-space {
  display: none;
  // background: rgb(225, 235, 250);
  background: #1C2B6E;
  height: 8px; //5vh

  @media screen and (max-width:850px) {
    display: block;
  }
}


.PC-menu-box {

  .el-menu {
    /** 重製element plus menu組件變量 */
    --el-menu-text-color: #1C2B6E !important;
    --el-menu-active-color: #6A6969 !important;
    --el-menu-hover-text-color: #6A6969 !important;
    --el-menu-hover-bg-color: none !important;
    --el-menu-item-font-size: 1rem !important;
    --el-menu-bg-color: none;
  }


  .el-menu-item {
    /** 重製element plus menu-item組件變量 */
    --el-menu-text-color: #1C2B6E !important;
    --el-menu-active-color: #6A6969 !important;
    --el-menu-hover-text-color: #6A6969 !important;
    --el-menu-hover-bg-color: none !important;
    --el-menu-base-level-padding: 0;
    margin: 0 20px;
    transition: none !important;


    //重製被點擊時的下底線、背景色、字體色效果
    &.is-active {
      background-color: transparent !important;
      color: inherit !important;
      border-bottom: none;
    }
  }

  :deep(.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title) {
    border-bottom: none;
  }


}


.PC-menu-box {
  width: 100%;
  background: #C0DEE6;
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media screen and (max-width:850px) {
    display: none;
  }

  .logo-box {
    min-width: 170px;
    width: 250px;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: 7.5%;
    padding-right: 5%;
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  .PC-navbar {
    padding-right: 7.5%;
    background: #C0DEE6;
    border: none;
    font-weight: 700;



    li {
      letter-spacing: 0.3rem;
    }

  }
}

.mobile-navbar {
  background: #C0DEE6;
  border-bottom: none;
  display: none;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-top: 8px;

  @media screen and (max-width:850px) {
    display: flex;

  }

  .left {
    margin-right: 7%;
    margin-left: 3%;

    .icon-box {

      img {
        width: 2.5rem;
        height: 35px;

        @media screen and (max-width:450px) {
          width: 2rem;

        }

      }
    }

  }

  .right {
    img {
      width: 100%;

      @media screen and (max-width:850px) {
        max-width: 35%;
      }

    }
  }


}


.mobile-drawer-box {

  :deep(.el-drawer__header) {
    background-color: #C3E2EA;
    padding-bottom: var(--el-drawer-padding-primary);
    margin-bottom: 0;
  }

  :deep(.el-drawer__body) {
    padding: 0;
    padding-left: 10px;

  }

  :deep(.el-menu-item),
  :deep(.el-sub-menu__title) {
    color: #1C2B6E;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    font-weight: 550;
    font-family: serif;
  }

  :deep(.el-sub-menu .el-menu-item) {
    color: #647DBD;

  }

  :deep(.el-sub-menu .el-menu-item::before) {
    content: '';
    border-left: 1px solid #647DBD;
    height: 100%;
    position: relative;
    left: -20px;
  }

  :deep(.el-menu-item.is-active) {
    color: #666666;
  }


  .mobile-drawer {

    img {
      width: 60%;
    }

    .drawer-menu {
      border: none;
    }
  }

}


.flex-grow {
  flex-grow: 1;
}
</style>

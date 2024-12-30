<template>

  <div class="top-space"></div>

  <el-menu :default-active="activeIndex" class="PC-navbar" :ellipsis="false" mode="horizontal" @select="handleSelect">

    <el-menu-item index="0" class="no-hover" @click="goToPath('/')" >

      <!-- <div class="imgBox" style="width: 50px;"> -->

      <img ref="logoImg" class="logoImg" src="/img/logo01.png" alt="Element logo" />

      <!-- </div> -->
    </el-menu-item>

    <!-- <div class="flex-grow" ></div> -->

    <!-- <el-menu-item index="1" @click="goToPath('/')">首頁</el-menu-item> -->


    <el-sub-menu index="2">
      <template #title>團隊介紹</template>
      <el-menu-item index="2-1" @click="goToPath('/introduce')">成員介紹</el-menu-item>
      <el-menu-item index="2-2">醫療優勢</el-menu-item>

    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>一般民眾</template>
      <el-menu-item index="3-1" @click="goToPath('/education')">疾病及治療介紹</el-menu-item>
      <el-menu-item index="3-2" @click="goToPath('/article')">醫學新知</el-menu-item>
    </el-sub-menu>
    
    <el-menu-item index="4">手術衛教</el-menu-item>
    <el-menu-item index="5" @click="goToPath('/professional')">醫學專業資訊</el-menu-item>
    <el-menu-item index="6" @click="goToPath('login')">會員登入</el-menu-item>
    <el-menu-item index="7" @click="goToPath('contact')">聯絡我們</el-menu-item>

  </el-menu>




  <!-- 手機navbar -->
  <el-menu :default-active="activeIndex" :ellipsis="false" class="mobile-navbar" mode="horizontal"
    @select="handleSelect">

    <el-menu-item class="no-hover" @click="goToPath('/')">
      <div class="imgBox" style="width: 50px;">
        <img style="width: 100%" src="/img/logo01.png" alt="Element logo" />
      </div>
    </el-menu-item>

    <el-menu-item @click="openDrawer">
      <el-icon>
        <ElIconFold />
      </el-icon>

    </el-menu-item>

  </el-menu>

  <!-- 手機抽屜選單 -->
  <el-drawer v-model="drawer" class="mobile-drawer" title="I am the title" size="80%">
    <template #header>
      <h2>新川醫療</h2>
    </template>

    <el-menu :default-active="activeIndex" class="drawer-menu" :ellipsis="false" @select="handleSelect">
      <!-- <div class="flex-grow" ></div> -->

      <el-menu-item index="1" @click="goToPath('/')">首頁</el-menu-item>


      <el-sub-menu index="2">
        <template #title>團隊介紹</template>
        <el-menu-item index="2-1" @click="goToPath('/introduce')">成員介紹</el-menu-item>
        <el-menu-item index="2-2">醫療優勢</el-menu-item>

      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>一般民眾</template>
        <el-menu-item index="3-1" @click="goToPath('/education')">疾病及治療介紹</el-menu-item>
        <el-menu-item index="3-2" @click="goToPath('/article')">醫學新知</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="4">手術衛教</el-menu-item>
      <el-menu-item index="5" @click="goToPath('/professional')">醫學專業資訊</el-menu-item>
      <el-menu-item index="6" @click="goToPath('/login')">會員登入</el-menu-item>
      <el-menu-item index="7" @click="goToPath('contact')">聯絡我們</el-menu-item>

    </el-menu>


  </el-drawer>

</template>

<script lang="ts" setup>

import { ref } from 'vue'
let drawer = ref(false)
const activeIndex = ref('1')
const router = useRouter()

//獲取logoImg的Dom元素
const logoImg = ref()

//獲取滑鼠滾動的全局
const scrollPosition = useScrollPosition()
//獲取視口寬度
const viewportWidth = useViewportWidth()


//監聽滑鼠滾動的全局變量
watch(scrollPosition, () => {
  if (scrollPosition.value > 200) {
    logoImg.value.style.height = '50px'
  } else {
    logoImg.value.style.height = '62px'
  }
})

const goToPath = (targetPath: string) => {
  drawer.value = false
  router.push(targetPath)
}

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const openDrawer = () => {
  drawer.value = true
}




</script>

<style lang="scss" scoped>
.top-space {
  // background: rgb(225, 235, 250);
  background: #C0DEE6;
  height: 10px;
}

.PC-navbar {
  // background: rgb(225, 235, 250);
  background: #C0DEE6;
  border: none;
  font-weight: 700;
  position: sticky;
  z-index: 5;
  top: 0;

  .logoImg {
    width: 60px;
    transition: height 1s ease;
  }


  :deep(.el-sub-menu__title) {
    font-size: 1rem;
  }

  :deep(.el-menu-item) {
    font-size: 1rem;
  }

  @media screen and (max-width:481px) {
    display: none;
  }
}

.mobile-navbar {
  background: rgb(225, 235, 250);
  border-bottom: none;
  display: none;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width:481px) {
    display: flex;
  }

}

.mobile-drawer {
  .drawer-menu {
    border: none;
  }
}


.flex-grow {
  flex-grow: 1;
}


/* 覆盖特定 el-menu-item 的 hover 样式 */
.no-hover:hover {
  background-color: transparent !important;
  color: inherit !important;
}

/* 覆盖特定 el-menu-item 的激活样式 */
.no-hover.is-active {
  background-color: transparent !important;
  color: inherit !important;
}


/**覆蓋箭頭樣式，可選擇要不要 */
:deep(.el-sub-menu__title) {
  padding-right: var(--el-menu-base-level-padding) !important;
  font-size: 1rem;
}
</style>

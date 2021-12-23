<template>
  <el-container class="basic-layout">
    <Sidebar />
    <el-container :class="sidebarCollapsed ? 'collapsed' : ''" class="container">
      <Header/>
      <!-- <TabsView/> -->
      <el-main>
          <div class="container-body">
            <router-view/>
          </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Sidebar from '@/layouts/components/Sidebar.vue'
import Header from '@/layouts/components/Header.vue'
import {useStore} from "vuex"
export default defineComponent({
  name: 'BasicLayout',
  components: {
    Sidebar,
    Header
  },
  setup(props) {
    const store = useStore();
    const sidebarCollapsed = store.state.layout.sidebarCollapsed
    return {
      sidebarCollapsed
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.basic-layout {
  height: 100vh;

  .container {
    position: fixed;
    top: 0;
    left: $sidebarWidth;
    display: block;
    width: calc(100vw - #{$sidebarWidth});
    height: 100vh;
    transition: left $sidebarCollapseTransitionDuration;
    z-index: 2;

    &.collapsed {
      left: $sidebarWidthCollapsed;
      width: calc(100vw - #{$sidebarWidthCollapsed});
    }
    .el-main{
      background: $infoMainColor;
      .container-body {
        background-color: $containerBg;
        height: calc(100vh - #{$headerHeight} - #{$tabsViewHeight});
        overflow: auto;
        padding: 20px;
      }
    }
    
  }
}
</style>

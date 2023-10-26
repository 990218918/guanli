<template>
  <div class="common-layout">
    <el-container class="all">
      <common-aside />
      <el-container class="right">
        <common-header />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";

export default defineComponent({
  components: {
    CommonHeader,
    CommonAside,
  },
});
</script>

<style lang="less">
.common-layout {
  height: 100%;
  .all {
    height: 100%;
  }
  .right {
    flex-wrap: wrap;
    .el-main {
      background-color: #f0f2f5;
      height: calc(100% - 100px);
      padding: 0;
    }
  }
}
// .el-main {
//   background-color: #f0f2f5;
//   width: min-content;
//   padding: 0;
//   height: calc(100% - 100px);
// }
</style>

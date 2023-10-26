<template>
    <el-aside>
          <el-menu
            background-color="#545c64"
            text-color="#fff"
          >
            <h5>A2</h5>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><House /></el-icon>
                <span>首页</span>
              </template>
                <el-menu-item
                  v-for="item in list"
                  :index="item.path"
                  :key="item.path"
                  @click="clickMenu(item)"
                >
                  {{item.label}}
                </el-menu-item>
            </el-sub-menu>
          </el-menu>
    </el-aside>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const list = [
      {
        path: "/check",
        name: "check",
        label:"每日质检",
      },
      {
        path: "/collect",
        name: "collect",
        label:"汇总",
      },
      {
        path: "/information",
        name: "information",
        label:"外包信息",
      },
    ]

    const router = useRouter();

    const clickMenu = (item) => {
      router.push({
        name:item.name
      })
    }

    return {
      list,
      clickMenu,
    }
  },
}
</script>

<style lang="less" scoped>
.el-aside{

    width: 260px;
    height: 100%;
    .el-menu{
        height: 100%;
        background-color: #041527;
        h5{
            margin: 0;
            padding: 15px;
            font-size: 16px;
            color: #fff;
        }
    }
}
</style>
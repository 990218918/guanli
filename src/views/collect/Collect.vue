<template>
  <div class="form">
    <div class="btn">
      <el-button
        v-for="item in btnList"
        :index="item.path"
        :key="item.path"
        @click="clickMenu(item)"
        :plain="false"
      >
        {{ item.label }}
      </el-button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const btnList = [
      {
        path: "/andingdan",
        name: "andingdan",
        label: "按订单汇总",
      },
      {
        path: "/anshangpin",
        name: "anshangpin",
        label: "按商品汇总",
      },
      {
        path: "/ankehu",
        name: "ankehu",
        label: "按客户汇总",
      },
      {
        path: "/anri",
        name: "anri",
        label: "按日汇总",
      },
    ];

    const router = useRouter();

    const clickMenu = (item) => {
      router.push({
        name: item.name,
      });
    };

    return {
      btnList,
      clickMenu,
    };
  },
};
</script>

<style lang="less" scoped>
.form {
  margin: 10px;
  padding: 10px 20px;
  background-color: #fff;
  height: calc(100% - 40px);
  .btn {
    display: flex;
    height: 50px;
    align-items: center;
    .el-button {
      width: 120px;
      height: 40px;
    }
    .el-button:focus {
      background-color: #ccc;
      color: #606266;
      border: 2px solid #498ef3;
    }
    .el-button:hover {
      border: 2px solid #498ef3;
      color: #606266;
      background-color: #fff;
    }
  }
}
</style>
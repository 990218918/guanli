<template>
  <el-form :inline="true" :model="formInline" class="up">
    <el-form-item class="limit">
      <el-input v-model="formInline.xsbm" placeholder="销售编码"></el-input>
      <el-input v-model="formInline.gysmc" placeholder="供应商名称"></el-input>
      <el-input v-model="formInline.spmc" placeholder="商品名称"></el-input>
      <el-input v-model="formInline.spbm" placeholder="商品别名"></el-input>
      <el-select v-model="formInline.spfl" placeholder="商品分类">
        <el-option label="畜牧-牛肉-高质" value="畜牧-牛肉-高质" />
      </el-select>
      <el-select v-model="formInline.spdw" placeholder="商品单位">
        <el-option label="斤" value="斤" />
      </el-select>
      <el-select v-model="formInline.djzt" placeholder="单据状态">
        <el-option label="已预定" value="已预定" />
        <el-option label="已完成" value="已完成" />
      </el-select>
    </el-form-item>
    <el-form-item class="time">
      <div class="block">
        <el-date-picker
          type="datetimerange"
          range-separator="至"
          start-placeholder="创建开始时间"
          end-placeholder="创建结束时间"
        />
      </div>
      <el-button @click="handleSearch">查询</el-button>
      <el-button @click="handlereset">重置</el-button>
    </el-form-item>
  </el-form>
  <div class="down">
    <div class="out">
      <el-icon><UploadFilled /></el-icon>
      <span>导出</span>
    </div>
    <div class="table">
      <el-table
        :data="
          tableData.slice(
            (config.pageIndex - 1) * config.pageSize,
            config.pageIndex * config.pageSize
          )
        "
        border
        style="width: 100%"
        max-height="320"
        show-summary
        :summary-method="getSummaries"
      >
        <el-table-column
          v-for="item in tableHeader"
          :index="item.id"
          :key="item.id"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="config.pageIndex"
      :page-size="config.pageSize"
      small
      background
      layout="prev, pager, next"
      :total="config.total"
      class="mt-4"
    />
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const tableHeader = [
      {
        id: 1,
        prop: "cgbm",
        label: "采购编码",
        width: "220",
      },
      {
        id: 2,
        prop: "gysmc",
        label: "供应商名称",
        width: "110",
      },
      {
        id: 3,
        prop: "spmc",
        label: "商品名称",
        width: "110",
      },
      {
        id: 4,
        prop: "spbm",
        label: "商品别名",
        width: "110",
      },
      {
        id: 5,
        prop: "spfl",
        label: "商品分类",
        width: "150",
      },
      {
        id: 6,
        prop: "spdw",
        label: "商品单位",
        width: "110",
      },
      {
        id: 7,
        prop: "cgdj",
        label: "采购单价",
        width: "110",
      },
      {
        id: 8,
        prop: "cgsl",
        label: "采购数量",
        width: "110",
      },
      {
        id: 9,
        prop: "rksl",
        label: "入库数量",
        width: "110",
      },
      {
        id: 10,
        prop: "cgzl",
        label: "采购重量",
        width: "110",
      },
      {
        id: 11,
        prop: "cgje",
        label: "采购金额",
        width: "110",
      },
      {
        id: 12,
        prop: "djzt",
        label: "单据状态",
        width: "150",
      },
      {
        id: 13,
        prop: "cjsj",
        label: "创建时间",
        width: "",
      },
    ];

    const tableData = [
      {
        cgbm: "CG202312121512021542",
        gysmc: "A供应商",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "147",
        cgsl: "145",
        rksl: "145",
        cgzl: "145",
        cgje: "2400",
        djzt: "已预定",
        cjsj: "2023-12-12 15:20",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "147",
        cgsl: "145",
        rksl: "145",
        cgzl: "145",
        cgje: "2400",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "147",
        cgsl: "145",
        rksl: "145",
        cgzl: "145",
        cgje: "2400",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "CG202312121512021543",
        gysmc: "B供应商",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "150",
        cgsl: "200",
        rksl: "200",
        cgzl: "200",
        cgje: "3300",
        djzt: "已预定",
        cjsj: "2023-12-12 15:20",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "150",
        cgsl: "200",
        rksl: "200",
        cgzl: "200",
        cgje: "3300",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "CG202312121512021544",
        gysmc: "C供应商",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "148",
        cgsl: "100",
        rksl: "100",
        cgzl: "100",
        cgje: "1500",
        djzt: "已预定",
        cjsj: "2023-12-12 15:20",
      },
      {
        cgbm: "CG202312121512021545",
        gysmc: "D供应商",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "145",
        cgsl: "180",
        rksl: "180",
        cgzl: "180",
        cgje: "2900",
        djzt: "已预定",
        cjsj: "2023-12-12 15:20",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "145",
        cgsl: "180",
        rksl: "180",
        cgzl: "180",
        cgje: "2900",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "CG202312121512021546",
        gysmc: "E供应商",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "149",
        cgsl: "150",
        rksl: "150",
        cgzl: "150",
        cgje: "2500",
        djzt: "已预定",
        cjsj: "2023-12-12 15:20",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "149",
        cgsl: "150",
        rksl: "150",
        cgzl: "150",
        cgje: "2500",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "149",
        cgsl: "150",
        rksl: "150",
        cgzl: "150",
        cgje: "2500",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "CG202312121512021542",
        gysmc: "A供应商",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "147",
        cgsl: "145",
        rksl: "145",
        cgzl: "145",
        cgje: "2400",
        djzt: "已预定",
        cjsj: "2023-12-12 15:20",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "147",
        cgsl: "145",
        rksl: "145",
        cgzl: "145",
        cgje: "2400",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "147",
        cgsl: "145",
        rksl: "145",
        cgzl: "145",
        cgje: "2400",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "CG202312121512021543",
        gysmc: "B供应商",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "150",
        cgsl: "200",
        rksl: "200",
        cgzl: "200",
        cgje: "3300",
        djzt: "已预定",
        cjsj: "2023-12-12 15:20",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "150",
        cgsl: "200",
        rksl: "200",
        cgzl: "200",
        cgje: "3300",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "CG202312121512021544",
        gysmc: "C供应商",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "148",
        cgsl: "100",
        rksl: "100",
        cgzl: "100",
        cgje: "1500",
        djzt: "已预定",
        cjsj: "2023-12-12 15:20",
      },
      {
        cgbm: "CG202312121512021545",
        gysmc: "D供应商",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "145",
        cgsl: "180",
        rksl: "180",
        cgzl: "180",
        cgje: "2900",
        djzt: "已预定",
        cjsj: "2023-12-12 15:20",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "145",
        cgsl: "180",
        rksl: "180",
        cgzl: "180",
        cgje: "2900",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "CG202312121512021546",
        gysmc: "E供应商",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "149",
        cgsl: "150",
        rksl: "150",
        cgzl: "150",
        cgje: "2500",
        djzt: "已预定",
        cjsj: "2023-12-12 15:20",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "149",
        cgsl: "150",
        rksl: "150",
        cgzl: "150",
        cgje: "2500",
        djzt: "",
        cjsj: "",
      },
      {
        cgbm: "",
        gysmc: "",
        spmc: "公牛",
        spbm: "",
        spfl: "畜牧-牛肉-高质",
        spdw: "斤",
        cgdj: "149",
        cgsl: "150",
        rksl: "150",
        cgzl: "150",
        cgje: "2500",
        djzt: "",
        cjsj: "",
      },
    ];

    const config = reactive({
      pageIndex: 1,
      pageSize: 6,
      total: 22,
    });

    const handleSizeChange = (pageSize) => {
      config.pageSize = pageSize;
    };

    const handleCurrentChange = (val) => {
      config.pageIndex = val;
    };

    const getSummaries = (param) => {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总计";
          return;
        } else if (index >= 3) {
          const values = data.map((item) => Number(item[column.property]));
          if (!values.every((value) => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            switch (column.property) {
              case "cjsj":
              case "djzt":
              case "spdw":
              case "spfl":
              case "spbm":
              case "spmc":
              case "gysmc":
                return (sums[index] = "");
            }
          } else {
            sums[index] = "";
          }
        } else {
          sums[index] = "";
        }
      });
      return sums;
    };

    const formInline = reactive({
      xsbm: "",
      gysmc: "",
      spmc: "",
      spbm: "",
      spfl: "",
      spdw: "",
      djzt: "",
    });

    const listData = [];

    const handleSearch = () => {
      console.log("111", formInline.xsbm, formInline.djzt);
      this.listData = this.tableData;
      this.tableData = [...this.tableData].filter((i) => {
        return (
          i.xsbm.toLowerCase().includes(this.formInline.xsbm.toLowerCase()) &&
          i.gysmc.toLowerCase().includes(this.formInline.gysmc.toLowerCase()) &&
          i.spmc.toLowerCase().includes(this.formInline.spmc.toLowerCase()) &&
          i.spbm.toLowerCase().includes(this.formInline.spbm.toLowerCase()) &&
          i.spfl.toLowerCase().includes(this.formInline.spfl.toLowerCase()) &&
          i.spdw.toLowerCase().includes(this.formInline.spdw.toLowerCase()) &&
          i.djzt.toLowerCase().includes(this.formInline.djzt.toLowerCase())
        );
      });
    };

    const handlereset = () => {
      this.formInline = {
        xsbm: "",
        gysmc: "",
        spmc: "",
        spbm: "",
        spfl: "",
        spdw: "",
        djzt: "",
      };
      this.tableData = this.listData;
    };

    return {
      tableData,
      tableHeader,
      getSummaries,
      config,
      handleSizeChange,
      handleCurrentChange,
      formInline,
      handleSearch,
      handlereset,
      listData,
    };
  },
};
</script>

<style lang="less" scoped>
.up {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ccc;
  .limit {
    display: flex;
    height: 50px;
    margin: 0;
    :deep(.el-form-item__content) {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }
    .el-select,
    .el-input {
      width: 200px;
      height: 40px;
    }
    :deep(.el-tooltip__trigger) {
      height: 100%;
      .el-input--suffix {
        height: 100%;
      }
    }
  }
  .time {
    display: flex;
    height: 70px;
    align-items: center;
    :deep(.el-range-editor.el-input__wrapper) {
      height: 50px;
      width: 350px;
    }
    .el-button {
      width: 70px;
      margin-left: 20px;
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
.down {
  .out {
    margin: 10px 0;
    cursor: pointer;
    span {
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .table {
    :deep(.el-table__cell) {
      font-size: 14px;
      font-weight: normal;
      color: #000;
    }
  }
  .el-pagination {
    float: right;
    margin-top: 20px;
  }
}
</style>
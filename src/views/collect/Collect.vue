<template>
  <div class="form">
    <div class="up">
      <div class="btn">
        <el-button>按订单汇总</el-button>
        <el-button>按订单汇总</el-button>
        <el-button>按订单汇总</el-button>
        <el-button>按订单汇总</el-button>
      </div>
      <div class="limit">
        <el-input placeholder="销售编码"></el-input>
        <el-input placeholder="销售编码"></el-input>
        <el-input placeholder="销售编码"></el-input>
        <el-input placeholder="销售编码"></el-input>
        <el-select placeholder="商品分类"></el-select>
        <el-select placeholder="商品分类"></el-select>
        <el-select placeholder="商品分类"></el-select>
      </div>
      <div class="time">
        <div class="block">
          <el-date-picker
            type="datetimerange"
            range-separator="至"
            start-placeholder="创建开始时间"
            end-placeholder="创建结束时间"
          />
        </div>
        <el-button>查询</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
    <div class="down">
      <div class="out">
        <el-icon><UploadFilled /></el-icon>
        <span>导出</span>
      </div>
      <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="采购编码" width="220" />
          <el-table-column prop="name" label="供应商名称" width="110" />
          <el-table-column prop="address" label="商品名称" width="110" />
          <el-table-column prop="address" label="商品别名" width="110" />
          <el-table-column prop="address" label="商品分类" width="150" />
          <el-table-column prop="address" label="商品单位" width="110" />
          <el-table-column prop="address" label="采购单价" width="110" />
          <el-table-column prop="address" label="采购数量" width="110" />
          <el-table-column prop="address" label="入库数量" width="110" />
          <el-table-column prop="address" label="采购重量" width="110" />
          <el-table-column prop="address" label="采购金额" width="110" />
          <el-table-column prop="address" label="单据状态" width="150" />
          <el-table-column prop="address" label="创建时间" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.form {
  margin: 10px;
  padding: 10px 20px;
  background-color: #fff;
  height: calc(100% - 40px);
  .up {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #ccc;
    .btn {
      height: 50px;
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
    .limit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      .el-select,
      .el-input {
        width: 200px;
        height: 40px;
      }
      /deep/.el-tooltip__trigger {
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
      /deep/.el-range-editor.el-input__wrapper {
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
      /deep/.el-table__cell {
        font-size: 14px;
        font-weight: normal;
        color: #000;
      }
    }
  }
}
</style>
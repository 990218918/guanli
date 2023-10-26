<template>
    <el-header>
        <div class="up">
            <div class="left">
                <el-icon>
                    <Fold />
                </el-icon>
                <span>欢迎进入管理平台</span>
                <span style="color:#498ef3">内部系统使用手册></span>
            </div>
            <div class="right">
                <div style="color:#ed785d">
                    <el-icon>
                        <Calendar />
                    </el-icon>
                    <span>授课日程</span>
                </div>
                <div>
                    <el-icon>
                        <DocumentAdd />
                    </el-icon>
                    <span>导入/导出任务</span>
                </div>
                <div>
                    <img src="../assets/images/user.jpg" alt="">
                    <span>泡泡侠</span>
                </div>
            </div>
        </div>
        <div class="down">
            <el-breadcrumb separator="">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>
                <a href="/">导航页名</a>
              </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
    </el-header>
</template>

<style lang="less" scoped>
.el-header{
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100%;
    padding: 0;
    .up{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        height: 50px;
        .left{
        display: flex;
        align-items: center;
        .el-icon,span{
            padding-left: 15px;
            cursor:pointer;
        }
    }
    .right{
        display: flex;
        align-items: center;
        div,span{
            display: flex;
            padding-right: 15px;
            align-items: center;
            cursor:pointer;
        }
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 15px;
        }
    }
    }
    .down{
        height: 50px;
        border-bottom: 1px solid #ccc;
        .el-breadcrumb{
            display: flex;
            height: 100%;
            align-items: center;
            padding-left: 15px;
            /deep/.el-breadcrumb__inner.is-link{
                font-weight: normal;
                padding: 5px;
            }
            /deep/.el-breadcrumb__inner.is-link:hover{
                color: #498ef3;
                border-bottom: 2px solid #498ef3;
            }
        }
    }
}
</style>
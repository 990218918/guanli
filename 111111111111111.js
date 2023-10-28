//列求和
getSummaries(param) {
    const { columns, data } = param;//这里可以看出，自定义函数会传入每一列，以及数据
    const sums = [];
    columns.forEach((column, index) => {
        if (index === 0) {
            sums[index] = '总计';
            return;
        } else if (index >= 3) { //index>=3后的列进行求和               
            //页面分别统计 处理
            const values = data.map(item => Number(item[column.property]));
            if (!values.every(value => isNaN(value))) {
                sums[index] = values.reduce((prev, curr) => {
                    const value = Number(curr);
                    if (!isNaN(value)) {
                        return prev + curr;
                    } else {
                        return prev;
                    }
                }, 0);
                //此处结合了方式一的判断处理，实现多种条件处理
                //此处的column.property获取的值对应<el-table-column>中prop对应的字段
                switch (column.property) {
                    case "total1":
                    case "total2":
                    case "total3":
                        return sums[index] = sums[index];
                        break;
                }

            } else {
                sums[index] = '--'; //如果列的值有一项不是数字，就显示这个自定义内容
            }
        } else {
            sums[index] = '--'
        }
    });
    return sums;//最后返回合计行的数据
},


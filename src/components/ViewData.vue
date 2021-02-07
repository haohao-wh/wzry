<template>
  <div id="view-data">
    <el-table
      :data="tableData"
      style="width: 98%;padding: 4px;height: 98%"
      :header-cell-style="{textAlign: 'center'}"
      :cell-style="{ textAlign: 'center' }">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="230">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="button" size="mini" >详情</el-button>
          <el-button type="button" size="mini">编辑</el-button>
          <el-button type="button" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "ViewData",
    methods: {
      handleClick(row) {
        console.log(row);
        this.$confirm('', '详情', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }

    },
    data(){
      return  {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style scoped>
  #view-data {
    background: dodgerblue;
    margin: 0px auto;
  }
</style>

<template>
  <Layout>
    <!-- 使用布局组件 -->
    <!-- 页面内容 -->

    <!-- 页面特定的内容 -->
    
  </Layout>
  <div class="itemShow">
    <!-- 表格 -->
    <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class="block" style="margin-top:15px;">
      <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="currentPage" :page-sizes="[1, 5, 10, 20]" :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  import Layout from "@/components/leftTop.vue"; // 引入布局组件

export default {

  components: {
    Layout   // 注册布局组件

  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "第一页",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "第二页",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "第三页",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "第四页",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-01",
          name: "第五页",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "第六页",
          address: "上海市普陀区金沙江路 1516 弄"
        },
      ],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 2 // 每页的数据条数
    };
  },
  methods: {
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  }
};
</script>

<style>
.itemShow{
  position: absolute;
  left: 20%;
  top:20%;
  
}
</style>
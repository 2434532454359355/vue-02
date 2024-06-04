<template>
  <div class="itemShow">
    <div class="items-grid">
      <div class="item" v-for="item in paginatedItems" :key="item.id">
        <img :src="item.image" alt="Item Image" class="item-image">
        <h3 class="item-title">{{ item.title }}</h3>
        <p class="item-description">{{ item.description }}</p>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="block" style="margin-top:15px;">
      <el-pagination
        align="center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="items.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          image: require('@/assets/水杯.jpg'),
          title: "雨伞",
          description: "这是物品1的简要描述"
        },
        {
          id: 2,
          image: require('@/assets/电子手表.jpg'),
          title: "物品2",
          description: "这是物品2的简要描述"
        },
       {
          id: 1,
          image: require('@/assets/书.jpg'),
          title: "雨伞",
          description: "这是物品1的简要描述"
        },
        {
          id: 2,
          image: require('@/assets/耳机.jpg'),
          title: "物品2",
          description: "这是物品2的简要描述"
        },
        {
          id: 1,
          image: require('@/assets/水杯.jpg'),
          title: "雨伞",
          description: "这是物品1的简要描述"
        },
        {
          id: 2,
          image: require('@/assets/水杯.jpg'),
          title: "物品2",
          description: "这是物品2的简要描述"
        },
        // 继续添加其他物品...
      ],
      currentPage: 1,
      pageSize: 6
    };
  },
  computed: {
    paginatedItems() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.items.slice(start, end);
    }
  },
  methods: {
    handleSizeChange(val) {
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

<style scoped>
.itemShow {
  position: absolute;
  left: 12%;
  top: 22%;
  width: 60%;
 
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1%;
 
}

.item {
  border: 1px solid #ccc;
  padding: 2%;
   height:100%;
  text-align: center;
}

.item-image {
   max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto; /* 重置图片的高度和宽度，保持比例 */
}

.item-title {
  font-size: 1.2em;
  margin: 10px 0;
}

.item-description {
  color: #666;
}
</style>

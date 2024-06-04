
 <template>
  <Layout>
 

  </Layout>
  <addItem></addItem>
</template>

<script>
import Layout from "@/components/leftTop.vue"; // 引入布局组件
import Pagination from "../components/Pagination.vue";
import addItem from "@/components/addItem.vue";

export default {
  components: {
    Layout, // 注册布局组件
    
    addItem
  },
  data() {
    return {
      
    }
  },
  
};
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
}

.container {
  position: fixed;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.container button {
  width: 15%;
  height: 8%;
  font-size: 1.5rem;
}

.main-content {
  padding: 120px 20px 20px; /* 使内容不会被头部遮挡 */
  max-width: 1200px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.grid-item {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.item-image {
  width: 100%;
  height: auto;
}

.item-title {
  font-size: 18px;
  margin: 10px 0;
}

.item-description {
  font-size: 14px;
  color: #555;
}
</style>

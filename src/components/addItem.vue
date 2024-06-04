<!-- <template>
  <div class="app">
    <main class="app-main">
      <div class="grid-container">
        <div v-for="item in items" :key="item.id" class="grid-item">
          <img :src="item.image" alt="商品图片" class="item-image" />
          <h2 class="item-title">{{ item.title }}</h2>
          <p class="item-description">{{ item.description }}</p>
        </div>
      </div>
    </main>
  </div>


</template>

<script>
export default {
  data() {
    return {
      items: [], // 存储物品信息的数组
      page: 1, // 当前加载的页码
      loading: false, // 是否正在加载
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll); // 监听窗口的滚动事件
    this.loadMoreItems(); // 初始化加载物品
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); // 组件销毁前移除滚动事件监听
  },
  methods: {
    loadMoreItems() {
      if (this.loading) return;
      this.loading = true;
      
      // 模拟API请求
      setTimeout(() => {
        const newItems = Array.from({ length: 20 }, (_, index) => ({
          id: (this.page - 1) * 20 + index + 1,
          image: 'https://via.placeholder.com/150',
          title: `商品 ${((this.page - 1) * 20) + index + 1}`,
          description: '这是一个商品的简短描述。',
        }));

        this.items = [...this.items, ...newItems];
        this.page++;
        this.loading = false;
      }, 1000);
    },
    handleScroll() {
      const bottomOfWindow = 
        Math.round(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

      if (bottomOfWindow) {
        this.loadMoreItems();
      }
    }
  }
};


</script>
 -->
<template>
  <div class="app">
    <main class="app-main">
      <div class="grid-container">
        <div v-for="item in items" :key="item.id" class="grid-item">
          <img :src="item.image" alt="商品图片" class="item-image" />
          <h2 class="item-title">{{ item.title }}</h2>
          <p class="item-description">{{ item.description }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], // 存储当前显示的物品
      page: 1, // 当前加载的页码
      itemsPerPage: 20, // 每页加载的物品数量
      loading: false, // 是否正在加载
      allItems: [], // 全部的物品数组
        // 添加一个变量来记录上次加载数据的时间
  lastLoadTime: null,
    };
  },
  mounted() {
    // 模拟现有的物品数据
    this.allItems = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      image: 'https://via.placeholder.com/150',
      title: `商品 ${index + 1}`,
      description: '这是一个商品的简短描述。',
    }));

    window.addEventListener('scroll', this.handleScroll); // 监听窗口的滚动事件
    this.loadMoreItems(); // 初始化加载物品
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); // 组件销毁前移除滚动事件监听
  },
  methods: {
    loadMoreItems() {
      if (this.loading) return;
      this.loading = true;

      setTimeout(() => {
        const start = (this.page - 1) * this.itemsPerPage;
        const end = this.page * this.itemsPerPage;
        const newItems = this.allItems.slice(start, end);

        this.items = [...this.items, ...newItems];
        this.page++;
        this.loading = false;
      }, 1000);
    },

  
    handleScroll() {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - (this.lastLoadTime || 0);

    // 如果距离上次加载数据的时间超过一定阈值（比如500ms），则执行加载操作
    if (timeDiff > 500) {
      const bottomOfWindow = Math.round(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

      if (bottomOfWindow) {
        this.loadMoreItems();
        this.lastLoadTime = currentTime; // 更新上次加载数据的时间
      }
    }
  }
  }
};
</script>

<!-- <style scoped>
.app {
  font-family: Arial, sans-serif;
}

.app-header {
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.app-main {
  padding: 4% 2% 2%; /* 使内容不会被头部遮挡 */
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
</style> -->

<style scoped>
.app {
  font-family: Arial, sans-serif;
}

.app-header {
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.app-main {
  padding: 60px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.form-container, .search-container {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
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

<template>
  <div>
    <!-- 左上角的内容 -->
    <div class="leftTop">
      <img src="../assets/logo.jpg" class="logo" />
      <div>失物招领</div>
      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          @keydown.enter="performSearch"
          placeholder="搜索商品"
        />
        <button @click="performSearch">搜索</button>
   
        <button @click="gotoSubmitView" class="submit">添加物品</button>
 
      </div>
    </div>

    <!-- 侧边导航栏 -->
    <div class="slider-container" @mouseover="showSlider" @mouseleave="hideSlider">
      <div class="sidebar" :class="{ 'visible': isSliderVisible }">
        <router-link to="/found">招领模块</router-link>
        <router-link to="/lost">失物模块</router-link>
        <router-link to="/announce">公告模块</router-link>
        <router-link to="/message">留言模块</router-link>
        <router-link to="/manage">管理模块</router-link>
        <!-- 其他导航链接 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",

  data() {
    return {
      searchQuery: "",
      isSliderVisible: false,
    };
  },
  methods: {
    performSearch() {
      // 实现搜索逻辑，例如跳转到搜索结果页面或发起API请求
      console.log("搜索查询：", this.searchQuery);
    },
    showSlider() {
      this.isSliderVisible = true;
    },
    hideSlider() {
      this.isSliderVisible = false;
    },
    gotoSubmitView(){
      this.$router.push({name:'submit'});
    }
  }
};
</script>

<style scoped>
/* 样式 */
.leftTop {
  position: fixed;
  width: 100%;
  height: 6%;
  top: 0;
  left:0%;
  background-color: rgba(68, 74, 90, 1);
  z-index: 999;
}

.leftTop div {
  position: absolute;
  width: 45%;
  height: 49.38%;
  border-radius: 8px;
  left: 8%;
  top: 30%;
  font-family: Arial, Helvetica, sans-serif;
  font-style: oblique;
  color: #f9f9f9;
}

.logo {
  position: absolute;
  width: 5%;
  height: 80%;
  border-radius: 8px;
  left: 2%;
  top: 10%;
}

.slider-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px; /* 增加宽度，使得用户在靠近侧边时更容易触发事件 */
  height: 100%;
}

.sidebar {
  position: absolute;
  top: 7%;
  left: 0;
  width: 700%;
  height: 93%;
  background-color: rgba(68, 74, 90, 1);
  visibility: hidden; /* 初始状态隐藏 */
  opacity: 0; /* 初始状态透明 */
  transition: visibility 0s, opacity 0.3s ease;
}

.sidebar.visible {
  visibility: visible; /* 鼠标悬停时可见 */
  opacity: 1; /* 鼠标悬停时不透明 */
}

.sidebar a {
  display: block;
  padding: 5%;
  text-decoration: none;
  color: #f9f9f9;
  font-size: 1.5rem;
}

.sidebar a:hover {
  background-color: #ddd;
}

.search-container {
  display: flex;
  align-items: center;
  position: relative; /* 使搜索容器相对于父容器进行绝对定位 */
  left: 200px; /* 调整相对于父容器的横向位置 */
  top: 50px;  /* 调整相对于父容器的纵向位置 */
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  position: absolute; /* 使搜索容器相对于父容器进行绝对定位 */
  left: 20%;
}

button {
  background-color: #059d14;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  height: 180%;
  width: 10%;
  position: absolute;
  left: 120%;
}

button:hover {
  background-color: #2ebf2e;
}

.submit{
  background-color: #059d14;
  color: white;
  border-radius: 4px 4px 4px 4px;
  cursor: pointer;
  height: 180%;
  width: 23%;
  position: absolute;
  left: 133%;
}
</style>

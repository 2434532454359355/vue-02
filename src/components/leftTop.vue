<template>
  <!-- 左上角的内容 -->
  <div class="leftTop">
    <img src="../assets/logo.jpg" class="logo" />

    <div>失物招领</div>
  </div>

  <!-- 侧边导航栏 -->

  <div class="sidebar">
    <router-link to="/found">Found</router-link>
    <router-link to="/lost">Lost</router-link>
    <!-- 其他导航链接 -->
  </div>

  <!-- 页面内容插槽 -->
  <main>
    <slot></slot>
  </main>
</template>
  
<script>
export default {
  name: "Layout",
};
</script>
  
<style scoped>
/* 样式 */
.leftTop {
  position: absolute;
  width: 13.17%;
  height: 15%;
  background-color: rgba(68, 74, 90, 1);
}
.leftTop div {
  position: absolute;
  width: 39%;
  height: 49.38%;

  border-radius: 8px;
  left: 30%;
  top: 60%;
  
}

.logo {
  position: absolute;
  width: 31.6%;
  height: 49.38%;

  border-radius: 8px;
  left: 30%;
  top: 10%;
}

.sidebar {
  width: 200px;
  background-color: #f0f0f0;
}

.sidebar a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.sidebar a:hover {
  background-color: #ddd;
}
</style>
  
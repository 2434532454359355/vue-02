<template>
  <div class="login">
    <h2>登录</h2>
    <input type="text" v-model="username" placeholder="用户名">
    <input type="password" v-model="password" placeholder="密码">
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      fetch('http://your-backend-api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: this.username, password: this.password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('登录成功');
          // 可以在这里保存token，跳转页面等
          this.$router.push('/');
        } else {
          alert('登录失败: ' + data.message);
        }
      })
      .catch(error => {
        console.error('登录错误:', error);
      });
    }
  }
}
</script>

<style>
/* 样式同样可以根据需要自定义 */
</style>

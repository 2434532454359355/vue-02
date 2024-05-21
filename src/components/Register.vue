<template>
  <div class="register">
    <h2>注册</h2>
    <input type="text" v-model="username" placeholder="用户名">
    <input type="password" v-model="password" placeholder="密码">
    <button @click="register">注册</button>
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
    register() {
      fetch('http://your-backend-api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: this.username, password: this.password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('注册成功');
          this.$router.push('/login');
        } else {
          alert('注册失败: ' + data.message);
        }
      })
      .catch(error => {
        console.error('注册错误:', error);
      });
    }
  }
}
</script>

<style>
/* 样式同样可以根据需要自定义 */
</style>

<template>
  <!-- <div class="home">
    <h1>Welcome to the Home Page</h1>
    <router-link to="/login">Login</router-link> | 
    <router-link to="/register">Register</router-link>
   
  </div> -->
  <div class="home">
    <div>
      <img src="../assets/home.jpg" class="photo" />
    </div>

    <div class="rightTop">
      <span>失物招领平台系统</span>
    </div>
    <div class="rightBottom">
      <img src="../assets/user.png" class="userPhoto" />
      <input class="user" type="text" placeholder="请输入账号" />
      <img src="../assets/password.png" class="passPhoto" />
      <input class="password" type="password" placeholder="请输入密码" />
      <div class="button-container">
        <button class="register-button" @click="register">注册</button>
        <button class="login-button" @click="login">登录</button>
        <p v-if="loginErrorMessage" class="error">{{ loginErrorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      registerUsername: "",
      registerPassword: "",
      loginErrorMessage: "",
      registerErrorMessage: "",
      welcomeMessage: "",
    };
  },
  name: "HomeView",
  methods: {
    login() {
      if (this.loginUsername === "" || this.loginPassword === "") {
        this.loginErrorMessage = "用户名和密码不能为空";
        return;
      }
      //后端内容
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.loginUsername,
          password: this.loginPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            this.welcomeMessage = `欢迎, ${this.loginUsername}`;
            this.loginErrorMessage = "";
          } else {
            this.loginErrorMessage = "用户名或密码错误";
          }
        })
        .catch((error) => {
          console.error("登录错误:", error);
          this.loginErrorMessage = "登录过程中出现错误";
        });
    },
    register() {
      if (this.registerUsername === "" || this.registerPassword === "") {
        this.registerErrorMessage = "用户名和密码不能为空";
        return;
      }

      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.registerUsername,
          password: this.registerPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("注册成功");
            this.registerErrorMessage = "";
          } else {
            this.registerErrorMessage = "注册失败: " + data.message;
          }
        })
        .catch((error) => {
          console.error("注册错误:", error);
          this.registerErrorMessage = "注册过程中出现错误";
        });
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.home {
  background-color: #101010;
  width: 100%;
  height: 100vh;
}
.photo {
  position: absolute;
  left: 9%;
  top: 11%;
  width: 45%;
  height: 75%;

  display: block; /* 块级元素 */
  background-color: rgba(229, 229, 229, 1);
}
.rightTop {
  position: absolute;
  left: 60%;
  top: 24%;
  width: 35.84%;
  height: 8.7%;
  line-height: 44px;
  color: rgb(255, 255, 255);
  font-size: 400%;
  text-align: center;
  font-family: SourceHanSansSC-regular;
}
.rightBottom {
  position: absolute;
  left: 60%;
  top: 35%;
  width: 36%;
  height: 50%;
  line-height: 20px;
  border-radius: 20px;
  background-color: #bbbbbb70;
  color: #bbbbbb;
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 0px solid rgba(187, 187, 187, 1);
}
.user {
  position: absolute;
  left: 20%;
  top: 10%;
  width: 70%;
  height: 18%;
  line-height: 52px;
  border-radius: 60px;
  background-color: rgba(255, 0, 0, 0);
  color: rgba(255, 255, 255, 1);
  font-size: 36px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 5px solid rgba(255, 255, 255, 1);
}
.password {
  position: absolute;
  left: 20%;
  top: 40%;
  width: 70%;
  height: 18%;
  line-height: 52px;
  border-radius: 60px;
  background-color: rgba(255, 0, 0, 0);
  color: rgba(255, 255, 255, 1);
  font-size: 36px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 5px solid rgba(255, 255, 255, 1);
}
.userPhoto {
  position: absolute;
  left: 5%;
  top: 10%;
  width: 12%;
  height: 20%;
}
.passPhoto {
  position: absolute;
  left: 5%;
  top: 40%;
  width: 12%;
  height: 20%;
}
.button-container {
  display: flex; /* 使用 Flexbox 布局 */
}

.register-button,
.login-button {
  position: absolute;

  top: 70%;
  width: 33%;
  height: 20%;
  line-height: 20px;
  border-radius: 60px;
  background-color: rgba(0, 200, 196, 1); /* 登录按钮的背景颜色 */
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(255, 0, 0, 0);
}

.register-button {
  left: 20%;
  color: white; /* 注册按钮的文字颜色 */
}

.login-button {
  left: 60%;
  color: white; /* 登录按钮的文字颜色 */
}
</style>

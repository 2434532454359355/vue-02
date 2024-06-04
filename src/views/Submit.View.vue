<template>
  <div class="lost-and-found">
    <form @submit.prevent="submitForm">
      <div>
        <label for="image">图片:</label>
        <input type="file" id="image" @change="handleImageUpload" required />
      </div>
      <div>
        <label for="title">主题:</label>
        <input type="text" id="title" v-model="form.title" required />
      </div>
      <div>
        <label for="description">简述:</label>
        <textarea id="description" v-model="form.description" required></textarea>
      </div>
      <div>
        <label for="contact">联系方式:</label>
        <input type="text" id="contact" v-model="form.contact" required />
      </div>
      <div>
        <label for="location">地点:</label>
        <input type="text" id="location" v-model="form.location" required />
      </div>
      <div>
        <label for="time">时间:</label>
        <input type="datetime-local" id="time" v-model="form.time" required />
      </div>
      <div>
        <label for="category">类别:</label>
        <select id="category" v-model="form.category" required>
          <option value="">请选择类别</option>
          <option value="失物">失物</option>
          <option value="招领">招领</option>
        </select>
      </div>
      <button type="submit">发布招领信息</button>
    </form>
    <div v-if="submitted">
      <h3>发布的招领信息</h3>
      <img :src="form.imagePreview" alt="上传的图片" v-if="form.imagePreview"/>
      <p><strong>类别:</strong> {{ form.category }}</p>
      <p><strong>主题:</strong> {{ form.title }}</p>
      <p><strong>简述:</strong> {{ form.description }}</p>
      <p><strong>联系方式:</strong> {{ form.contact }}</p>
      <p><strong>地点:</strong> {{ form.location }}</p>
      <p><strong>时间:</strong> {{ form.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        image: null,
        imagePreview: null,
        title: '',
        description: '',
        contact: '',
        location: '',
        time: '',
        category: '' // 添加类别字段
      },
      submitted: false
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.form.image = file;
      this.form.imagePreview = URL.createObjectURL(file);
    },
    submitForm() {
      if (this.form.image && this.form.title && this.form.description && this.form.contact && this.form.location && this.form.time && this.form.category) {
        this.submitted = true;
        console.log("Form submitted:", this.form);
        // 在这里你可以添加提交到服务器的逻辑
      } else {
        alert('请填写所有必填项');
      }
      // 在提交完成后，弹出消息
      alert('提交成功！');
      // 返回上一页
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.lost-and-found {
  position: absolute;
  top: 10%;
  left: 30%;
  width: 40%;
}

form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea, select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

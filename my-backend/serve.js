const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = []; // 用于存储用户数据的数组（在实际应用中应该使用数据库）

// 注册接口
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    return res.status(400).json({ success: false, message: '用户名已存在' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });

  res.json({ success: true, message: '注册成功' });
});

// 登录接口
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (!user) {
    return res.status(400).json({ success: false, message: '用户名或密码错误' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(400).json({ success: false, message: '用户名或密码错误' });
  }

  // 生成JWT令牌
  const token = jwt.sign({ username: user.username }, 'secret', { expiresIn: '1h' });

  res.json({ success: true, token });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

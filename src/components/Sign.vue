<script setup>
import {ref} from 'vue'
import md5 from "js-md5"
import {ElMessage} from "element-plus";

const user = ref('')
const name = ref('')
const password = ref('')
const repeatPassword = ref('')
const host = 'http://astralcyber.ml:3000'

function register() {
  if (user.value === '' || name.value === '' || password.value === '' || repeatPassword.value === '') {
    ElMessage({
      message: '请填写完整信息！',
      type: 'error',
      // 赋默认值
    });
    return;
  }
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  }
  requestOptions.body = JSON.stringify({
    id: user.value,
    username: name.value,
    password: md5(password.value),
    articles: 0,
    draft: 0,
    qq: "QQ号",
    music: "平台主页",
    github: "主页链接",
    telegram: "主页链接",
    intro: "来如风雨，去似微尘",
  });
  if (repeatPassword.value !== password.value) {
    ElMessage({
      message: "两次输入的密码不一致，请检查~",
      type: 'error',
    })
  } else {
    fetch(`${host}/users`, requestOptions) // 这里的网址没有id
        .then(response => response.json())
        .then(data =>ElMessage({
          message: data.username + "，注册成功～",
          type: 'success',
          // 赋默认值
        }))
        .catch(err => ElMessage({
          message: "该用户名已被注册！",
          type: 'error',
          // 赋默认值
        }))
  }
}
</script>

<template>
  <el-avatar id="photo"
             :src="'https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=image'"/>
  <el-divider style="margin-top: 45%; margin-bottom: 12px" border-style="dashed" content-position="left"/>
  <el-row>
    <el-input v-model="user" placeholder="用户名" clearable/>
  </el-row>
  <el-row>
    <el-input v-model="name" placeholder="昵称" clearable maxlength="8" show-word-limit/>
  </el-row>
  <el-row>
    <el-col>
      <el-input
          v-model="password"
          type="password"
          placeholder="密码"
          show-password
      />
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-input
          v-model="repeatPassword"
          type="password"
          placeholder="重复密码"
          show-password
      />
    </el-col>
  </el-row>
  <el-divider style="margin:12px 0px !important;"/>
  <div id="operate">
    <el-button type="primary" size="large" @click="register">注册</el-button>
  </div>
</template>

<style scoped>
.box-card {
  width: 400px;
}

.card-header {
  font-size: xxx-large;
  font-weight: bolder;
  color: #409EFF;
  justify-content: space-between;
  align-items: center;
}

.el-row {
  margin-bottom: 10px;
}

#operate {
  text-align: right;
}
</style>

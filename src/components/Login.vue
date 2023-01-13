<script setup>
import {onBeforeMount, ref} from 'vue'
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()
const user = ref('')
const password = ref('')
const host = 'http://astralcyber.ml:3000'
const yan = ref('')
onBeforeMount(() => {
  fetch('https://v1.hitokoto.cn/?c=j&c=e&c=e&c=f&min_length=17')
      .then(response => response.json())
      .then(data => {
        yan.value = data.hitokoto;
      })
      .catch(console.error)
})

function login(fake) {
  if (fake) {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    let requestOptions = { // 里面不能有body
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    }
    fetch(`${host}/users/${user.value}`, requestOptions)
        .then(response => response.json())
        .then(data => {
              if (data.id === user.value) {   // 验证是否存在该用户return data
              } else {
                throw new Error("用户名不存在")
              }
              if (data.password === password.value) {
                if (!location.toString().match("guest")) {
                  location.replace(location.href + data.id)
                } else {
                  location.replace(location.toString().replace("guest", data.id))
                }
              } else {
                throw new Error("密码错误")
              }
            }
        )
        .catch(err => alert(err))
  } else {
    location.replace(location.href + "guest")
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
    <el-col>
      <el-input
          v-model="password"
          type="password"
          placeholder="密码"
          show-password
      />
    </el-col>
  </el-row>
  <el-row style="line-height: 34px;font-weight: bolder; font-size: 16px;">
    <span v-text="yan" style="margin: 3px 0px 3px 0px;color: #666666;white-space: pre-wrap"></span>
  </el-row>
  <el-divider style="margin:12px 0px !important;"/>
  <div id="operate">
    <el-button v-if="route.params.uuid!=='guest'" size="large" @click="login(false)">游客</el-button>
    <el-button type="primary" size="large" @click="login(true)">登录</el-button>
  </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 10px;
}

#operate {
  text-align: right;
}
</style>

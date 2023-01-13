<template>
  <el-card id="personCard">
    <el-tabs v-model="activeName" class="tabs">
      <el-tab-pane class="ele" label="HOME" name="first">
        <el-avatar id="photo"
                   :src="'https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=image'"/>
        <el-divider style="margin-top: 50%; margin-bottom: 12px" border-style="dashed" content-position="left"/>
        <div style="margin-bottom: 6px"><span id="name">{{ userInfo.username }}</span></div>
        <div><span id="intro">{{ userInfo.intro }}</span></div>
        <div id="operate">
          <el-button type="primary" size="large" @click="exit">退出登录</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane class="ele" label="ABOUT" name="second">

      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup>
import {onBeforeMount, ref} from 'vue'
import {useRoute, useRouter} from "vue-router";

const activeName = ref('first')
const userInfo = ref({
  username: "Loading",
  intro: "Loading",
})
const host = 'http://astralcyber.ml:3000'
const route = useRoute()
const router = useRouter()

function exit() {
  location.replace(location.origin);
}

onBeforeMount(() => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }
  fetch(`${host}/users/${route.params.uuid}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        userInfo.value = data;
      })
      .catch(err => alert(err))
})

</script>

<style scoped>
.el-tabs {
  --el-tabs-header-height: 53px !important;
}

.ele {
  padding: 20px;
}

#operate {
  text-align: right;
}
</style>
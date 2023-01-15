<template>
  <el-row style="height: 24px" justify="space-between" align="middle">
    <el-col :span="3">
      <span class="back" @click="back">
      ⬅ 藏典阁
    </span>
    </el-col>
    <el-col :span="10" style="text-align: center">
      <span style="font-weight: bolder;color: #666666;font-size: x-large;">{{article.topic}}</span>
    </el-col>
    <el-col :span="3">
    </el-col>
  </el-row>
  <el-divider id="divider" border-style="dashed" content-position="left"/>
  <!--      @copy-code-success="handleCopyCodeSuccess"-->
  <el-card style="border-radius: 10px !important;--el-card-padding: 0px !important;">
    <v-md-preview :text="article.content"></v-md-preview>
  </el-card>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {onBeforeMount, ref} from "vue";

const route = useRoute();
const router = useRouter()
const article = ref({
  assort: "Loading",
  author: "Loading",
  authorUuid: "Loading",
  changeDate: "Loading",
  content: "# Loading",
  createDate: "Loading",
  id: 0, intro: "Loading",
  like: 0,
  release: true,
  tag: "Loading",
  topic: "Loading",
})
const host = 'http://astralcyber.ml:3000'

onBeforeMount(() => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }
  fetch(`${host}/article/${route.params.articleId}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        article.value = data;
      })
      .catch(err => alert(err))
})

function back() {
  window.history.back();
}
</script>

<style scoped>
#divider {
  border-top: 2px rgba(129, 129, 129, 0.8) dashed !important;
}
</style>

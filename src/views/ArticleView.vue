<template>
  <el-container style="">
    <el-main>
      <el-container>
        <!--主页左侧-->
        <el-aside class="side" width="8vw">
        </el-aside>
        <!--主页中心-->
        <el-main id="articleBody">
          <el-row>
            <el-icon :size="20" style="color: #E57B89;margin-top: 1px;cursor:pointer;" @click="back">
              <Back/>
            </el-icon>
            <span style="font-weight: bolder;color: #666666;font-size: larger;margin-left: 4.5px;">{{
                article.topic
              }}</span>
          </el-row>
          <el-divider id="divider" border-style="dashed" content-position="left"/>
          <!--      @copy-code-success="handleCopyCodeSuccess"-->
          <el-card style="border-radius: 10px !important;--el-card-padding: 0px !important;">
            <v-md-preview :text="article.content"></v-md-preview>
          </el-card>
        </el-main>
        <!--主页右侧-->
          <el-aside class="side" width="30vw">
            <PersonInfo v-if="station"/>
            <LoginCard v-if="!station"/>
          </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {onBeforeMount, ref} from "vue";
import PersonInfo from "../components/PersonInfo.vue";
import LoginCard from "../components/LoginCard.vue";


const id = ref('')
const station = ref(false)
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
  if (route.params.uuid !== "guest") {
    station.value = true;
    id.value = route.params.uuid;
  } else {
    id.value = "guest"
  }
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

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
            <el-icon :size="20" style="color: #E57B89;margin-top: 1px">
              <Reading/>
            </el-icon>
            <span style="font-weight: bolder;color: #666666;font-size: larger;margin-left: 4.5px;">藏典阁</span>
          </el-row>
          <el-divider id="divider" border-style="dashed" content-position="left"/>
          <!-- 文章列表-->
          <div v-for="article in tableData">
            <el-row v-if="article.release"
                    @click="toArticle(article.id)"
                    style="cursor:pointer;">
              <el-col :span="24" style="margin-bottom: 20px">
                <el-card class="articleCard">
                  <el-row>
                    <el-col :span="10" class="articleImgBox">
                      <img :src="articleImg(article.id)" class="articleImg">
                    </el-col>
                    <el-col :span="14" style="padding: 15px">
                      <h1 style="top: 0; color: #666666;font-weight: bolder;font-size: 20px;
                      word-break:break-all;
                      margin: 0 0 10px;
                        word-wrap:break-word">{{ article.topic }}</h1>
                      <div style="height: 150px;">
                        <span style="color: #777777;width:100%;
                        display:block;
                        white-space:pre-wrap;
                        word-break:break-all;
                        word-wrap:break-word;
                        overflow:hidden;">{{ article.intro }}</span>
                      </div>
                      <span style="color: #777777;font-size: small;bottom: 10px;position: absolute;width: 55%">
                        <el-row>
                          <el-col :span="12">
                           <el-icon style="top: 2px">
                             <User/>
                           </el-icon>
                           作者：{{ article.author }}
                         </el-col>
                         <el-col :span="12">
                           <el-icon style="top: 2px">
                             <Folder/>
                           </el-icon>
                           分类：{{ article.assort }}
                         </el-col>
                          <el-col :span="12">
                           <el-icon style="top: 2px">
                             <Paperclip/>
                           </el-icon>
                           发布于：{{ article.createDate }}
                         </el-col>
                          <el-col :span="12">
                           <el-icon style="top: 2px">
                             <EditPen/>
                           </el-icon>
                           修改于：{{ article.changeDate }}
                         </el-col>
                        </el-row>
                      </span>
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          </div>
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
import {onBeforeMount, onBeforeUpdate, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import PersonInfo from "../components/PersonInfo.vue";
import LoginCard from "../components/LoginCard.vue";
import {ElMessage, ElMessageBox} from 'element-plus'

const id = ref("")
const station = ref(false)
const route = useRoute();
const router = useRouter();
const tableData = ref('')
let imgApi = 'https://api.ixiaowai.cn/gqapi/gqapi.php'

function getArticles() {
  const host = "http://astralcyber.ml:3000";
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  let requestOptions = { // 里面不能有body
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }
  fetch(`${host}/article/`, requestOptions)
      .then(response => response.json())
      .then(data => {
        tableData.value = data;
      })
}

onBeforeMount(() => {
  getArticles();
  id.value = route.params.uuid;
  if (typeof (route.params.uuid) !== "undefined" && route.params.uuid !== "guest") {
    station.value = true;
    id.value = route.params.uuid;
  }
})

function toArticle(articleId) {
  if (typeof (route.params.uuid) !== "undefined") {
    router.push({name: 'article', params: {uuid: id.value, articleId: articleId,}})
  } else {
    alert("请登录或以游客模式继续");
  }
}

function articleImg(id) {
  // let url;
  // await axios.get('https://api.unsplash.com/photos/random?client_id=TYItb6qDXZniRVRgxRVHDym6xMgGUd35Ae4o0bbqq_0')
  //     .then(function (res) {
  //       console.log(res.data.urls.full);
  //       url = res.data.urls.full;
  //     }.bind(this));
  // return url;
  return imgApi + '?' + id + ')';
}

</script>

<style scoped>
#divider {
  border-top: 2px rgba(129, 129, 129, 0.8) dashed !important;
}

.articleCard {
  box-shadow: 0 1px 20px -6px rgb(0 0 0 / 50%);
  border-radius: 10px !important;
  --el-card-padding: 0px !important;
}

.articleCard:hover {
  box-shadow: 0 5px 10px 5px rgb(110 110 110 / 40%) !important;
  border-color: rgba(255 255 255 / 100%) !important;
}

.articleCard:hover .articleImg {
  transform: scale(1.1);
}

.articleImgBox {
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.articleImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition-duration: 0.6s;
  transition-timing-function: ease;
}
</style>
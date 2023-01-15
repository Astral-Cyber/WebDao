<template>
  <el-dialog width="80vw" v-model="editorVisible" title="Editor" align-center="align-center"
             :close-on-click-modal="false"
             @close="draft={
                  authorUuid: globalProperties.$userInfo.value.id,
                  topic: '',
                  content: '',
                  intro: '',
                  assort: '',
                  author: globalProperties.$userInfo.value.username,
                  createDate: '',
                  changeDate: '',
                  tag: '',
                  like: 0
  }">
    <v-md-editor v-model="draft.content" height="60vh" @save="Save"></v-md-editor>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="deleteDraft">
          删除
        </el-button>
        <el-button type="primary" @click="">
          发布
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-row style="height: 24px" justify="space-between" align="middle">
    <el-col :span="3">
      <span class="back" @click="back">
      ⬅ 藏典阁
    </span>
    </el-col>
    <el-col :span="10" style="text-align: center">
      <span style="font-weight: bolder;color: #666666;font-size:x-large;">{{globalProperties.$userInfo.value.username }}的草稿箱</span>
    </el-col>
    <el-col :span="3" style="text-align: right">
      <span @click="back" style="cursor:pointer; font-weight: bolder;color: #989898;font-size: larger;">施工中</span>
    </el-col>
  </el-row>
  <el-divider id="divider" border-style="dashed" content-position="left"/>

  <!-- 文章列表-->
  <div v-for="article in tableData">
    <el-row @click="openEditor(article.id)"
            style="cursor:pointer;">
      <el-col :span="24" style="margin-bottom: 20px">
        <el-card class="articleCard">
          <el-row>
            <el-col :span="10" class="articleImgBox">
              <img :src="articleImg(article.id)" class="articleImg">
            </el-col>
            <el-col :span="14" style="padding: 10px 15px 15px 15px">
              <h1 style="top: 0; color: #666666;font-weight: bolder;font-size: 24px;
                      word-break:break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 1;
                      -webkit-box-orient: vertical;
                      margin: 0 0 10px;
                      word-wrap:break-word">{{ article.topic }}</h1>
              <div style="height: 150px;width: auto;">
                        <span style="color: #777777;
                          width:99%;
                          display:block;
                          padding: 0px 0px 0px 5px;
                          white-space:pre-wrap;
                          word-break:break-all;
                          word-wrap:break-word;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                          -webkit-line-clamp: 4;
                          -webkit-box-orient: vertical;"
                        >{{ article.intro }}</span>
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
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>

  <el-row style="width: 100%" class="pagination" align="middle" justify="center">
    <el-pagination style="transform:scale(1.2,1.2);" :hide-on-single-page="true"
                   :page-size="4"
                   v-model:current-page="page" layout="prev, pager, next" :total="total"
                   @current-change="fenye(page)"/>
  </el-row>
</template>

<script setup>
import {onBeforeMount, onBeforeUpdate, ref, toRaw} from "vue";
import {useRoute, useRouter} from "vue-router";
import router from "../router/index.js";
import useGetGlobalProperties from "../hook/useGlobal.js";
import {ElMessage} from "element-plus";

let origin
const editorVisible = ref(false)
const globalProperties = useGetGlobalProperties()
const route = useRoute()
const total = ref()
const tableData = ref([]);
const allData = ref([]);
const page = ref(parseInt(route.params.page || 1))
let imgApi = 'https://api.ixiaowai.cn/gqapi/gqapi.php'

const draft = ref({
  authorUuid: globalProperties.$userInfo.value.id,
  topic: "",
  content: "",
  intro: "",
  assort: "",
  author: globalProperties.$userInfo.value.username,
  createDate: "",
  changeDate: "",
  tag: "",
  like: 0
})

const host = "http://astralcyber.ml:3000";
const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")

setInterval(() => {
  console.log(draft.value)
}, 5000)

async function openEditor(id) {
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }
  await fetch(`${host}/draft/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        origin = data
        draft.value = data
      })
  editorVisible.value = true
}

function fenye(current) {
  tableData.value = toRaw(allData.value).slice(current * 4 - 4, current * 4);
  if (current !== 1) {
    router.push({
      name: "DraftPage",
      params: {
        page: current
      }
    })
  } else {
    router.push({
      name: "Draft",
    })
  }
  // fetch(`${host}/article/?_page=${current}&_limit=4`, requestOptions)
  //     .then(response => response.json())
  //     .then(data => {
  //       tableData.value = data
  //       if (current !== 1) {
  //         router.push({
  //           name: "Page",
  //           params: {
  //             id: current
  //           }
  //         })
  //       } else {
  //         router.push({
  //           name: "Main",
  //         })
  //       }
  //     })
}

async function getDraft() {
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }
  await fetch(`${host}/draft/`, requestOptions)
      .then(response => response.json())
      .then(data => {
        for (let i in data) {
          if (data[i].authorUuid === globalProperties.$userInfo.value.id)
            allData.value.push(data[i]);
        }
        total.value = allData.value.length;
      })
  if (typeof (route.params.page) !== "undefined") {
    fenye(route.params.page);
  } else {
    fenye(1);
  }
}

async function deleteDraft() {
  let requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  }
  const newDraft = draft.value;
  requestOptions.body = JSON.stringify(newDraft);
  await fetch(`${host}/draft/${draft.value.id}`, requestOptions)
      .then(() => {
        ElMessage({
          message: '删除成功',
          type: 'success',
          // 赋默认值
        });
        editorVisible.value = false
      })
      .catch(err => alert(err));
  location.replace(location.origin + '/draft')
}


function Save() {
  let requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    redirect: "follow",
  }
  const newDraft = draft.value;
  requestOptions.body = JSON.stringify(newDraft);
  fetch(`${host}/draft/${draft.value.id}`, requestOptions)
      .then(() => {
        ElMessage({
          message: '保存成功！',
          type: 'success',
          // 赋默认值
        });
      })
      .catch(err => alert(err));
  getDraft()
}

function back() {
  router.push({
    name: "Main"
  })
}

onBeforeMount(() => {
  if (localStorage.getItem("id") !== null) {
    globalProperties.$station.value = true;
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    }
    fetch(`${host}/users/${localStorage.getItem("id")}`, requestOptions)
        .then(response => response.json())
        .then(data => {
              globalProperties.$userInfo.value = data;
            }
        )
        .catch(err => alert(err))
  }
  getDraft();
})

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
pagination + pagination {
  margin-top: 10px;
}

pagination {
  margin-bottom: 16px;
}

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
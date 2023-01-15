<template>

  <el-dialog v-model="ChangeTableVisible" title="修改密码ing" align-center width="500" @close="close">
    <el-row class="about">
      <el-input v-model="Old" clearable type="password">
        <template style="width: min-content" #prepend>旧密码</template>
      </el-input>
    </el-row>
    <el-row class="about">
      <el-input v-model="New" clearable type="password">
        <template style="width: min-content" #prepend>新密码</template>
      </el-input>
    </el-row>
    <el-row class="about">
      <el-input v-model="Repeat" clearable type="password">
        <template style="width: min-content" #prepend>重复密码</template>
      </el-input>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="ChangeTableVisible = false">Cancel</el-button>
        <el-button type="primary" @click="changePassword">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-card id="personCard">
    <el-tabs v-model="activeName" class="tabs">
      <el-tab-pane class="ele" label="HOME" name="first">
        <el-avatar id="photo"
                   :src="'https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=image'"
        />
        <el-divider style="margin-top: 45%; margin-bottom: 12px" border-style="dashed" content-position="left"/>
        <div style="margin-bottom: 6px"><span id="name">Hi, {{ globalProperties.$userInfo.value.username }}</span></div>
        <el-row justify="center" style="height: 42px" align="middle">
          <span id="intro">{{ globalProperties.$userInfo.value.intro }}</span>
        </el-row>
        <el-row justify="center" align="middle" class="userLine">
          <el-button @click="router.push({
             name:'Author'
          })" style="font-size: 1.3vw" type="success" link>已发布: {{ globalProperties.$userInfo.value.articles }}
          </el-button>

          <el-divider direction="vertical" border-style="dashed"/>

          <el-button @click="router.push({
             name:'Draft'
          })" style="font-size: 1.3vw" type="warning" link>草稿箱: {{ globalProperties.$userInfo.value.draft }}
          </el-button>
        </el-row>
        <el-row justify="center" align="middle" class="userLine">
          <a :href="'https://api.liitk.com/s/qrcode/api?text='+globalProperties.$userInfo.value.qq+'&size=300px'">
            <img class="social" src="https://cdn.jsdelivr.net/gh/Astral-Cyber/PicImg/blog/QQ-circle-fill.svg"/>
          </a>
          &#12288;
          <a :href="globalProperties.$userInfo.value.music">
            <img class="social" src="https://cdn.jsdelivr.net/gh/Astral-Cyber/PicImg/blog/%E5%94%B1%E7%89%87.svg"/>
          </a>
          &#12288;
          <a :href="globalProperties.$userInfo.value.github">
            <img href="www.baidu.com" class="social"
                 src="https://cdn.jsdelivr.net/gh/Astral-Cyber/PicImg/blog/github-fill.svg"/>
          </a>
          &#12288;
          <a :href="globalProperties.$userInfo.value.telegram">
            <img class="social"
                 src="https://cdn.jsdelivr.net/gh/Astral-Cyber/PicImg/blog/%E5%93%81%E7%89%8C%E6%A0%87%E8%AF%86_telegram.svg"/>
          </a>
        </el-row>
        <el-divider style="margin:12px 0px !important;"/>
        <div id="operate">
          <el-button type="danger" size="large" @click="exit">退出</el-button>
        </div>
      </el-tab-pane>


      <el-tab-pane class="ele" label="ABOUT" name="second">
        <el-avatar id="photo"
                   :src="'https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=image'"
        />
        <el-divider style="margin-top: 45%; margin-bottom: 12px" border-style="dashed" content-position="left"/>

        <el-row justify="center" align="middle" class="about">
          <el-input v-model="globalProperties.$userInfo.value.username" clearable maxlength="8" show-word-limit>
            <template style="width: min-content" #prepend>昵称</template>
          </el-input>
        </el-row>
        <el-row justify="center" align="middle" class="about">
          <el-input v-model="globalProperties.$userInfo.value.intro" clearable>
            <template style="width: min-content" #prepend>简介</template>
          </el-input>
        </el-row>
        <el-row justify="center" align="middle" class="about">
          <el-input v-model="globalProperties.$userInfo.value.qq" clearable>
            <template style="width: min-content" #prepend>QQ</template>
          </el-input>
        </el-row>
        <el-row justify="center" align="middle" class="about">
          <el-input v-model="globalProperties.$userInfo.value.music" clearable>
            <template style="width: min-content" #prepend>Music</template>
          </el-input>
        </el-row>
        <el-row justify="center" align="middle" class="about">
          <el-input v-model="globalProperties.$userInfo.value.github" clearable>
            <template style="width: min-content" #prepend>Github</template>
          </el-input>
        </el-row>
        <el-row justify="center" align="middle" class="about">
          <el-input v-model="globalProperties.$userInfo.value.telegram" clearable>
            <template style="width: min-content" #prepend>Telegram</template>
          </el-input>
        </el-row>
        <el-divider style="margin:11px 0px 12px 0px !important;"/>
        <div id="operate">
          <el-link type="danger" style="margin-right: 10px" @click="ChangeTableVisible=!ChangeTableVisible">修改密码
          </el-link>
          <el-button type="primary" size="large" @click="submitChange">提交</el-button>
        </div>


        <!--        <el-avatar style="width: 4vw;-->
        <!--                          height: 4vw;-->
        <!--                          position: absolute;-->
        <!--                          top: 0px;-->
        <!--                          left: 23%;-->
        <!--                          transform: translate(-50%);"-->
        <!--                   :src="'https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=image'"-->
        <!--        />-->
        <!--        <span style="height: 4vw;-->
        <!--                       position: absolute;-->
        <!--                       left: 38%;-->
        <!--                       font-size: 1.2vw;-->
        <!--                       top:1vw;"-->
        <!--        >Change Yourself</span>-->
        <!--        <div style="margin-top: 18.8%">-->
        <!--          <div>-->
        <!--            <el-row class="about">-->
        <!--              <el-input v-model="globalProperties.$userInfo.value.username" clearable maxlength="8" show-word-limit>-->
        <!--                <template style="width: min-content" #prepend>昵称</template>-->
        <!--              </el-input>-->
        <!--            </el-row>-->
        <!--            <el-row class="about">-->
        <!--              <el-input v-model="globalProperties.$userInfo.value.intro" clearable>-->
        <!--                <template style="width: min-content" #prepend>简介</template>-->
        <!--              </el-input>-->
        <!--            </el-row>-->
        <!--            <el-row class="about">-->
        <!--              <el-input v-model="globalProperties.$userInfo.value.qq" clearable>-->
        <!--                <template style="width: min-content" #prepend>QQ</template>-->
        <!--              </el-input>-->
        <!--            </el-row>-->
        <!--            <el-row class="about">-->
        <!--              <el-input v-model="globalProperties.$userInfo.value.music" clearable>-->
        <!--                <template style="width: min-content" #prepend>Music</template>-->
        <!--              </el-input>-->
        <!--            </el-row>-->
        <!--            <el-row class="about">-->
        <!--              <el-input v-model="globalProperties.$userInfo.value.github" clearable>-->
        <!--                <template style="width: min-content" #prepend>Github</template>-->
        <!--              </el-input>-->
        <!--            </el-row>-->
        <!--            <el-row class="about">-->
        <!--              <el-input v-model="globalProperties.$userInfo.value.telegram" clearable>-->
        <!--                <template style="width: min-content" #prepend>Telegram</template>-->
        <!--              </el-input>-->
        <!--            </el-row>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <el-divider style="margin:12px 0px !important;"/>-->
        <!--        <div id="operate">-->
        <!--          <el-link type="danger" style="margin-right: 10px" @click="ChangeTableVisible=!ChangeTableVisible">修改密码-->
        <!--          </el-link>-->
        <!--          <el-button type="primary" size="large" @click="submitChange">提交</el-button>-->
        <!--        </div>-->
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup>
import {onBeforeMount, ref} from 'vue'
import {useRoute, useRouter} from "vue-router";
import useGetGlobalProperties from "../hook/useGlobal.js";
import md5 from "js-md5"

const globalProperties = useGetGlobalProperties();
const activeName = ref('first')
const host = 'http://astralcyber.ml:3000'
const route = useRoute()
const router = useRouter()
const ChangeTableVisible = ref(false)
const Old = ref('')
const New = ref('')
const Repeat = ref('')

function exit() {
  globalProperties.$station.value = false;
  localStorage.removeItem("id");
  location.replace(location.origin);
}

function submitChange() {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  let requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    redirect: "follow",
  }
  const userData = globalProperties.$userInfo.value;
  requestOptions.body = JSON.stringify(userData);
  fetch(`${host}/users/${globalProperties.$userInfo.value.id}`, requestOptions)
      .then(() => {
        alert("修改成功～")
      })
      .catch(err => alert(err));
}

function close() {
  Old.value = New.value = Repeat.value = ''
}

function changePassword() {
  if (md5(Old.value) === globalProperties.$userInfo.value.password) {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    let requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      redirect: "follow",
    }
    if (New.value === Repeat.value) {
      globalProperties.$userInfo.value.password = md5(New.value)
      const userData = globalProperties.$userInfo.value;
      requestOptions.body = JSON.stringify(userData);
      fetch(`${host}/users/${globalProperties.$userInfo.value.id}`, requestOptions)
          .then(() => {
            alert("修改成功～")
            ChangeTableVisible.value = false;
          })
          .catch(err => alert(err));
    } else {
      alert("两次输入的密码不一致，请检查～")
    }
  } else {
    alert("原密码错误，请重试～")
  }
}

onBeforeMount(() => {
  if (typeof (route.params.uuid) !== "undefined") {
    globalProperties.$station.value = true;
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
              if (data.id === route.params.uuid) {   // 验证是否存在该用户return data
                globalProperties.$userInfo.value = data;
              } else {
                globalProperties.$station.value = false;
              }
            }
        )
        .catch(err => alert(err))
  }
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

.userLine {
  height: 37px;
  max-height: 37px;
  margin-bottom: 8px;
}

.about {
  height: 36px;
  margin-bottom: 5px;
}

span {
  color: #666666;
}

#name {
  font-weight: bolder;
  font-size: 26px;
}

#intro {
  font-weight: bold;
  font-size: 16px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.social {
  width: 2vw;
  color: #666666;
}

a {
  height: 30px;
}

el-input {
  width: 100px;
}


.data {
  font-weight: bold;
  font-size: 18px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.name {
  font-weight: normal;
}


</style>
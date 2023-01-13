<template>
  <el-container style="">
    <el-main>
      <el-container>
        <!--主页左侧-->
        <el-aside class="side" width="8vw">
        </el-aside>
        <!--主页中心-->
        <el-main id="articleBody">

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
import PersonInfo from "./PersonInfo.vue";
import LoginCard from "./LoginCard.vue";


const id = ref('')
const station = ref(false)
const route = useRoute();
const router = useRouter();

onBeforeMount(() => {
  id.value = route.params.uuid;
  if (id.value) {
    station.value = true;
  }
  console.log(route.params.uuid)
})
</script>

<style scoped>

</style>
<template>
  <el-card id="personCard">
    <el-tabs v-model="activeName" class="tabs">
      <el-tab-pane class="ele" label="LOGIN" name="first">
        <Login/>
      </el-tab-pane>
      <el-tab-pane class="ele" label="SIGN UP" name="second">
        <Sign/>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup>
import Sign from "./Sign.vue";
import Login from "./Login.vue";
import {ref} from 'vue'

const activeName = ref('first')

</script>

<style scoped>
.el-tabs {
  --el-tabs-header-height: 53px !important;
}

.ele {
  padding: 20px;
}
</style>
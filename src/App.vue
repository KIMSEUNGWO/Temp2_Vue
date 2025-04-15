<script setup>
import TheHeader from "@/layouts/TheHeader.vue";
import TheMenu from "@/layouts/TheMenu.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <suspense timeout="0">
      <template #default>
        <component :is="Component"/>
      </template>
      <template #fallback>
        <div class="loading-indicator">
          로딩 중... 잠시만 기다려주세요.
        </div>
      </template>
    </suspense>
  </RouterView>
</template>

<style scoped>
main {
  padding: 32px;
  width: calc(100% - 260px);
}
</style>

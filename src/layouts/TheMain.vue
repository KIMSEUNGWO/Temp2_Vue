<script setup>
import TheHeader from "@/layouts/TheHeader.vue";
import TheMenu from "@/layouts/TheMenu.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <TheHeader></TheHeader>
  <div class="container">
    <TheMenu></TheMenu>
    <main>
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

    </main>
  </div>
</template>

<style scoped>
main {
  padding: 32px;
  width: calc(100% - 260px);
}
.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 20px 0;
}
</style>

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
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>
main {
  padding: 32px;
  width: calc(100% - 260px);
}
</style>

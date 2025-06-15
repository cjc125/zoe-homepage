<script setup lang="ts">
import NavBar from './NavBar.vue';
import TopInfo from './TopInfo.vue';
</script>

<template>
  <div class="page-header">
    <TopInfo />
    <NavBar />
  </div>
</template>

<style scoped lang="scss">
.page-header {
  width: 100%;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
const msg = ref('NewsPage');
</script>

<template>
  <div>
    {{ msg }}
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
</style>

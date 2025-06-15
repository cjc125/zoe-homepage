<script setup lang="ts">
import 'github-markdown-css/github-markdown-light.css';
import type { ComponentOptions } from 'vue';

defineProps<{
  component: ComponentOptions;
}>();
</script>

<template>
  <div class="article markdown-body">
    <component :is="component" />
  </div>
</template>

<style scoped lang="scss">
.article {
  padding: 30px;
  background: #ffffff;
}
</style>

<script setup lang="ts">
import { loadArticle } from '@/utils/newsLoader';
import { marked } from 'marked';
import { ref, watch } from 'vue';

const props = defineProps<{
  id?: string,
}>();

const content = ref('');

watch(() => props.id, async (id) => {
  if (!id) {
    return;
  }
  const result = await loadArticle(id);
  if (!result.success || !result.content) {
    console.log(result.error);
    return;
  }

  content.value = await marked(result.content, {
    breaks: true,
    gfm: true,
  });
}, { immediate: true });
</script>

<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="content" />
  </div>
</template>

<style scoped lang="scss">
</style>

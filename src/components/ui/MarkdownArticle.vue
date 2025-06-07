<script setup lang="ts">
import { marked } from 'marked';
import { ref, watch } from 'vue';
import 'github-markdown-css/github-markdown-light.css';

const props = defineProps<{
  content: string;
}>();

const parsedHtml = ref('');

watch(() => props.content, async content => {
  parsedHtml.value = await marked(content, {
    breaks: true,
    gfm: true,
  });
});
</script>

<template>
  <div class="article">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="article__content markdown-body" v-html="parsedHtml" />
  </div>
</template>

<style scoped lang="scss">
.article {
  padding: 30px;
  background: #ffffff;
}
</style>

<script setup lang="ts">
import MarkdownArticle from '@/components/ui/MarkdownArticle.vue';
import { getNewsFormatTime, getSingleNewsMeta, loadArticle } from '@/utils/newsLoader';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
  id: string,
}>();

const content = ref('');
const meta = computed(() => {
  return getSingleNewsMeta(props.id || '');
});
const displayTime = computed(() => {
  if (!meta.value?.createTime) {
    return '';
  }
  return getNewsFormatTime(meta.value.createTime);
});

watch(() => props.id, async (id) => {
  if (!id) {
    return;
  }
  const result = await loadArticle(id);
  if (!result.success || !result.content) {
    console.log(result.error);
    return;
  }

  content.value = result.content;
}, { immediate: true });
</script>

<template>
  <div class="page">
    <div v-if="meta?.title" class="page__title">
      {{ meta.title }}
    </div>
    <div v-if="displayTime" class="page__time">
      {{ displayTime }}
    </div>
    <MarkdownArticle class="page__content" :content="content" />
  </div>
</template>

<style scoped lang="scss">
.page {
  margin: 30px;

  &__title {
    font-size: xx-large;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &__time {
    font-size: large;
    margin-bottom: 20px;
  }

  &__content {
    font-size: large;
  }
}
</style>

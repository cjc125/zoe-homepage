<script setup lang="ts">
import type { NewsMeta } from '@/content/news/meta';
import { getNewsFormatTime } from '@/utils/newsLoader';
import { computed } from 'vue';

const props = defineProps<{
  info: NewsMeta,
}>();

const emits = defineEmits<{
  (e: 'click', id: string): void
}>();

const title = computed(() => {
  return props.info.title;
});

const time = computed(() => {
  return getNewsFormatTime(props.info.createTime);
});

const description = computed(() => {
  return props.info.description;
});

const cover = computed(() => {
  return props.info.cover;
});

function handleItemClick() {
  emits('click', props.info.id);
}
</script>

<template>
  <div class="item" @click="handleItemClick">
    <div class="item__cover">
      <img v-if="cover" class="item__cover__img" :src="cover">
    </div>
    <div class="item__info">
      <div class="item__title">
        {{ title }}
      </div>
      <div class="item__desc">
        {{ description }}
      </div>
      <div class="item__time">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  width: 100%;
  @include flex-layout(row, space-between, center);

  &__cover {
    width: 30%;
    
    &__img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

  }

  &__info {
    width: 70%;
    padding-left: 50px;
    @include flex-layout(column, center, flex-start);
  }

  &__title {
    font-size: x-large;
    font-weight: bold;
  }

  &__desc {
    margin-top: 10px;
    font-size: medium;
    color: #666666;
  }

  &__time {
    margin-top: 10px;
    font-size: small;
    color: #999999;
  }
}
</style>

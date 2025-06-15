<script setup lang="ts">
import ListItem from '@/components/news/ListItem.vue';
import router from '@/router';
import { getNewsList } from '@/utils/newsLoader';

const list = getNewsList();

function handleItemClick(id: string) {
  router.push(`/news/detail/${id}`);
}
</script>

<template>
  <div class="page">
    <div class="page__list">
      <ListItem
        v-for="item in list"
        :key="item.id"
        :info="item"
        class="page__list__item"
        @click="handleItemClick"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  margin: 30px;

  &__list {
    &__item {
      margin-bottom: 20px;
      background-color: #fff;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>

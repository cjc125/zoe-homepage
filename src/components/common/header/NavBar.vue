<script setup lang="ts">
import router, { routeConfigs } from '@/router';
import { computed } from 'vue';

const currentRoutePath = computed(() => router.currentRoute.value.fullPath);

const validRouteConfigs = routeConfigs.filter(config => !!config.name);

function isCurrentRoute(routePath: string) {
  return currentRoutePath.value.startsWith(routePath);
}

function isExactCurrentRoute(routePath: string) {
  return currentRoutePath.value === routePath;
}

function handleItemClick(routePath: string) {
  if (isExactCurrentRoute(routePath)) {
    return;
  }
  router.push({ path: routePath });
}
</script>

<template>
  <div class="nav">
    <div
      v-for="item in validRouteConfigs"
      :key="item.path"
      class="nav__item"
      :class="{'nav__item--active': isCurrentRoute(item.path)}"
      @click="handleItemClick(item.path)"
    >
      {{ item.meta?.title || item.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  max-width: 100vw;
  background-color: #ffffff;
  border-bottom: 1px solid #DCEAFB;
  flex-wrap: wrap;
  @include flex-layout(row, flex-start, center);

  &__item {
    padding: 20px 50px;
    color: #333333;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      color: #2979FF;
      border-bottom-color: #2979FF;
      cursor: pointer;
    }

    &--active {
      color: #1B4ACC;
      border-bottom-color: #1B4ACC;
      font-weight: 500;
    }
  }
}
</style>

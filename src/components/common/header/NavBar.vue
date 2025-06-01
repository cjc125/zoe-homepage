<script setup lang="ts">
import router, { routeConfigs } from '@/router';
import { computed } from 'vue';
import type { RouteRecordNameGeneric } from 'vue-router';

const currentRouteName = computed(() => router.currentRoute.value.name);

const validRouteConfigs = routeConfigs.filter(config => !!config.name);

function isValidRouteName(routeName?: RouteRecordNameGeneric): routeName is string {
  return typeof routeName === 'string' && !!routeName;
}

function isCurrentRoute(routeName?: RouteRecordNameGeneric) {
  if (!isValidRouteName(routeName)) {
    return false;
  }
  return currentRouteName.value === routeName;
}

function handleItemClick(routeName?: RouteRecordNameGeneric) {
  if (!isValidRouteName(routeName) || isCurrentRoute(routeName)) {
    return;
  }
  router.push({ name: routeName });
}
</script>

<template>
  <div class="nav">
    <div
      v-for="item in validRouteConfigs"
      :key="item.path"
      class="nav__item"
      :class="{'nav__item--active': isCurrentRoute(item.name)}"
      @click="handleItemClick(item.name)"
    >
      {{ item.meta?.title || item.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  background-color: #ffffff;
  border-bottom: 1px solid #DCEAFB;
  @include flex-layout(row, flex-start, center);

  &__item {
    padding: 20px;
    color: #333333;
    font-weight: 500;
    font-size: 16px;
    padding: 12px 20px;
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

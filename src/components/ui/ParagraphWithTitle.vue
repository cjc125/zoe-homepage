<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title?: string,
  titleColor?: string,
  titleBackgroundColor?: string,
}>();

const titleStyle = computed(() => {
  return {
    color: props.titleColor,
    backgroundColor: props.titleBackgroundColor,
  };
});
</script>

<template>
  <div class="paragraph">
    <div class="paragraph__title" :style="titleStyle">
      {{ title || '' }}
    </div>
    <div class="paragraph__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.paragraph {
  width: 100%;

  &__title {
    padding: 10px 50px;
    font-size: larger;
    font-weight: bold;
  }

  &__content {
    padding: 20px 50px;
  }
}
</style>

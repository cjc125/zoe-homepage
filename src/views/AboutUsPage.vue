<script setup lang="ts">
import ParagraphWithTitle from '@/components/ui/ParagraphWithTitle.vue';
import { AboutUsParagraphs } from '@/content/aboutUs';
</script>

<template>
  <div class="about">
    <ParagraphWithTitle
      v-for="paragraph in AboutUsParagraphs"
      :key="paragraph.id"
      class="about__paragraph"
      :title="paragraph.title"
      :title-color="paragraph.titleConfig?.color"
      :title-background-color="paragraph.titleConfig?.backgroundColor"
    >
      <div v-for="line in paragraph.contents" :key="line" class="about__paragraph__line">
        {{ paragraph.contentConfig?.prefix || '' }}{{ line }}
      </div>
    </ParagraphWithTitle>
  </div>
</template>

<style scoped lang="scss">
.about {
  &__paragraph {
    margin-top: 32px;

    &__line {
      text-align: justify;
      font-size: 16px;
      line-height: 1.75;
      color: #2F2F2F;
      margin: 0 auto 24px auto;
    }
  }
}
</style>

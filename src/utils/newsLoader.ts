import { newsMeta } from '@/content/news/meta';
import dayjs from 'dayjs';
import type { ComponentOptions } from 'vue';

export async function loadMarkdownComponent(articleId: string) {
  try {
    // 动态导入Markdown内容
    const markdownModule: {
      VueComponent: ComponentOptions;
    } = await import(`../content/news/${articleId}/index.md`);
    return {
      component: markdownModule.VueComponent,
      success: true as const,
    };
  } catch (error) {
    console.error(`Failed to load article ${articleId}:`, error);
    return {
      component: null,
      success: false as const,
      error: (error as Error)?.message,
    };
  }
}

export function getNewsList() {
  return newsMeta;
}

export function getSingleNewsMeta(id: string) {
  return newsMeta.find((item) => item.id === id);
}

export function getNewsFormatTime(time: number) {
  return dayjs(time).format('YYYY-MM-DD');
}

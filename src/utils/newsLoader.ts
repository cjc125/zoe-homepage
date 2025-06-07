/**
 * Markdown内容加载器 - 处理动态加载和图片路径
 */
export async function loadArticle(articleId: string) {
  try {
    // 动态导入Markdown内容
    const markdownModule = await import(`../content/news/${articleId}/index.md?raw`);
    let content = markdownModule.default as string;
    
    // 处理Markdown中的相对路径图片引用
    content = content.replace(
      /!\[(.*?)\]\(\.(.*?)\)/g,
      (_, alt, relativePath) => {
        // 转换为正确的公共路径
        return `![${alt}](/src/content/news/${articleId}${relativePath})`;
      },
    );
    
    return {
      content,
      success: true,
    };
  } catch (error) {
    console.error(`Failed to load article ${articleId}:`, error);
    return {
      content: null,
      success: false,
      error: (error as Error)?.message,
    };
  }
}

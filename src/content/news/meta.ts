interface NewsMeta {
  id: string;
  title: string;
  description?: string;
  createTime: number;
}

export const newsMeta: NewsMeta[] = [
  {
    id: 'article-1',
    title: '从电脑桌面端开始吧！',
    description: '从电脑桌面端开始吧！',
    createTime: new Date('2025-06-07 00:00:00 gmt+8').getTime(),
  },
];

export interface NewsMeta {
  id: string;
  title: string;
  description?: string;
  createTime: number;
  cover?: string;
}

import ImageArticle1Cover from './2025-06-07-01/image.png';
import ImageArticle2Cover from './2025-06-08-01/person.png';

export const newsMeta: NewsMeta[] = [
  {
    id: '2025-06-08-01',
    title: 'Personal Website',
    description: 'Hello! I\'m Ada Lee, a multidisciplinary designer based in San Francisco.** With over 8 years of experience, I thrive at the intersection of digital design, UX/UI, and brand identity. My passion lies in crafting seamless user experiences and visually compelling designs that resonate with audiences and drive engagement',
    createTime: new Date('2025-06-08 00:00:00 gmt+8').getTime(),
    cover: ImageArticle2Cover,
  },
  {
    id: '2025-06-07-01',
    title: '从电脑桌面端开始吧！',
    description: '从电脑桌面端开始吧！',
    createTime: new Date('2025-06-07 00:00:00 gmt+8').getTime(),
    cover: ImageArticle1Cover,
  },
];

export const AboutUsParagraphs: {
  id: number;
  title: string;
  contents: string[];
  titleConfig?: {
    color: string;
    backgroundColor: string;
  };
  contentConfig?: {
    prefix?: string;
  };
}[] = [
  {
    id: 1,
    title: 'The Story to Start',
    contents: [
      'Started from 2004, Zoe Zhu, the founder of GZ JSM Business Services Co., Ltd engaged in business coordinator contractor for a Canadian Calgary-based company for CSA certified products sourcing for over 5 years. During the period of the time, she served under the Government of the HongKong Speical Administrative Region for 2 years, then took part in the managment of a Canadian-hold gold mine for over 8 years. More than half of the work hours are about the business between Canada and China markets. Mutual understandings and acceptance on values, business spirit, life and culture, rules and regulations, and more respects are well developed.',
      'Until now, we are still around for you. Whenever you are trying to seek business opportunities in China, team up with us, bridge the gap of culture and communication, make it easier to fulfill.',
      'Superior to the achievement of business takings, there is so much added value between us. You will find the happiness of of working together to solve problems for a same goal. Up and down, we usually make it golden at the end!',
      'All through these years on, some of you become great friendship based clients. Some of you make each other family-like well-caring connections. We are so thankful. We are going truer further. All these are so precious! We cherish!',
      'For the rest future, as always, we are still staying truely around you. We met and we will meet again. Success belongs to the faithful hard-working minds!',
    ],
    titleConfig: {
      color: '#ffffff',
      backgroundColor: '#2979FF',
    },
  },
  {
    id: 2,
    title: 'China-Canada Business',
    contents: [
      'Purchase agency',
      'Import and export agency',
      'Customized machines and parts, processing line solutions',
      'Manufacturing inspection, quality control and opinions',
      'Project supervisor or aid, research, reliabilities analysis and guarantee',
      'Local and international logistics, door to door shipping arrangement',
      'Business Coordination, purchase and order follow-up',
      'Travel arrangement and company',
    ],
    titleConfig: {
      color: '#1B4ACC',
      backgroundColor: '#D0E6FF',
    },
    contentConfig: {
      prefix: '- ',
    },
  },
  {
    id: 3,
    title: 'Canada-China Business',
    contents: [
      'Import agency, general commodities and food',
      'Channel maketing and commercial promotion',
      'Sales permit application or register',
      'New business set up administrative assistance',
    ],
    titleConfig: {
      color: '#2F2F2F',
      backgroundColor: '#DCEAFB',
    },
    contentConfig: {
      prefix: '· ',
    },
  },
];

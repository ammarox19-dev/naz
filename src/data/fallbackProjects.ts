export type Project = {
  title: string
  slug: string
  clientName?: string
  projectRole?: string
  projectStatus?: string
  projectDuration?: string
  industry?: string
  category: string
  year: string | number
  coverImage?: string
  heroVisualImage?: string
  heroVisualLabel?: string
  heroYearLabel?: string
  heroThemeColor?: string
  gallery?: string[]
  services?: string[]
  deliverables?: string[]
  tags?: string[]
  projectLayout?: 'grid' | 'editorial' | 'cinematic' | 'minimal' | 'split'
  galleryLayout?: 'grid' | 'masonry' | 'fullWidth' | 'mixed' | 'carousel'
  themeMode?: 'light' | 'dark'
  accentColor?: string
  contentBlocks?: ProjectContentBlock[]
  shortDescription: string
  challenge?: string
  solution?: string
  result?: string
  featured?: boolean
  heroFeatured?: boolean
  heroOrder?: number
  order?: number
}

export type ProjectContentBlock =
  | {
      _type: 'imageFull'
      image?: string
      caption?: string
    }
  | {
      _type: 'imageGrid'
      images?: string[]
      caption?: string
    }
  | {
      _type: 'imageSplit'
      image?: string
      title?: string
      text?: string
    }
  | {
      _type: 'textBlock'
      title?: string
      text?: string
    }
  | {
      _type: 'statsBlock'
      stats?: { label: string; value: string }[]
    }
  | {
      _type: 'videoBlock'
      url?: string
      caption?: string
    }
  | {
      _type: 'quoteBlock'
      quote?: string
      byline?: string
    }
  | {
      _type: 'beforeAfterBlock'
      beforeImage?: string
      afterImage?: string
      title?: string
      text?: string
    }

export const fallbackProjects: Project[] = [
  {
    title: 'Aurum Studio',
    slug: 'aurum-studio',
    clientName: 'Aurum Studio',
    projectRole: 'Visual Identity Designer',
    projectStatus: 'Concept Case Study',
    projectDuration: '3 weeks',
    industry: 'Creative Studio',
    category: 'Brand Identity',
    year: 2026,
    heroVisualLabel: 'نظام حضور',
    heroYearLabel: '2026',
    heroThemeColor: '#0062FF',
    featured: true,
    heroFeatured: true,
    heroOrder: 1,
    order: 1,
    services: ['Brand Identity', 'Visual Direction'],
    deliverables: ['Brand Direction', 'Visual System', 'Launch Assets', 'Delivery Guide'],
    tags: ['Branding', 'Guidelines', 'Launch System'],
    projectLayout: 'cinematic',
    galleryLayout: 'mixed',
    contentBlocks: [
      {
        _type: 'statsBlock',
        stats: [
          { label: 'نظام', value: '12 تطبيق' },
          { label: 'اتجاه', value: 'واضح' },
          { label: 'تسليم', value: 'مرتب' },
        ],
      },
      {
        _type: 'quoteBlock',
        quote: 'الهدف لم يكن صنع شعار فقط، بل بناء حضور يمكن للمشروع أن يتحرك داخله بثقة.',
      },
    ],
    shortDescription:
      'نظام بصري هادئ لاستوديو إبداعي يحتاج حضورًا أكثر وضوحًا وثقة.',
    challenge:
      'كان المشروع يملك جودة في الخدمة، لكن حضوره البصري لا يعكس مستوى الثقة الذي يريد الوصول إليه.',
    solution:
      'تم بناء Wordmark ونظام ألوان بارد، مع قواعد استخدام واضحة تجعل الظهور ثابتًا على العروض والسوشيال.',
    result:
      'هوية أكثر اتساقًا، لغة بصرية واضحة، ومواد إطلاق قابلة للتوسع بدون فقدان الشخصية.',
  },
  {
    title: 'Madar Launch',
    slug: 'madar-launch',
    clientName: 'Madar',
    projectRole: 'UI Direction',
    projectStatus: 'Launch Ready',
    projectDuration: '10 days',
    industry: 'SaaS / Product',
    category: 'Landing Page / UI',
    year: 2025,
    heroVisualLabel: 'واجهة إطلاق',
    heroYearLabel: '2025',
    heroThemeColor: '#00F5FF',
    featured: true,
    heroFeatured: true,
    heroOrder: 2,
    order: 2,
    services: ['Landing Pages', 'UI Direction'],
    deliverables: ['Landing Page UI', 'Hero System', 'Conversion Sections', 'Responsive Layout'],
    tags: ['UI/UX', 'Landing Pages', 'Conversion'],
    projectLayout: 'editorial',
    galleryLayout: 'fullWidth',
    shortDescription:
      'واجهة إطلاق مركزة تبني الانطباع الأول وتختصر قيمة المنتج بسرعة.',
    challenge:
      'الزائر كان يحتاج أن يفهم العرض خلال ثوانٍ، بدون شرح طويل أو واجهة مزدحمة.',
    solution:
      'تم تصميم Hero واضح، بنية معلومات مختصرة، وCTA متكرر بذكاء ضمن رحلة قراءة قصيرة.',
    result:
      'صفحة أكثر وضوحًا، سرعة فهم أعلى، وتجربة أولى تشعر بالثقة بدل الاستعراض.',
  },
  {
    title: 'Noor Social Kit',
    slug: 'noor-social-kit',
    clientName: 'Noor',
    projectRole: 'Social System Designer',
    projectStatus: 'Template System',
    projectDuration: '2 weeks',
    industry: 'Content / Social',
    category: 'Social Media Design',
    year: 2025,
    heroVisualLabel: 'قوالب محتوى',
    heroYearLabel: '2025',
    heroThemeColor: '#00FF88',
    featured: true,
    heroFeatured: true,
    heroOrder: 3,
    order: 3,
    services: ['Social Media Design', 'Templates'],
    deliverables: ['Post Templates', 'Story Templates', 'Campaign Rhythm', 'Content Rules'],
    tags: ['Social Media', 'Campaigns', 'Templates'],
    projectLayout: 'grid',
    galleryLayout: 'masonry',
    shortDescription:
      'قوالب محتوى مرنة تمنح الحساب إيقاعًا بصريًا ثابتًا وسهل الاستخدام.',
    challenge:
      'المحتوى كان جيدًا لكن الشكل متغير، مما جعل الحساب أقل تذكرًا وأصعب في القراءة.',
    solution:
      'تم بناء نظام قوالب يعتمد على مستويات نصية واضحة، مساحات ثابتة، ولمسات ضوء باردة.',
    result:
      'حساب أكثر ترتيبًا، إنتاج أسرع للمحتوى، وحضور بصري يمكن التعرف عليه بسهولة.',
  },
  {
    title: 'Sahm Refresh',
    slug: 'sahm-refresh',
    clientName: 'Sahm',
    projectRole: 'Visual Refresh',
    projectStatus: 'Refresh Direction',
    projectDuration: '2 weeks',
    industry: 'Local Brand',
    category: 'Visual Refresh',
    year: 2024,
    featured: false,
    order: 4,
    services: ['Visual Refresh', 'Brand Cleanup'],
    deliverables: ['Visual Cleanup', 'Color Refinement', 'Usage Rules', 'Social Direction'],
    tags: ['Visual Direction', 'Brand Cleanup'],
    projectLayout: 'minimal',
    galleryLayout: 'grid',
    shortDescription:
      'تنظيف وتطوير هوية قائمة لتبدو أكثر نضجًا بدون خسارة شخصيتها الأصلية.',
    challenge:
      'الهوية كانت تملك بذرة جيدة، لكنها تعاني من ازدحام بصري وعدم ثبات في التطبيقات.',
    solution:
      'تم تقليل العناصر، تهذيب لوحة الألوان، وبناء قواعد أكثر وضوحًا لاستخدام الشعار والمحتوى.',
    result:
      'حضور أنظف وأكثر نضجًا مع الحفاظ على روح العلامة الأصلية.',
  },
  {
    title: 'Volt Creators',
    slug: 'volt-creators',
    clientName: 'Volt Creators',
    projectRole: 'Visual Direction',
    projectStatus: 'Growth System',
    projectDuration: '3 weeks',
    industry: 'Creator Brand',
    category: 'Visual Direction',
    year: 2026,
    featured: true,
    order: 5,
    services: ['Visual Direction', 'Social System'],
    deliverables: ['Creator Identity', 'Social System', 'Content Templates', 'Launch Direction'],
    tags: ['Visual Direction', 'Social Media'],
    projectLayout: 'cinematic',
    galleryLayout: 'mixed',
    shortDescription:
      'اتجاه بصري كهربائي لصانع محتوى يريد أن ينتقل من منشورات متفرقة إلى حضور متماسك.',
    challenge:
      'الهوية الشخصية كانت قوية في الصوت، لكنها لا تملك نظامًا بصريًا يعكس طاقتها.',
    solution:
      'تم تطوير لغة بصرية تعتمد على الأزرق والسماوي، تقسيمات حادة، وإيقاع منشورات قابل للتكرار.',
    result:
      'حضور أكثر جرأة، قابلية أعلى للتذكر، ومجموعة قوالب تجعل النشر اليومي أسهل.',
  },
]

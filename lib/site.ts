import type { ComponentType, SVGProps } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  Feather,
  Globe2,
  Layers,
  Mail,
  MapPin,
  Mic,
  Newspaper,
  PenLine,
  Phone,
  Share2,
  Sparkles,
  Target,
} from 'lucide-react'
import { LinkedInIcon } from '@/components/icons/social'

export const site = {
  name: 'Ronald Korir',
  shortName: 'Ronald Korir',
  role: 'Content Writer • Digital Marketer • Multimedia Journalist',
  roles: [
    'Content Writer',
    'Digital Marketer',
    'Multimedia Journalist',
    'SEO Content Specialist',
    'Communications Professional',
  ],
  intro:
    'I help brands and organizations communicate clearly through SEO content, digital marketing, and multimedia storytelling.',
  location: 'Nairobi, Kenya',
  email: 'ronaldkiplangat8690@gmail.com',
  phone: '+254 720 124 867',
  url: 'https://www.linkedin.com/in/ronald-korir-63451b2b4',
  resumeFile: '/ronald-korir-resume.pdf',
  availability:
    'Open to content writing, digital marketing, communications, SEO, multimedia and freelance opportunities',
} as const

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/writing', label: 'Writing' },
  {  href: '/mindbook', label: 'Mindbook' },
  { href: '/contact', label: 'Contact' },
] as const

export type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>

export type SocialLink = {
  label: string
  href: string
  handle: string
  icon: IconComponent
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/RNLD777',
    handle: '@RNLD777',
    icon: Globe2,
  },
  {
    label: 'Substack',
    href: 'https://rnldkorir.substack.com',
    handle: 'rnldkorir.substack.com',
    icon: Globe2,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ronald-korir-63451b2b4',
    handle: '@ronaldkorir',
    icon: LinkedInIcon,
  },
  {
    label: 'Email',
    href: `mailto:${site.email}`,
    handle: site.email,
    icon: Mail,
  },
  {
    label: 'Phone',
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    handle: site.phone,
    icon: Phone,
  },
  // {
  //   label: 'Hashnode',
  //   href: '#',
  //   handle: 'Coming Soon',
  //   icon: Globe2,
  // },
  // {
  //   label: 'X',
  //   href: 'https://x.com/ronaldkorir',
  //   handle: '@ronaldkorir',
  //   icon: XIcon,
  // },
  // {
  //   label: 'Instagram',
  //   href: 'https://instagram.com/ronaldkorir',
  //   handle: '@ronaldkorir',
  //   icon: InstagramIcon,
  // },
]

export const contactChannels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail },
  {
    label: 'Phone',
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    icon: Phone,
  },
  { label: 'Based in', value: site.location, href: null, icon: MapPin },
] as const

/* ------------------------------------------------------------------ */
/* Featured work — the six disciplines shown on the homepage           */
/* ------------------------------------------------------------------ */

export type Discipline = {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  meta: string
}

export const disciplines: Discipline[] = [
  {
    slug: 'marketing-strategy',
    title: 'Marketing & Strategy',
    description:
      'SEO content, website copy, digital marketing, content strategy, campaign planning and audience-focused communication.',
    icon: Newspaper,
    meta: 'Marketing',
  },
  {
    slug: 'journalism-news-reporting',
    title: 'Journalism & News Reporting',
    description:
      'Reporting, interviewing, research, fact-checking and editorial storytelling grounded in accuracy and context.',
    icon: BookOpen,
    meta: 'Reporting',
  },
  {
    slug: 'thought-leadership',
    title: 'Thought Leadership',
    description:
      'Insight-driven articles and commentary that turn expertise, ideas and experience into useful perspectives.',
    icon: Target,
    meta: 'Insights',
  },
  {
    slug: 'scripts',
    title: 'Scripts',
    description:
      'Explainer, promotional, documentary and multimedia scripts built for clear storytelling and audience engagement.',
    icon: Mic,
    meta: 'Scripting',
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    description:
      'Audience-focused content, platform messaging, campaign ideas and social storytelling designed to build engagement.',
    icon: Share2,
    meta: 'Social',
  },
  {
    slug: 'creative-writing',
    title: 'Creative Writing',
    description:
      'Narrative writing that explores ideas, characters and stories with clarity, personality and imagination.',
    icon: Feather,
    meta: 'Narrative',
  },
]

export const stats = [
  { value: '2024', label: 'Mass Communication graduate' },
  { value: '6', label: 'Core writing disciplines' },
  { value: 'Writing', label: 'Content & communications' },
  { value: 'Nairobi, Kenya', label: 'Based in' },
] as const

/* ------------------------------------------------------------------ */
/* About — timeline                                                    */
/* ------------------------------------------------------------------ */

export type TimelineEntry = {
  period: string
  title: string
  org: string
  location?: string
  description: string
  tags: string[]
}

export const timeline: TimelineEntry[] = [
  {
    period: '2024',
    title: 'Bachelor of Arts in Mass Communication',
    org: 'Mount Kenya University',
    location: 'Thika, Kenya',
    description:
      'Graduated with a focus on multimedia journalism, public relations, digital communication, media law and ethics, and broadcast production.',
    tags: ['Mass Communication', 'Electronic Media', 'Multimedia', 'Public Relations'],
  },
  {
    period: 'May – July 2024',
    title: 'Multimedia Journalist Intern',
    org: 'Kenya News Agency',
    location: 'Nakuru, Kenya',
    description:
      'Wrote news stories and feature articles, conducted interviews, covered county development and public affairs, produced multimedia content, edited stories and worked under newsroom deadlines.',
    tags: ['Journalism', 'Reporting', 'Interviewing', 'Editing'],
  },
  {
    period: 'January 2025 – Present',
    title: 'Sales & Operations Associate',
    org: 'Mwananchi Hardware Store',
    location: 'Nakuru, Kenya',
    description:
      'Assisted customers with product selection, processed sales transactions, managed inventory and stock replenishment, maintained accurate stock records and supported daily business operations.',
    tags: ['Customer Service', 'Sales', 'Retail Operations', 'Inventory Management'],
  },
  {
    period: 'Present',
    title: 'Building my portfolio',
    org: 'Independent',
    location: 'Nairobi, Kenya',
    description:
      'Building my portfolio through content writing, digital marketing and professional development while pursuing full-time opportunities.',
    tags: ['Content Writing', 'Digital Marketing', 'Freelance'],
  },
]

export const values = [
  {
    title: 'Clarity over cleverness',
    description:
      'I write for understanding first, with clear language, strong structure and a reader-first approach.',
    icon: Sparkles,
  },
  {
    title: 'Research before publishing',
    description:
      'Strong content is rooted in evidence, interviews and careful fact-checking rather than assumptions.',
    icon: Newspaper,
  },
  {
    title: 'Strategy with execution',
    description:
      'I build content plans that are practical, useful and easy for teams to carry forward consistently.',
    icon: Layers,
  },
  {
    title: 'One voice, many formats',
    description:
      'The same core message can travel through articles, campaigns, scripts and social content without losing its purpose.',
    icon: PenLine,
  },
] as const

/* ------------------------------------------------------------------ */
/* Resume                                                              */
/* ------------------------------------------------------------------ */

export const education = [
  {
    degree: 'Bachelor of Arts in Mass Media and Communication',
    school: 'Mount Kenya University',
    period: '2024',
    location: 'Thika, Kenya',
    details: [
      'Studied multimedia journalism, public relations and digital communication.',
      'Focused on electronic media, media law and ethics, broadcast production and professional communication.',
    ],
  },
] as const

export const experience = [
  {
    role: 'Sales & Operations Associate',
    company: 'Mwananchi Supplies and Hardware',
    period: 'January 2025 – Present',
    location: 'Nakuru,Kenya',
    details: [
      'Assisted customers with product selection and processed sales transactions.',
      'Managed inventory and stock replenishment while maintaining accurate stock records.',
      'Supported daily business operations and delivered excellent customer service.',
    ],
  },
  {
    role: 'Multimedia Journalist Intern',
    company: 'Kenya News Agency',
    period: 'May 2024 – July 2024',
    location: 'Nakuru, Kenya',
    details: [
      'Wrote news stories and feature articles for publication.',
      'Conducted interviews and covered county development and public affairs.',
      'Produced multimedia content, edited stories and worked under newsroom deadlines.',
    ],
  },
] as const

export type SkillGroup = {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Marketing',
    skills: ['SEO', 'Content Strategy', 'Digital Marketing', 'Campaign Planning'],
  },
  {
    title: 'Writing',
    skills: ['Content Writing', 'SEO Writing', 'Creative Writing', 'Editing'],
  },
  {
    title: 'Journalism',
    skills: ['Reporting', 'Interviewing', 'Storytelling', 'Research'],
  },
  {
    title: 'Technical & Business',
    skills: [
      'Notion',
      'Canva',
      'Google Workspace',
      'Microsoft Office',
      'Basic Analytics',
      'WordPress',
      'Communication',
      'Customer Service',
      'Project Management',
      'Business Operations',
    ],
  },
]

/** Flat list, used for the resume PDF and schema.org markup. */
export const allSkills = skillGroups.flatMap((group) => group.skills)

export const languages = [
  { name: 'English', level: 'Fluent — professional' },
  { name: 'Swahili', level: 'Fluent — native' },
] as const

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string
  title: string
  category: string
  year: string
  summary: string
  contribution: string[]
  outcome: string
  stack: string[]
  image: string
  imageAlt: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'coming-soon-portfolio',
    title: 'Coming Soon',
    category: 'Coming Soon',
    year: '2026',
    summary:
      'Selected work samples, campaigns and case studies will be added here as they are ready to share.',
    contribution: ['Coming Soon'],
    outcome: 'Coming Soon',
    stack: ['Content Writing', 'Digital Marketing', 'Multimedia Storytelling'],
    image: '/placeholder.jpg',
    imageAlt: 'Placeholder illustration for upcoming portfolio work',
    featured: true,
  },
  {
    slug: 'coming-soon-writing',
    title: 'Coming Soon',
    category: 'Coming Soon',
    year: '2026',
    summary:
      'More project highlights will be published here as new work becomes available.',
    contribution: ['Coming Soon'],
    outcome: 'Coming Soon',
    stack: ['SEO', 'Communication', 'Storytelling'],
    image: '/placeholder.jpg',
    imageAlt: 'Placeholder illustration for upcoming portfolio work',
  },
]

export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((project) => project.category))),
]

/* ------------------------------------------------------------------ */
/* Writing portfolio                                                   */
/* ------------------------------------------------------------------ */

export type WritingCategory =
  | 'Marketing & Strategy'
  | 'Journalism & News Reporting'
  | 'Thought Leadership'
  | 'Scripts'
  | 'Social Media'
  | 'Creative Writing'

export type WritingPiece = {
  id: string
  slug: string

  title: string
  category: WritingCategory
  publication: string
  year: string
  readTime: string
  excerpt: string
  href: string
  featured?: boolean
  image: string
  imageAlt: string
  mindbookDate?: string
}

export const writingCategories: Array<'All' | WritingCategory> = [
  'All',
  'Marketing & Strategy',
  'Journalism & News Reporting',
  'Thought Leadership',
  'Scripts',
  'Social Media',
  'Creative Writing',
]

export const writing: WritingPiece[] = [
  {
    id: "coming-soon-marketing",
    slug: "coming-soon-marketing",
    title: "Coming Soon",
    category: "Marketing & Strategy",
    publication: "Portfolio",
    year: "2026",
    readTime: "Coming Soon",
    excerpt:
      "Selected writing samples in marketing and strategy will be published here as they are ready to share.",
    href: "#",
    featured: true,
    image: "/projects/saas-content-engine.png",
    imageAlt:
      "Portfolio preview showing a content strategy and marketing case study",
  },
  {
    id: "coming-soon-journalism",
    slug: "coming-soon-journalism",
    title: "Coming Soon",
    category: "Journalism & News Reporting",
    publication: "Portfolio",
    year: "2026",
    readTime: "Coming Soon",
    excerpt:
      "Reported work and editorial storytelling samples will be added soon.",
    href: "#",
    featured: false,
    image: "/projects/ngo-impact-report.png",
    imageAlt:
      "Portfolio preview showing a reporting and impact-focused story layout",
  },
  {
    id: "coming-soon-social",
    slug: "coming-soon-social",
    title: "Coming Soon",
    category: "Social Media",
    publication: "Portfolio",
    year: "2026",
    readTime: "Coming Soon",
    excerpt:
      "Social and campaign writing examples will be shared here once available.",
    href: "#",
    featured: false,
    image: "/projects/always-on-social-system.png",
    imageAlt:
      "Portfolio preview showing a social content and digital campaign concept",
  },
];
export const services = [
  {
    title: 'Content Writing',
    description:
      'SEO-first articles, website copy, blogs and long-form content written for clarity, credibility and conversions.',
  },
  {
    title: 'Digital Marketing',
    description:
      'Content strategy, campaign planning, audience research, SEO and performance-focused communication.',
  },
  {
    title: 'Journalism',
    description:
      'Reporting, interviewing, fact-checking and editorial storytelling that stays grounded in research.',
  },
  {
    title: 'Multimedia Storytelling',
    description:
      'Photography, video, scripting and multimedia content production for digital platforms.',
  },
] as const

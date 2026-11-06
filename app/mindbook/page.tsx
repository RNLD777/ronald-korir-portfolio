import type { Metadata } from 'next'

import { MindbookNewspaper } from '@/components/mindbook/mindbook-newspaper'
import { getMindbook } from '@/lib/notion/writing'

export const metadata: Metadata = {
  title: 'Mindbook Gazette',
  description:
    'A personal newspaper of Ronald Korir’s writing, ideas, observations and the connections between them.',
  alternates: { canonical: '/mindbook' },
}

export default async function MindbookPage() {
  const writing = await getMindbook()
  return <MindbookNewspaper writing={writing} />
}

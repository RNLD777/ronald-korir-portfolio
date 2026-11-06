import Link from 'next/link'
import { ArrowRightIcon, ArrowUpRightIcon, QuoteIcon } from 'lucide-react'
import type { WritingPiece } from '@/lib/site'

type Entry = WritingPiece & { mindbookDate?: string; quote?: string }

const connections = [
  { title: 'People, society & the self', note: 'Reporting, reflection and storytelling meet around what makes us who we are.', categories: ['Journalism & Reporting', 'Analysis & Commentary', 'Creative Writing'] },
  { title: 'Messages, media & influence', note: 'Different ways of shaping a message, understanding an audience and making an idea travel.', categories: ['Marketing & Strategy', 'Social Media', 'Scripts'] },
]

function Rule() {
  return <div className="h-px w-full bg-[#817563]/60" aria-hidden="true" />
}

export function MindbookNewspaper({ writing }: { writing: Entry[] }) {
  const entries = [...writing].sort((a, b) => new Date(b.mindbookDate ?? 0).getTime() - new Date(a.mindbookDate ?? 0).getTime())
  const lead = entries.find((entry) => entry.featured) ?? entries[0]
  const quoteCategories = ['Marketing & Strategy', 'Analysis & Commentary', 'Creative Writing']
  const quotes = entries.filter((entry) => entry.quote && quoteCategories.includes(entry.category))

  return (
    <main className="mx-auto w-full max-w-7xl px-3 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden border border-[#918572] bg-[#eee7d8] text-[#29251f] shadow-[0_18px_70px_rgba(45,36,22,0.10)]">
        <header className="px-5 pb-4 pt-6 sm:px-9 sm:pt-8">
          <div className="flex flex-wrap justify-between gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#756b5c] sm:text-[10px]">
            <span>Independent thought · writing · observation</span><span>Personal edition</span>
          </div>
          <Rule />
          <div className="py-5 text-center sm:py-7">
            <p className="font-serif text-sm italic text-[#756b5c]">The</p>
            <h1 className="font-serif text-[clamp(3.5rem,12vw,9rem)] font-bold leading-[0.78] tracking-[-0.075em]">Mindbook</h1>
            <p className="mt-4 font-serif text-sm tracking-[0.12em] sm:text-lg">A RECORD OF A MIND IN PROGRESS</p>
          </div>
          <Rule />
          <div className="flex flex-wrap justify-between gap-2 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#756b5c] sm:text-[10px]">
            <span>Vol. 01 · No. 01</span><span>{entries[0]?.year ?? 'A living publication'}</span><span>One mind · Many directions</span>
          </div>
          <Rule />
        </header>

        <section className="grid gap-5 border-b border-[#918572] px-5 py-7 sm:px-9 sm:py-9 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a4f36]">The editor’s note</p>
            <h2 className="max-w-3xl font-serif text-4xl leading-[0.98] tracking-[-0.04em] sm:text-6xl">One mind. Many directions.</h2>
            <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-[#554d41] sm:text-xl">Thoughts, observations, arguments and ideas — collected across different subjects, disciplines and forms of expression.</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#62594c]">Mindbook is less concerned with fitting every idea into a category and more interested in what happens when those ideas meet. Some become finished pieces. Others remain questions. All belong to the same ongoing conversation.</p>
          </div>
          <aside className="border-t border-[#918572] pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a4f36]">Inside this issue</p>
            <ol className="mt-3 space-y-2 font-serif text-lg"><li>01. The writing record</li><li>02. Words that stayed</li><li>03. The bigger picture</li></ol>
            <p className="mt-6 border-t border-[#918572] pt-3 text-xs leading-5 text-[#756b5c]">Not everything needs to become an article. Not every idea has to stay where it started.</p>
          </aside>
        </section>

        {lead && <section className="border-b border-[#918572] px-5 py-7 sm:px-9 sm:py-9">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a4f36]">Lead story · Selected writing</p><span className="text-[9px] uppercase tracking-[0.16em] text-[#756b5c]">{lead.category}</span></div>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-9">
            <div><h2 className="font-serif text-3xl leading-[1.02] tracking-[-0.035em] sm:text-5xl">{lead.title}</h2><p className="mt-4 font-serif text-base leading-relaxed text-[#62594c] sm:text-lg">{lead.excerpt}</p><Link href={lead.href} className="mt-5 inline-flex items-center gap-2 border-b border-[#29251f] pb-1 text-xs font-bold uppercase tracking-[0.12em] hover:text-[#8a4f36]">Read the full piece <ArrowUpRightIcon className="size-4" /></Link></div>
            {lead.image && lead.image !== '/placeholder.jpg' ? <div className="aspect-[16/10] overflow-hidden border border-[#918572] bg-[#ddd3c0]"><img src={lead.image} alt={lead.imageAlt || lead.title} className="h-full w-full object-cover grayscale-[18%]" /></div> : <div className="flex aspect-[16/10] items-center justify-center border border-[#918572] bg-[#e4dac8] font-serif text-3xl italic text-[#756b5c]">Ideas in progress</div>}
          </div>
        </section>}

        <section className="border-b border-[#918572] py-7 sm:py-9">
          <div className="px-5 sm:px-9"><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a4f36]">The record</p><div className="flex flex-wrap items-end justify-between gap-3"><h2 className="mt-1 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">A timeline of ideas</h2><span className="text-[10px] uppercase tracking-[0.14em] text-[#756b5c]">{entries.length} selected pieces</span></div><p className="mt-2 max-w-2xl text-sm leading-6 text-[#62594c]">A horizontal record of the work, moving across subjects and forms as the writing develops.</p></div>
          {entries.length ? <div className="mt-6 overflow-x-auto px-5 pb-4 [scrollbar-color:#9a8c77_transparent] [scrollbar-width:thin] sm:px-9"><div className="relative flex min-w-max gap-0 pt-7"><div className="absolute left-0 right-0 top-[34px] h-px bg-[#918572]" aria-hidden="true" />{entries.map((entry, index) => <article key={entry.slug} className="relative w-[245px] shrink-0 pr-5 sm:w-[290px] sm:pr-7"><span className="absolute left-0 top-[1px] z-10 size-[14px] rounded-full border-[3px] border-[#eee7d8] bg-[#8a4f36] ring-1 ring-[#918572]" aria-hidden="true" /><p className="mb-3 pt-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8a4f36]">{entry.year || 'Undated'} · {String(index + 1).padStart(2, '0')}</p><Link href={entry.href} className="group block border-l border-[#918572] pl-3 hover:border-[#8a4f36]"><span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#756b5c]">{entry.category}</span><h3 className="mt-2 font-serif text-xl leading-tight group-hover:underline decoration-1 underline-offset-4">{entry.title}</h3><p className="mt-2 line-clamp-3 text-xs leading-5 text-[#62594c]">{entry.excerpt}</p><span className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.12em]">Open piece <ArrowUpRightIcon className="size-3" /></span></Link></article>)}</div></div> : <p className="px-5 pt-5 text-sm text-[#62594c] sm:px-9">The archive will grow here as writing is published.</p>}
        </section>

        <section className="border-b border-[#918572] px-5 py-7 sm:px-9 sm:py-9">
          <div className="flex items-center gap-2 text-[#8a4f36]"><QuoteIcon className="size-4" /><p className="text-[9px] font-bold uppercase tracking-[0.2em]">Words that stayed · From the pages</p></div>
          <h2 className="mt-2 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">Lines worth keeping.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#62594c]">Selected passages from the analysis, marketing and creative work — chosen because they carry an idea, reveal a point of view or say something worth sitting with.</p>
          {quotes.length ? <div className="mt-6 grid gap-0 md:grid-cols-2">{quotes.map((entry) => <figure key={entry.slug} className="border-t border-[#918572] py-5 md:px-5 md:odd:border-r md:odd:pl-0 md:even:pr-0"><blockquote className="font-serif text-2xl leading-[1.18] sm:text-3xl">“{entry.quote}”</blockquote><figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[9px] uppercase tracking-[0.12em] text-[#756b5c]"><span>{entry.title} · {entry.category}</span><Link href={entry.href} className="inline-flex items-center gap-1 font-bold text-[#8a4f36] hover:underline">Read piece <ArrowUpRightIcon className="size-3" /></Link></figcaption></figure>)}</div> : <p className="mt-6 border-y border-[#918572] py-6 font-serif text-lg italic text-[#756b5c]">Original excerpts will appear here as full-text passages are available from the archive.</p>}
        </section>

        <section className="px-5 py-7 sm:px-9 sm:py-9">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a4f36]">The bigger picture</p>
          <h2 className="mt-2 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-5xl">Different subjects. Shared instincts.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#62594c]">The work moves between journalism, commentary, marketing and creative writing. The thread is the same: noticing something, asking what it means, then finding a way to communicate it.</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">{connections.map((connection, index) => { const related = entries.filter((entry) => connection.categories.includes(entry.category)); return <article key={connection.title} className="border border-[#918572] p-5 sm:p-6"><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8a4f36]">Connection {String(index + 1).padStart(2, '0')}</p><h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">{connection.title}</h3><p className="mt-2 text-sm leading-6 text-[#62594c]">{connection.note}</p><div className="mt-5 border-t border-[#918572] pt-3">{related.length ? <ul className="space-y-3">{related.map((entry) => <li key={entry.slug} className="flex items-start justify-between gap-3"><div><p className="text-[9px] uppercase tracking-[0.12em] text-[#756b5c]">{entry.category}</p><Link href={entry.href} className="mt-1 block font-serif text-lg leading-tight hover:underline decoration-1 underline-offset-4">{entry.title}</Link></div><ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-[#8a4f36]" /></li>)}</ul> : <p className="text-xs italic text-[#756b5c]">More pieces will give this connection shape.</p>}</div></article> })}</div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#918572] pt-5"><p className="font-serif text-xl italic text-[#62594c]">One mind, moving between different questions.</p><Link href="/writing" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] hover:text-[#8a4f36]">Browse the full writing archive <ArrowRightIcon className="size-4" /></Link></div>
        </section>
        <footer className="border-t border-[#918572] bg-[#e5dccb] px-5 py-4 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-[#756b5c] sm:px-9">The Mindbook · A personal record of ideas in motion</footer>
      </div>
    </main>
  )
}

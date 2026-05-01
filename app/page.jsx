import Image from 'next/image';
import Link from 'next/link';
import { seasons } from './data/seasons';
import ImageLightbox from './components/ImageLightbox';

const BASE = 'https://static.wixstatic.com/media/';

const newsImages = [
  '/news_may_2026.png',
  BASE + '4fafd8_76a8afdb11ec42629dc885e135107786~mv2.png',
  BASE + '4fafd8_394305b7e88742a29ae5fbccfa02571b~mv2.png',
  BASE + '4fafd8_d598898949ad48eb85daacedf09894d8~mv2.png',
  BASE + '4fafd8_f804ff3dfe7b49739c7782a002fa9b75~mv2.jpg',
  BASE + '4fafd8_2c9f25af6a3841d094ae49f2e4430b8e~mv2.png',
  BASE + '4fafd8_1c30066d8a664b7b9e1ae50be8ecbffb~mv2.jpg',
  BASE + '4fafd8_cbfc196bf29f4855a4473ea6c9a39650~mv2.png',
  BASE + '4fafd8_84eafc60cc324264a3f9385e05a68e8e~mv2.png',
];

const stats = [
  ['PLATFORM', 'DELETE TV'],
  ['FORMAT', 'VIDEO ART'],
  ['SEASONS', '2015_2026'],
  ['STATUS', 'SUBMISSIONS CLOSED'],
];

const navLinks = [
  { label: 'NEWS', href: '#news' },
  { label: 'BROADCAST', href: '#broadcast' },
  { label: 'SUBMIT', href: 'https://filmfreeway.com/DeleteTV' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#030814] text-cyan-100 overflow-x-hidden relative font-mono">
      <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:linear-gradient(rgba(0,180,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 pointer-events-none opacity-30 [background:linear-gradient(to_bottom,transparent_0%,rgba(0,255,255,0.03)_50%,transparent_100%)]" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-12">

        {/* Hero */}
        <section className="border border-cyan-500/30 bg-black/30 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,180,255,0.18)] p-6 md:p-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3 text-xs tracking-[0.35em] text-cyan-300 uppercase">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
                <span>Online</span>
                <span className="text-cyan-500/60">//</span>
                <span>Archive Signal :: Active</span>
              </div>

              <div className="space-y-2">
                <p className="text-cyan-400 text-sm tracking-[0.4em] uppercase">Broadcast_Node</p>
                <p className="text-cyan-500/80 text-xs tracking-[0.35em] uppercase">Experimental Transmission</p>
              </div>

              <div className="space-y-4">
                <p className="text-cyan-300/90 text-sm md:text-base tracking-widest uppercase"># &gt; create | delete</p>
                <p className="text-cyan-100 text-4xl md:text-6xl xl:text-7xl leading-none font-bold uppercase drop-shadow-[0_0_24px_rgba(34,211,238,0.45)] whitespace-nowrap">
                  # &gt; DELETE TV
                </p>
              </div>

              <nav className="pt-2">
                <p className="text-cyan-500 text-xs tracking-[0.4em] uppercase mb-3">Channel_Index</p>
                <div className="space-y-2 text-sm md:text-base text-cyan-100/80">
                  {navLinks.map(({ label, href }) => (
                    <div key={label}>
                      <Link
                        href={href}
                        className="hover:text-cyan-300 transition-colors"
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {label}
                      </Link>
                    </div>
                  ))}
                </div>
              </nav>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="#broadcast"
                  className="px-6 py-3 rounded-2xl border border-cyan-300 bg-cyan-400/10 text-cyan-100 uppercase tracking-[0.25em] text-sm shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:bg-cyan-300/15 transition"
                >
                  &gt; View Broadcast Archive &lt;
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-3 rounded-2xl border border-cyan-800/80 text-cyan-300 uppercase tracking-[0.25em] text-sm hover:border-cyan-400 hover:text-cyan-100 transition"
                >
                  Contact Channel
                </Link>
              </div>
            </div>

            <aside className="w-full lg:w-[360px] shrink-0">
              <div className="rounded-3xl border border-cyan-500/30 bg-[#06111f]/80 p-5 shadow-[inset_0_0_35px_rgba(0,174,255,0.08),0_0_30px_rgba(0,140,255,0.14)]">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-cyan-400">
                  <span>Transmission_Core // Right Node</span>
                  <span className="text-cyan-300">Secure</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {stats.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-cyan-500/20 bg-black/30 p-4 min-h-[92px] flex flex-col justify-between"
                    >
                      <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-500">{label}</span>
                      <span className="text-sm md:text-base text-cyan-100 break-words">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-black/30 p-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-500 mb-3">Tagline</p>
                  <p className="text-xs leading-6 text-cyan-200/80">
                    FOR LUCK | FOR LAUGHS | FOR THE UNKNOWN
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* About / Status */}
        <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mt-10">
          <div className="rounded-3xl border border-cyan-500/25 bg-black/25 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(0,174,255,0.12)]">
            <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-4">About The Channel</p>
            <div className="space-y-4 text-cyan-100/85 text-base md:text-lg leading-relaxed">
              <p>&gt; DELETE TV presents a broadcast-oriented archive for video art.</p>
              <p>&gt; The platform is structured around seasons.</p>
              <p>&gt; Current public navigation includes News, Broadcast, Submit, and Contact.</p>
              <p>&gt; The broadcast archive spans from Season 1 in 2015 to Season 12 in 2026.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 md:p-8">
            <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-4">Submission Status</p>
            <div className="space-y-4 text-cyan-100/80 leading-relaxed">
              <p>&gt; Submissions closed.</p>
              <p>&gt; See you another time around.</p>
              <p>&gt; Archive remains accessible through the broadcast section.</p>
            </div>
          </div>
        </section>

        {/* News image grid */}
        <section id="news" className="mt-10 rounded-3xl border border-cyan-500/25 bg-black/25 backdrop-blur-sm p-6 md:p-8">
          <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-2">// News_Feed</p>
          <h2 className="text-3xl md:text-5xl text-cyan-100 uppercase tracking-wide mb-8">News</h2>
          <ImageLightbox
            images={newsImages}
            altPrefix="News image"
            gridClassName="grid-cols-3"
            natural={true}
          />
        </section>

        {/* Season Archive */}
        <section
          id="broadcast"
          className="mt-10 rounded-3xl border border-cyan-500/25 bg-black/25 backdrop-blur-sm p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-2">Broadcast</p>
              <h2 className="text-3xl md:text-5xl text-cyan-100 uppercase tracking-wide">Season Archive</h2>
            </div>
            <p className="text-cyan-200/70 max-w-xl leading-relaxed">
              &gt; Twelve seasons currently listed in the public broadcast archive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {seasons.map((season, i) => (
              <Link
                key={season.slug}
                href={`/broadcast/${season.slug}`}
                className="group rounded-3xl border border-cyan-500/20 bg-[#06111f]/60 overflow-hidden shadow-[inset_0_0_20px_rgba(0,180,255,0.05)] hover:border-cyan-300/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition"
              >
                {season.cover ? (
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={season.cover}
                      alt={season.fullTitle}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06111f] via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="h-44 w-full bg-gradient-to-br from-cyan-900/30 to-blue-900/20 flex items-center justify-center border-b border-cyan-500/10">
                    <span className="text-cyan-500/40 text-4xl font-bold tracking-widest">{season.code}</span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-cyan-400 tracking-[0.3em] text-xs uppercase">{season.code}</span>
                    <span className="text-cyan-700 group-hover:text-cyan-300 transition text-xs">{season.date}</span>
                  </div>
                  <h3 className="text-cyan-100 text-lg mb-2 leading-snug">{season.fullTitle}</h3>
                  <p className="text-cyan-200/70 leading-relaxed text-sm">{season.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-cyan-500/70 text-sm tracking-wide">
            // Archive years currently visible: 2015 → 2026
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-10 rounded-3xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,174,255,0.12)]"
        >
          <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl uppercase text-cyan-100 mb-8 drop-shadow-[0_0_22px_rgba(34,211,238,0.35)]">
            For Luck | For Laughs | For The Unknown
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:office@delete-tv.com"
              className="inline-block px-8 py-4 rounded-2xl border border-cyan-300 bg-cyan-400/10 text-cyan-50 uppercase tracking-[0.35em] text-sm shadow-[0_0_30px_rgba(34,211,238,0.28)] hover:scale-[1.02] hover:bg-cyan-300/15 transition"
            >
              &gt; Contact &lt;
            </a>
            <a
              href="https://www.instagram.com/delete_tv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DELETE TV on Instagram"
              className="inline-flex items-center justify-center w-[54px] h-[54px] rounded-2xl border border-cyan-500/40 text-cyan-300 hover:border-cyan-300 hover:text-cyan-100 hover:scale-[1.02] transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </section>

        <footer className="py-8 text-center text-xs uppercase tracking-[0.35em] text-cyan-500/60">
          DELETE TV // CREATE | DELETE // BROADCAST ARCHIVE ACTIVE
        </footer>
      </main>
    </div>
  );
}

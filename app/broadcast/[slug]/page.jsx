import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { seasons, getSeasonBySlug } from '../../data/seasons';
import ImageLightbox from '../../components/ImageLightbox';

export async function generateStaticParams() {
  return seasons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const season = getSeasonBySlug(slug);
  if (!season) return {};
  return {
    title: `${season.fullTitle} — DELETE TV`,
    description: season.desc,
  };
}

export default async function BroadcastPage({ params }) {
  const { slug } = await params;
  const season = getSeasonBySlug(slug);
  if (!season) notFound();

  const currentIndex = seasons.findIndex((s) => s.slug === slug);
  const prev = seasons[currentIndex + 1] ?? null;
  const next = seasons[currentIndex - 1] ?? null;

  return (
    <div className="min-h-screen bg-[#030814] text-cyan-100 overflow-x-hidden relative font-mono">
      <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:linear-gradient(rgba(0,180,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-12">

        <Link
          href="/#broadcast"
          className="inline-flex items-center gap-2 text-cyan-400 text-xs tracking-[0.3em] uppercase mb-8 hover:text-cyan-200 transition-colors"
        >
          ← Back to Archive
        </Link>

        {/* Cover */}
        <section className="rounded-3xl overflow-hidden border border-cyan-500/25 shadow-[0_0_60px_rgba(0,174,255,0.15)] mb-8">
          {season.cover ? (
            <div className="relative w-full h-[420px] md:h-[520px]">
              <Image
                src={season.cover}
                alt={season.fullTitle}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1152px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-[#030814]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-[55%]">
                <p className="text-cyan-400 text-xs tracking-[0.4em] uppercase mb-2">{season.code}</p>
                <h1 className="text-xl md:text-3xl font-bold uppercase text-cyan-100 drop-shadow-[0_0_24px_rgba(34,211,238,0.45)] leading-tight">
                  {season.fullTitle}
                </h1>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-[280px] md:h-[360px] bg-gradient-to-br from-cyan-900/30 to-blue-900/10 flex flex-col items-center justify-center">
              <p className="text-cyan-500/50 text-xs tracking-[0.4em] uppercase mb-4">{season.code}</p>
              <h1 className="text-4xl md:text-6xl font-bold uppercase text-cyan-100/60 drop-shadow-[0_0_24px_rgba(34,211,238,0.2)]">
                {season.fullTitle}
              </h1>
            </div>
          )}
        </section>

        {/* Info bar */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            ['Season', season.code],
            ['Year', season.date],
            ['Format', 'Video Art'],
            ['Channel', 'DELETE TV'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-cyan-500/20 bg-black/30 p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-500 mb-2">{label}</p>
              <p className="text-cyan-100 text-sm">{value}</p>
            </div>
          ))}
        </section>

        {/* Description */}
        <section className="rounded-3xl border border-cyan-500/25 bg-black/25 backdrop-blur-sm p-6 md:p-8 mb-8">
          <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-4">About This Season</p>
          <p className="text-cyan-100/85 text-base md:text-lg leading-relaxed">&gt; {season.desc}</p>
        </section>

        {/* Image gallery */}
        {season.images.length > 0 && (
          <section className="rounded-3xl border border-cyan-500/25 bg-black/25 backdrop-blur-sm p-6 md:p-8 mb-8">
            <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-6">Episode Stills</p>
            <ImageLightbox
              images={season.images}
              altPrefix={`${season.title} still`}
              gridClassName="grid-cols-2 md:grid-cols-3"
              aspectClassName="aspect-video"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </section>
        )}

        {/* Prev / Next navigation */}
        <nav className="grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/broadcast/${prev.slug}`}
              className="rounded-2xl border border-cyan-500/20 bg-black/30 p-5 hover:border-cyan-300/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition"
            >
              <p className="text-cyan-500 text-[10px] tracking-[0.3em] uppercase mb-2">← Previous</p>
              <p className="text-cyan-100 text-sm">{prev.fullTitle}</p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/broadcast/${next.slug}`}
              className="rounded-2xl border border-cyan-500/20 bg-black/30 p-5 hover:border-cyan-300/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition text-right"
            >
              <p className="text-cyan-500 text-[10px] tracking-[0.3em] uppercase mb-2">Next →</p>
              <p className="text-cyan-100 text-sm">{next.fullTitle}</p>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        <footer className="py-8 text-center text-xs uppercase tracking-[0.35em] text-cyan-500/60">
          DELETE TV // CREATE | DELETE // BROADCAST ARCHIVE ACTIVE
        </footer>
      </main>
    </div>
  );
}

'use client';

export default function BlueNeonPortalLandingPage() {
  const seasons = [
    {
      code: '[S 11]',
      title: 'Season 11 Collection 2025',
      desc: 'Latest DELETE TV broadcast collection.',
    },
    {
      code: '[S 10]',
      title: 'Season 10 Collection 2024',
      desc: 'Archive broadcast season.',
    },
    {
      code: '[S 09]',
      title: 'Season 9 Collection 2023',
      desc: 'Curated moving-image selection.',
    },
    {
      code: '[S 08]',
      title: 'Season 8 Collection 2022',
      desc: 'Experimental film and video archive.',
    },
    {
      code: '[S 07]',
      title: 'Season 7 Collection 2021',
      desc: 'Expanded seasonal broadcast catalog.',
    },
    {
      code: '[S 06]',
      title: 'Season 6 Collection 2020',
      desc: 'Programmed visual art season.',
    },
    {
      code: '[S 05]',
      title: 'Season 5 Collection 2019',
      desc: 'Broadcast archive entry.',
    },
    {
      code: '[S 04]',
      title: 'Season 4 Collection 2018',
      desc: 'Seasonal selection from the archive.',
    },
    {
      code: '[S 03]',
      title: 'Season 3 Collection 2017',
      desc: 'Historic DELETE TV season.',
    },
    {
      code: '[S 02]',
      title: 'Season 2 Collection 2016',
      desc: 'Early archive collection.',
    },
    {
      code: '[S 01]',
      title: 'Season 1 Collection 2015',
      desc: 'The first available season.',
    },
  ];

  const stats = [
    ['PLATFORM', 'DELETE TV'],
    ['FORMAT', 'VIDEO ART'],
    ['SEASONS', '2015_2025'],
    ['STATUS', 'SUBMISSIONS CLOSED'],
  ];

  return (
    <div className="min-h-screen bg-[#030814] text-cyan-100 overflow-x-hidden relative font-mono">
      <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:linear-gradient(rgba(0,180,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 pointer-events-none opacity-30 [background:linear-gradient(to_bottom,transparent_0%,rgba(0,255,255,0.03)_50%,transparent_100%)]" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-12">
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

              <div className="pt-2">
                <p className="text-cyan-500 text-xs tracking-[0.4em] uppercase mb-3">Channel_Index</p>
                <div className="space-y-2 text-sm md:text-base text-cyan-100/80">
                  <p>NEWS</p>
                  <p>BROADCAST</p>
                  <p>SUBMIT</p>
                  <p>CONTACT</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#broadcast"
                  className="px-6 py-3 rounded-2xl border border-cyan-300 bg-cyan-400/10 text-cyan-100 uppercase tracking-[0.25em] text-sm shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:bg-cyan-300/15 transition"
                >
                  &gt; View Broadcast Archive &lt;
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-2xl border border-cyan-800/80 text-cyan-300 uppercase tracking-[0.25em] text-sm hover:border-cyan-400 hover:text-cyan-100 transition"
                >
                  Contact Channel
                </a>
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
                  <p className="text-xs leading-6 text-cyan-200/80 break-all">
                    FOR LUCK | FOR LAUGHS | FOR THE UNKNOWN
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mt-10">
          <div className="rounded-3xl border border-cyan-500/25 bg-black/25 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(0,174,255,0.12)]">
            <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-4">About The Channel</p>
            <div className="space-y-4 text-cyan-100/85 text-base md:text-lg leading-relaxed">
              <p>&gt; DELETE TV presents a broadcast-oriented archive for video art.</p>
              <p>&gt; The platform is structured around seasons.</p>
              <p>&gt; Current public navigation includes News, Broadcast, Submit, and Contact.</p>
              <p>&gt; The broadcast archive spans from Season 1 in 2015 to Season 11 in 2025.</p>
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
              &gt; Eleven seasons currently listed in the public broadcast archive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {seasons.map((item, i) => (
              <div
                key={item.code}
                className="group rounded-3xl border border-cyan-500/20 bg-[#06111f]/60 p-5 shadow-[inset_0_0_20px_rgba(0,180,255,0.05)] hover:border-cyan-300/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-cyan-400 tracking-[0.3em] text-xs uppercase">{item.code}</span>
                  <span className="text-cyan-700 group-hover:text-cyan-300 transition">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-cyan-100 text-xl mb-3 leading-snug">{item.title}</h3>
                <p className="text-cyan-200/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-cyan-500/70 text-sm tracking-wide">
            // Archive years currently visible: 2015 → 2025
          </p>
        </section>

        <section
          id="contact"
          className="mt-10 rounded-3xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,174,255,0.12)]"
        >
          <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-6xl uppercase text-cyan-100 mb-6 drop-shadow-[0_0_22px_rgba(34,211,238,0.35)]">
            For Luck | For Laughs | For The Unknown
          </h2>

          <button className="px-8 py-4 rounded-2xl border border-cyan-300 bg-cyan-400/10 text-cyan-50 uppercase tracking-[0.35em] text-sm shadow-[0_0_30px_rgba(34,211,238,0.28)] hover:scale-[1.02] hover:bg-cyan-300/15 transition">
            &gt; Open Contact Channel &lt;
          </button>
        </section>

        <footer className="py-8 text-center text-xs uppercase tracking-[0.35em] text-cyan-500/60">
          DELETE TV // CREATE | DELETE // BROADCAST ARCHIVE ACTIVE
        </footer>
      </main>
    </div>
  );
}
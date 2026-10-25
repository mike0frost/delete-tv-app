import Link from 'next/link';
import DeadlineCountdown from './DeadlineCountdown';

const FILMFREEWAY_URL = 'https://filmfreeway.com/DeleteTV';
const CONTACT_EMAIL = 'office@delete-tv.com';

export const metadata = {
  title: 'DELETE TV 2027 — Open Call for Experimental Film & Video Art',
  description:
    'Submit video art, experimental shorts and AI films up to 10 min. Deadline 31 Dec 2026. Selected works are broadcast in Austria and streamed worldwide.',
  alternates: {
    canonical: 'https://delete-tv.com/open-call-2027',
  },
  openGraph: {
    title: 'DELETE TV 2027 — Open Call for Experimental Film & Video Art',
    description:
      'Submit video art, experimental shorts and AI films up to 10 min. Deadline 31 Dec 2026. Selected works are broadcast in Austria and streamed worldwide.',
    url: 'https://delete-tv.com/open-call-2027',
    type: 'website',
  },
};

const quickFacts = [
  ['Max runtime', '10 minutes'],
  ['Who can submit', 'Artists worldwide'],
  ['Regular deadline', '31 Dec 2026'],
  ['Entry fee', '$20 / $35'],
];

const dates = [
  ['Opening date', '3 August 2026'],
  ['Regular deadline', '31 December 2026'],
  ['Extended deadline', '17 February 2027'],
  ['Notification date', '14 March 2027'],
  ['Event dates', '18 April – 31 August 2027'],
];

const categories = [
  [
    'Experimental Video Art',
    'Art films without a narrative line that reach the viewer through visually outstanding techniques.',
  ],
  [
    'Experimental Shorts',
    'Art films with an outstanding visual technique that also follow a narrative storyline.',
  ],
  [
    'Narrative Shorts',
    'Art films driven by an outstanding artistic narration rather than by visual technique.',
  ],
];

const faqs = [
  [
    'Who can submit?',
    'Artists and filmmakers from anywhere in the world. All entries are sent through FilmFreeway.',
  ],
  [
    'Are AI films accepted?',
    'Yes. AI-assisted and AI-generated films are welcome alongside video art and experimental shorts. Choose the category that fits your work best.',
  ],
  [
    'How long can my film be?',
    'Up to 10 minutes. Films longer than 10 minutes are not accepted. Entries must be in English or subtitled in English.',
  ],
  [
    'Does my film need to be a premiere?',
    `The submission terms do not set a premiere requirement. If you have questions about earlier screenings or online releases, write to ${CONTACT_EMAIL} before you submit.`,
  ],
  [
    'How are films selected?',
    'Submissions are reviewed by DELETE TV. Originality, artistic vision and conceptual integrity increase the probability of recognition. Selected artists are notified by 14 March 2027.',
  ],
  [
    'What rights do I give DELETE TV?',
    'By submitting you authorize DELETE TV to use still frames of your work to promote you on its website, TV programs, visual art websites and event venues; to use excerpts of up to 10% of the film’s length for promotion on television; to include the film in the non-commercial DELETE TV online archive; and to screen it at festivals within DELETE TV’s partner networks. The full wording is in the Rules & Terms on FilmFreeway.',
  ],
  [
    'What is the DELETE TV archive?',
    'A non-commercial online archive. Inclusion of your film in it is part of the authorization you give when you submit.',
  ],
];

const cardClass =
  'rounded-3xl border border-cyan-500/25 bg-black/25 backdrop-blur-sm p-6 md:p-8';
const eyebrowClass = 'text-cyan-500 text-xs tracking-[0.35em] uppercase mb-4';
const h2Class =
  'text-2xl md:text-3xl text-cyan-100 uppercase tracking-wide mb-6 text-balance';
const bodyClass = 'text-cyan-100/85 text-base md:text-lg leading-relaxed';

function SubmitButton({ children = 'Submit via FilmFreeway' }) {
  return (
    <a
      href={FILMFREEWAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 sm:px-8 py-4 rounded-2xl border border-red-400 bg-red-500/10 text-red-300 text-center uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sm shadow-[0_0_30px_rgba(239,68,68,0.28)] hover:bg-red-500/20 hover:text-red-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-300"
    >
      &gt; {children}{' '}&lt;
    </a>
  );
}

export default function OpenCall2027Page() {
  return (
    <div className="min-h-screen bg-[#030814] text-cyan-100 overflow-x-hidden relative font-mono">
      <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:linear-gradient(rgba(0,180,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-12 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 text-xs tracking-[0.3em] uppercase hover:text-cyan-200 transition-colors"
        >
          ← Back to DELETE TV
        </Link>

        {/* Hero */}
        <section className="border border-red-500/50 bg-black/30 backdrop-blur-md rounded-3xl shadow-[0_0_36px_rgba(239,68,68,0.14)] p-6 md:p-10">
          <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-4">
            {'// Open_Call_2027'}
          </p>
          <h1 className="font-bold uppercase leading-tight text-balance drop-shadow-[0_0_24px_rgba(34,211,238,0.45)]">
            <span className="block text-cyan-400 text-sm md:text-base tracking-[0.3em] mb-3">
              DELETE TV 2027 —
            </span>
            <span className="block text-cyan-100 text-3xl md:text-5xl xl:text-6xl">
              Open Call for Experimental Film &amp; Video Art
            </span>
          </h1>

          <div className={`mt-6 max-w-3xl space-y-4 ${bodyClass}`}>
            <p>
              &gt; DELETE TV is an international platform for video art, experimental short films
              and AI cinema, running since 2015. We are looking for work that bends perception.
            </p>
            <p>
              &gt; Every selected work is broadcast in Austria and livestreamed across the world.
              The overall winner receives the DELETE TV Award.
            </p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div className="self-start">
              <SubmitButton />
            </div>
            <DeadlineCountdown />
          </div>
        </section>

        {/* Quick facts */}
        <section aria-label="Key facts" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickFacts.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-cyan-500/20 bg-black/30 p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-500 mb-2">{label}</p>
              <p className="text-cyan-100 text-sm md:text-base">{value}</p>
            </div>
          ))}
        </section>

        {/* Accepted work */}
        <section className={cardClass}>
          <p className={eyebrowClass}>What We Accept</p>
          <h2 className={h2Class}>Video art, experimental shorts and AI films</h2>
          <p className={`${bodyClass} max-w-3xl`}>
            &gt; We accept video art, experimental short films and AI-assisted or AI-generated
            films. Submissions are made in one of three FilmFreeway categories.
          </p>
          <ul className="mt-6 grid md:grid-cols-3 gap-4">
            {categories.map(([name, text]) => (
              <li key={name} className="rounded-2xl border border-cyan-500/20 bg-black/30 p-5">
                <h3 className="text-cyan-100 text-base uppercase tracking-wide mb-2">{name}</h3>
                <p className="text-cyan-100/75 text-sm leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Rules + dates */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className={cardClass}>
            <p className={eyebrowClass}>Rules</p>
            <h2 className={h2Class}>Before you submit</h2>
            <ul className={`space-y-3 ${bodyClass}`}>
              <li>&gt; Films may be up to 10 minutes long. Longer films are not accepted.</li>
              <li>&gt; Entries must be in English or subtitled in English.</li>
              <li>&gt; All entries are sent via FilmFreeway.</li>
              <li>&gt; Entry fees are non-refundable.</li>
              <li>&gt; Artists from all countries are welcome.</li>
            </ul>
          </div>

          <div className={cardClass}>
            <p className={eyebrowClass}>Dates &amp; Fees</p>
            <h2 className={h2Class}>Deadlines and entry fee</h2>
            <dl className="divide-y divide-cyan-500/15">
              {dates.map(([label, value]) => (
                <div key={label} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
                  <dt className="text-cyan-500 text-xs uppercase tracking-[0.25em]">{label}</dt>
                  <dd className="text-cyan-100 text-sm md:text-base">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-cyan-100/80 text-sm leading-relaxed">
              Entry fee in all three categories: <strong className="text-cyan-100">$20</strong> at
              the regular deadline, <strong className="text-cyan-100">$35</strong> at the extended
              deadline (USD, non-refundable).
            </p>
          </div>
        </section>

        {/* Selected work */}
        <section className={cardClass}>
          <p className={eyebrowClass}>Selected Work</p>
          <h2 className={h2Class}>Broadcast in Austria. Livestreamed worldwide.</h2>
          <div className={`space-y-4 max-w-3xl ${bodyClass}`}>
            <p>
              &gt; Every selected work enters the DELETE TV transmission: broadcast in Austria on
              OKTO TV and livestreamed across the world, with event dates from 18 April to 31
              August 2027.
            </p>
            <p>
              &gt; The overall winner receives the DELETE TV Award, given to the work that bends
              perception most elegantly.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className={cardClass}>
          <p className={eyebrowClass}>FAQ</p>
          <h2 className={h2Class}>Questions about the open call</h2>
          <dl className="divide-y divide-cyan-500/15">
            {faqs.map(([question, answer]) => (
              <div key={question} className="py-5 first:pt-0 last:pb-0">
                <dt className="text-cyan-100 text-base md:text-lg mb-2">{question}</dt>
                <dd className="text-cyan-100/75 text-sm md:text-base leading-relaxed max-w-3xl">
                  {answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl border border-red-500/30 bg-black/25 shadow-[0_0_30px_rgba(239,68,68,0.07)] p-8 md:p-12 text-center">
          <p className="text-red-400/70 text-xs tracking-[0.35em] uppercase mb-3">Open Call 2027</p>
          <h2 className="text-2xl md:text-4xl uppercase text-cyan-100 mb-8 text-balance">
            Submit by 31 December 2026
          </h2>
          <SubmitButton />
          <p className="mt-8 text-cyan-100/70 text-sm">
            Questions? Write to{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-cyan-300 underline underline-offset-4 hover:text-cyan-100 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

        <footer className="py-8 text-center text-xs uppercase tracking-[0.35em] text-cyan-500/60">
          DELETE TV // CREATE | DELETE // BROADCAST ARCHIVE ACTIVE
        </footer>
      </main>
    </div>
  );
}

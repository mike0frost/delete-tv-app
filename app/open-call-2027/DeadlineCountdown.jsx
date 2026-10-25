'use client';

import { useSyncExternalStore } from 'react';

// FilmFreeway deadlines close at 11:59 PM London time. London is on GMT (UTC+0) in
// December and February, so these UTC instants match London clock time exactly.
const REGULAR_DEADLINE = Date.parse('2026-12-31T23:59:00Z');
const EXTENDED_DEADLINE = Date.parse('2027-02-17T23:59:00Z');

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function subscribe(onTick) {
  const id = setInterval(onTick, 15_000);
  return () => clearInterval(id);
}

// Snapshot changes once per minute, so the component re-renders once per minute.
function getSnapshot() {
  return Math.floor(Date.now() / MINUTE) * MINUTE;
}

function getServerSnapshot() {
  return null;
}

const pad = (n) => String(n).padStart(2, '0');

export default function DeadlineCountdown() {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const box = 'rounded-2xl border border-cyan-500/20 bg-black/30 px-4 py-3 w-full md:w-auto';

  if (now !== null && now >= EXTENDED_DEADLINE) {
    return (
      <div className={box}>
        <p className="text-cyan-100 text-sm leading-relaxed">
          Submissions closed. Selected artists are notified by 14 March 2027.
        </p>
      </div>
    );
  }

  if (now !== null && now >= REGULAR_DEADLINE) {
    return (
      <div className={box}>
        <p className="text-cyan-100 text-sm leading-relaxed max-w-md">
          Regular deadline passed — extended submissions open until 17 February 2027.
        </p>
      </div>
    );
  }

  const remaining = now === null ? null : REGULAR_DEADLINE - now;
  const units = [
    ['Days', remaining === null ? '--' : pad(Math.floor(remaining / DAY))],
    ['Hours', remaining === null ? '--' : pad(Math.floor((remaining % DAY) / HOUR))],
    ['Minutes', remaining === null ? '--' : pad(Math.floor((remaining % HOUR) / MINUTE))],
  ];

  return (
    <div className={box}>
      <p
        id="deadline-label"
        className="text-[10px] uppercase tracking-[0.3em] text-red-400/80 mb-2"
      >
        Regular deadline in
      </p>
      <div
        role="timer"
        aria-labelledby="deadline-label"
        className="grid grid-cols-3 gap-4 md:gap-6"
      >
        {units.map(([label, value]) => (
          <div key={label} className="flex flex-col">
            <span className="text-2xl md:text-3xl text-cyan-100 tabular-nums leading-none">
              {value}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-cyan-500">
              {label}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-cyan-300/80">
        <time dateTime="2026-12-31T23:59:00Z">31 December 2026, 11:59 PM London time</time>
      </p>
    </div>
  );
}

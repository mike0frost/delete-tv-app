'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (res.ok) {
      setStatus('success');
      setEmail('');
    } else if (data.error === 'already_subscribed') {
      setStatus('exists');
    } else {
      setStatus('error');
    }
  }

  return (
    <div id="newsletter" className="mt-10 rounded-3xl border border-cyan-500/25 bg-black/25 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(0,174,255,0.08)]">
      <p className="text-cyan-500 text-xs tracking-[0.35em] uppercase mb-2">// Signal_Subscribe</p>
      <h2 className="text-2xl md:text-3xl text-cyan-100 uppercase tracking-wide mb-2">Newsletter</h2>
      <p className="text-cyan-200/60 text-sm tracking-wide mb-6">
        &gt; Stay on frequency. Receive broadcast updates from DELETE TV.
      </p>

      {status === 'success' ? (
        <div className="rounded-2xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-5 text-cyan-300 text-sm tracking-widest uppercase">
          ✓ Signal received — you are now subscribed.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className="flex-1 px-5 py-3 rounded-2xl bg-black/50 border border-cyan-500/30 text-cyan-100 placeholder-cyan-600/60 text-sm tracking-widest font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_18px_rgba(34,211,238,0.2)] transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-7 py-3 rounded-2xl border border-cyan-300 bg-cyan-400/10 text-cyan-100 uppercase tracking-[0.3em] text-xs shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:bg-cyan-300/15 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition disabled:opacity-50 whitespace-nowrap"
          >
            {status === 'loading' ? '...' : '> Transmit'}
          </button>
        </form>
      )}

      {status === 'exists' && (
        <p className="mt-3 text-cyan-400/80 text-xs tracking-widest uppercase">// Already in the system.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-red-400/80 text-xs tracking-widest uppercase">// Transmission failed. Try again.</p>
      )}
    </div>
  );
}

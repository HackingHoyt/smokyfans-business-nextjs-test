'use client';

import Link from 'next/link';
import { useState } from 'react';

type SectionKey =
  | 'Hero Section'
  | 'Category Section'
  | 'Featured Businesses'
  | 'Map Section'
  | 'FAQ Section'
  | 'Advertise / Get Listed Section'
  | 'About / Trust Section';

const sections: SectionKey[] = [
  'Hero Section',
  'Category Section',
  'Featured Businesses',
  'Map Section',
  'FAQ Section',
  'Advertise / Get Listed Section',
  'About / Trust Section'
];

export default function AdminPage() {
  // Beginner note: this local state is a code-based version of simple settings switches.
  const [sectionStates, setSectionStates] = useState<Record<SectionKey, boolean>>({
    'Hero Section': true,
    'Category Section': true,
    'Featured Businesses': true,
    'Map Section': true,
    'FAQ Section': true,
    'Advertise / Get Listed Section': true,
    'About / Trust Section': true
  });

  const toggleSection = (section: SectionKey) => {
    // Beginner note: each toggle is conceptually like enabling/disabling a plugin setting.
    setSectionStates((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <main className="min-h-screen bg-midnight px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="glass-card rounded-2xl p-6 md:p-8">
          <p className="text-xs uppercase tracking-wide text-electric">Prototype Control Panel</p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">Everything Smokies Demo Admin</h1>
          <div className="mt-4 rounded-xl border border-ember/60 bg-ember/15 p-4 text-sm text-amber-100">
            <p className="font-semibold">Demo disclaimer</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>this is a demo only</li>
              <li>nothing saves to a database yet</li>
              <li>this demonstrates custom-code controls.</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-white/80">
            Think of these as simple section switches instead of plugins.
          </p>
          <Link
            href="/"
            className="mt-5 inline-block rounded-full border border-white/40 bg-black/30 px-5 py-2 text-sm font-medium hover:border-electric/70 hover:text-electric"
          >
            Back to Homepage
          </Link>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Section Controls</h2>
            <p className="mt-2 text-sm text-white/75">Toggle each content section ON or OFF for this front-end prototype.</p>
            <div className="mt-5 space-y-3">
              {sections.map((section) => {
                const isOn = sectionStates[section];

                return (
                  <button
                    key={section}
                    type="button"
                    onClick={() => toggleSection(section)}
                    className="flex w-full items-center justify-between rounded-xl border border-white/20 bg-[#0d1833]/80 px-4 py-3 text-left transition hover:border-electric/70"
                  >
                    <span className="font-medium">{section}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                        isOn
                          ? 'border border-electric/50 bg-electric/20 text-electric'
                          : 'border border-ember/50 bg-ember/20 text-amber-200'
                      }`}
                    >
                      {isOn ? 'ON' : 'OFF'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Status Preview</h2>
            <p className="mt-2 text-sm text-white/75">Live readout of section visibility values from local React state.</p>
            <div className="mt-5 space-y-2">
              {sections.map((section) => (
                <div key={`status-${section}`} className="flex items-center justify-between rounded-lg border border-white/10 bg-black/25 px-3 py-2">
                  <span className="text-sm text-white/90">{section}</span>
                  <span className={`text-sm font-semibold ${sectionStates[section] ? 'text-electric' : 'text-amber-200'}`}>
                    {sectionStates[section] ? 'ON' : 'OFF'}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

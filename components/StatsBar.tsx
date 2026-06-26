"use client";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  dark?: boolean;
}

export default function StatsBar({ stats, dark = false }: StatsBarProps) {
  return (
    <section className={`section-compact ${dark ? 'section-dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

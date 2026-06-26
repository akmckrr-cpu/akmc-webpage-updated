"use client";

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  dark?: boolean;
}

export default function HeroSection({ 
  eyebrow, 
  headline, 
  subhead, 
  ctaPrimary, 
  ctaSecondary,
  dark = false 
}: HeroSectionProps) {
  return (
    <section className={`hero-section ${dark ? 'bg-black text-white' : ''}`}>
      <div className="hero-content max-w-4xl mx-auto px-6 text-center">
        {eyebrow && (
          <div className="chip mb-6">{eyebrow}</div>
        )}
        <h1 className="hero-headline mb-6">{headline}</h1>
        {subhead && (
          <p className="hero-subhead">{subhead}</p>
        )}
        <div className="hero-cta-group">
          {ctaPrimary && (
            <a href={ctaPrimary.href} className="btn-primary text-lg px-8 py-3">
              {ctaPrimary.label}
            </a>
          )}
          {ctaSecondary && (
            <a href={ctaSecondary.href} className="btn-text text-lg">
              {ctaSecondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

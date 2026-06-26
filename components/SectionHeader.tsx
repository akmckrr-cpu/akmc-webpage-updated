"use client";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, headline, subhead, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className="typo-caption mb-4">{eyebrow}</div>
      )}
      <h2 className="typo-headline mb-6">{headline}</h2>
      {subhead && (
        <p className="typo-subhead max-w-2xl mx-auto">{subhead}</p>
      )}
    </div>
  );
}

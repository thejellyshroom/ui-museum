import { GradientCard } from "@/components/gradient-card";

export default function ArchivePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-scale-6 px-section py-section">
      <section className="flex max-w-3xl flex-col gap-md">
        <p className="body-md text-text-secondary">Archive</p>
        <h1 className="font-display text-5xl leading-tight text-text-primary">
          Institutional record
        </h1>
        <p className="museum-prose">
          The archive preserves acquisition dates, restoration notes, and
          cross-collection references. This wing is intentionally sparse while
          the first catalog tranche is accessioned.
        </p>
      </section>

      <GradientCard>
        <p className="museum-prose">
          No accession ledgers are published in this release. Use Collections to
          browse the active catalog.
        </p>
      </GradientCard>
    </div>
  );
}

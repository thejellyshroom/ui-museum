import { GradientCard } from "@/components/gradient-card";

export default function RestorationLabPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-scale-6 px-section py-section">
      <section className="flex max-w-3xl flex-col gap-md">
        <p className="body-md text-text-secondary">Restoration Lab</p>
        <h1 className="font-display text-5xl leading-tight text-text-primary">
          Behavioral interfaces under study
        </h1>
        <p className="museum-prose">
          The lab documents how specimens are isolated, labeled, and re-staged
          without pretending the original product intent was neutral. Future
          releases will host interactive reconstructions here.
        </p>
      </section>

      <GradientCard>
        <p className="museum-prose">
          Restoration tooling is not yet on display. Specimen pages currently
          provide catalog copy only.
        </p>
      </GradientCard>
    </div>
  );
}

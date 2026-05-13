import Link from "next/link";
import { GradientCard } from "@/components/gradient-card";
import type { Specimen } from "@/lib/museum";

type SpecimenCardProps = {
  categorySlug: string;
  patternSlug: string;
  specimen: Specimen;
};

export function SpecimenCard({
  categorySlug,
  patternSlug,
  specimen,
}: SpecimenCardProps) {
  return (
    <GradientCard className="hover-surface h-full">
      <Link
        href={`/collections/${categorySlug}/${patternSlug}/${specimen.slug}`}
        className="flex h-full flex-col gap-md"
      >
        <p className="body-md text-text-secondary">{specimen.specimenLabel}</p>
        <h3 className="font-display text-2xl leading-tight text-text-primary">
          {specimen.title}
        </h3>
        <p className="museum-prose text-sm">{specimen.summary}</p>
        <p className="body-md mt-auto text-text-secondary">{specimen.era}</p>
      </Link>
    </GradientCard>
  );
}

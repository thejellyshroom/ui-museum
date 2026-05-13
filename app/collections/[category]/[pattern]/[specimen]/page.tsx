import Link from "next/link";
import { notFound } from "next/navigation";
import { GradientCard } from "@/components/gradient-card";
import { getSpecimen, museumCategories } from "@/lib/museum";

type SpecimenPageProps = {
  params: Promise<{ category: string; pattern: string; specimen: string }>;
};

export function generateStaticParams() {
  return museumCategories.flatMap((category) =>
    category.patterns.flatMap((pattern) =>
      pattern.specimens.map((specimen) => ({
        category: category.slug,
        pattern: pattern.slug,
        specimen: specimen.slug,
      })),
    ),
  );
}

export default async function SpecimenPage({ params }: SpecimenPageProps) {
  const {
    category: categorySlug,
    pattern: patternSlug,
    specimen: specimenSlug,
  } = await params;

  const result = getSpecimen(categorySlug, patternSlug, specimenSlug);

  if (!result) {
    notFound();
  }

  const { category, pattern, specimen } = result;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-scale-6 px-section py-section">
      <section className="flex max-w-3xl flex-col gap-md">
        <Link
          href={`/collections/${category.slug}/${pattern.slug}`}
          className="body-md hover-text w-fit text-text-secondary"
        >
          {pattern.title}
        </Link>
        <p className="body-md text-text-secondary">{specimen.specimenLabel}</p>
        <h1 className="font-display text-5xl leading-tight text-text-primary">
          {specimen.title}
        </h1>
        <p className="body-md text-text-secondary">{specimen.era}</p>
      </section>

      <GradientCard>
        <div className="flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <p className="body-md text-text-secondary">Field notes</p>
            <p className="museum-prose text-base">{specimen.summary}</p>
          </div>
          <div className="flex flex-col gap-sm border-t border-border/80 pt-lg">
            <p className="body-md text-text-secondary">Curator note</p>
            <p className="museum-prose">{specimen.curatorNote}</p>
          </div>
        </div>
      </GradientCard>
    </div>
  );
}

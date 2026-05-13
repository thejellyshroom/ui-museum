import Link from "next/link";
import { notFound } from "next/navigation";
import { SpecimenCard } from "@/components/specimen-card";
import { getPattern, museumCategories } from "@/lib/museum";

type PatternPageProps = {
  params: Promise<{ category: string; pattern: string }>;
};

export function generateStaticParams() {
  return museumCategories.flatMap((category) =>
    category.patterns.map((pattern) => ({
      category: category.slug,
      pattern: pattern.slug,
    })),
  );
}

export default async function PatternPage({ params }: PatternPageProps) {
  const { category: categorySlug, pattern: patternSlug } = await params;
  const result = getPattern(categorySlug, patternSlug);

  if (!result) {
    notFound();
  }

  const { category, pattern } = result;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-scale-6 px-section py-section">
      <section className="flex max-w-3xl flex-col gap-md">
        <Link
          href={`/collections/${category.slug}`}
          className="body-md hover-text w-fit text-text-secondary"
        >
          {category.title}
        </Link>
        <p className="body-md text-text-secondary">Pattern study</p>
        <h1 className="font-display text-5xl leading-tight text-text-primary">
          {pattern.title}
        </h1>
        <p className="museum-prose text-base">{pattern.thesis}</p>
        <p className="museum-prose">{pattern.introduction}</p>
      </section>

      <section className="flex flex-col gap-lg">
        <h2 className="font-display text-3xl text-text-primary">Specimens</h2>
        <div className="grid gap-lg md:grid-cols-2">
          {pattern.specimens.map((specimen) => (
            <SpecimenCard
              key={specimen.slug}
              categorySlug={category.slug}
              patternSlug={pattern.slug}
              specimen={specimen}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

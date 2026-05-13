import Link from "next/link";
import { GradientCard } from "@/components/gradient-card";
import { PatternCard } from "@/components/pattern-card";
import { getAllPatterns, museumCategories } from "@/lib/museum";

export default function HomePage() {
  const featured = getAllPatterns().slice(0, 3);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-scale-7 px-section py-section">
      <section className="flex flex-col gap-lg">
        <p className="body-md text-text-secondary">Permanent collection</p>
        <h1 className="display-lg max-w-4xl text-text-primary">UI Museum</h1>
        <p className="museum-prose max-w-3xl text-base">
          A virtual institution for cataloging interface behaviors that became
          normal through repetition, sponsorship, and plausible theory. Browse by
          category, study specimens, and read the museum copy as archival record
          rather than product marketing.
        </p>
      </section>

      <section className="grid gap-lg md:grid-cols-3">
        {museumCategories.map((category) => (
          <GradientCard key={category.slug} className="hover-surface h-full">
            <Link
              href={`/collections/${category.slug}`}
              className="flex h-full flex-col gap-md"
            >
              <p className="body-md text-text-secondary">{category.subtitle}</p>
              <h2 className="font-display text-3xl leading-tight text-text-primary">
                {category.title}
              </h2>
              <p className="museum-prose text-sm">{category.description}</p>
              <p className="body-md mt-auto text-text-secondary">
                {category.patterns.length} pattern studies
              </p>
            </Link>
          </GradientCard>
        ))}
      </section>

      <section className="flex flex-col gap-lg">
        <div className="flex flex-col gap-sm">
          <p className="body-md text-text-secondary">Featured specimens</p>
          <h2 className="font-display text-4xl text-text-primary">
            Recently accessioned
          </h2>
        </div>
        <div className="grid gap-lg md:grid-cols-3">
          {featured.map(({ category, pattern }) => (
            <PatternCard
              key={`${category.slug}-${pattern.slug}`}
              categorySlug={category.slug}
              pattern={pattern}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { PatternCard } from "@/components/pattern-card";
import { getCategory, museumCategories } from "@/lib/museum";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return museumCategories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-scale-6 px-section py-section">
      <section className="flex max-w-3xl flex-col gap-md">
        <Link
          href="/collections"
          className="body-md hover-text w-fit text-text-secondary"
        >
          Collections
        </Link>
        <p className="body-md text-text-secondary">{category.subtitle}</p>
        <h1 className="font-display text-5xl leading-tight text-text-primary">
          {category.title}
        </h1>
        <p className="museum-prose">{category.description}</p>
      </section>

      <section className="grid gap-lg md:grid-cols-2">
        {category.patterns.map((pattern) => (
          <PatternCard
            key={pattern.slug}
            categorySlug={category.slug}
            pattern={pattern}
          />
        ))}
      </section>
    </div>
  );
}

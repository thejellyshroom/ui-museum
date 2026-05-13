import Link from "next/link";
import { GradientCard } from "@/components/gradient-card";
import { museumCategories } from "@/lib/museum";

export default function CollectionsPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-scale-6 px-section py-section">
      <section className="flex max-w-3xl flex-col gap-md">
        <p className="body-md text-text-secondary">Collections</p>
        <h1 className="font-display text-5xl leading-tight text-text-primary">
          Catalog by interface category
        </h1>
        <p className="museum-prose">
          Each collection groups recurring interface behaviors. Open a category
          to review pattern studies and the specimens that document their
          implementation variants.
        </p>
      </section>

      <section className="grid gap-lg md:grid-cols-2">
        {museumCategories.map((category) => (
          <GradientCard key={category.slug} className="hover-surface">
            <Link
              href={`/collections/${category.slug}`}
              className="flex flex-col gap-md"
            >
              <p className="body-md text-text-secondary">{category.subtitle}</p>
              <h2 className="font-display text-3xl text-text-primary">
                {category.title}
              </h2>
              <p className="museum-prose text-sm">{category.description}</p>
            </Link>
          </GradientCard>
        ))}
      </section>
    </div>
  );
}

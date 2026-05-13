import Link from "next/link";
import { GradientCard } from "@/components/gradient-card";
import type { Pattern } from "@/lib/museum";

type PatternCardProps = {
  categorySlug: string;
  pattern: Pattern;
};

export function PatternCard({ categorySlug, pattern }: PatternCardProps) {
  return (
    <GradientCard className="hover-surface h-full">
      <Link
        href={`/collections/${categorySlug}/${pattern.slug}`}
        className="flex h-full flex-col gap-md"
      >
        <p className="body-md text-text-secondary">Pattern study</p>
        <h3 className="font-display text-3xl leading-tight text-text-primary">
          {pattern.title}
        </h3>
        <p className="museum-prose text-sm">{pattern.thesis}</p>
        <p className="body-md mt-auto text-text-secondary">
          {pattern.specimens.length} specimens
        </p>
      </Link>
    </GradientCard>
  );
}

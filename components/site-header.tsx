import Link from "next/link";
import { museumNavigation } from "@/lib/museum";

export function SiteHeader() {
  return (
    <header className="border-b border-border/80 bg-surface/70 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-gap px-section py-md md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-sm">
          <Link href="/" className="body-md hover-text text-text-secondary">
            UI Museum
          </Link>
          <p className="museum-prose max-w-xl text-sm text-text-primary/80">
            Preservation and study of emergent interface behaviors.
          </p>
        </div>
        <nav aria-label="Primary" className="flex flex-wrap gap-md">
          {museumNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="body-md hover-text text-text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

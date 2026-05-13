import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-md px-section py-section">
      <p className="body-md text-text-secondary">404</p>
      <h1 className="font-display text-4xl text-text-primary">
        Specimen not found
      </h1>
      <p className="museum-prose">
        The requested catalog entry is not in the current accession record.
      </p>
      <Link href="/collections" className="body-md hover-text text-text-secondary">
        Return to collections
      </Link>
    </div>
  );
}

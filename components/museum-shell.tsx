import type { ReactNode } from "react";
import { AtmosphereBackground } from "@/components/atmosphere-background";
import { SiteHeader } from "@/components/site-header";

type MuseumShellProps = {
  children: ReactNode;
};

export function MuseumShell({ children }: MuseumShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AtmosphereBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border/80 bg-surface/70">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-sm px-section py-lg">
            <p className="body-md text-text-secondary">Institutional note</p>
            <p className="museum-prose max-w-3xl text-sm">
              Specimens are presented for scholarly review. The museum does not
              endorse interface pathology as best practice.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

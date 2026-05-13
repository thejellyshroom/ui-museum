import type { ReactNode } from "react";

type GradientCardProps = {
  children: ReactNode;
  className?: string;
};

export function GradientCard({ children, className = "" }: GradientCardProps) {
  return (
    <div className={`gradient-border-shell rounded-pill ${className}`}>
      <div className="surface-panel rounded-pill p-card">{children}</div>
    </div>
  );
}

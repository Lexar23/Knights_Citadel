import React from "react";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backHref?: string;
  backLabel?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  backHref,
  backLabel = "Volver",
  children,
}: PageHeaderProps) {
  return (
    <header className="w-full pb-10 mb-10 border-b border-phosphor-blue-black">
      {backHref && (
        <Link href={backHref} className="link-ghost mb-8">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {backLabel}
        </Link>
      )}

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          {badge && <p className="eyebrow mb-3">{badge}</p>}
          <h1 className="text-[36px] leading-[1.05] tracking-[-0.32px] md:text-heading-lg">{title}</h1>
          {subtitle && <p className="mt-4 text-[18px] leading-[1.5] text-moss-80 max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </header>
  );
}

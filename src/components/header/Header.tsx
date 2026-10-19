"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { navigation, siteConfig } from "@/Data/Header";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-phosphor-blue-black bg-carbon-veil/85 backdrop-blur-[10px] shadow-nav">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        {/* Header */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} Logo`}
                fill
                sizes="40px"
                priority
                className="object-contain"
              />
            </div>
            <span className="font-display text-[20px] font-medium tracking-[-0.36px] whitespace-nowrap text-phosphor-white">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 text-[14px] font-medium">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative inline-flex items-center gap-2 py-2 ${
                      active ? "text-phosphor-white" : "text-fern-link hover:text-phosphor-white"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-lime-pulse" aria-hidden="true" />}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-50 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[12px] border border-pine-15 text-phosphor-white hover:border-circuit-border touch-manipulation md:hidden"
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
          >
            {isOpen ? (
              <svg className="h-5 w-5 pointer-events-none" aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg className="h-5 w-5 pointer-events-none" aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="navbar-menu"
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-1 border-t border-phosphor-blue-black pt-3 text-[16px] font-medium">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 rounded-[8px] px-3 py-3 ${
                      active ? "bg-ground-iron text-phosphor-white" : "text-fern-link hover:text-phosphor-white"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${active ? "bg-lime-pulse" : "bg-pine-15"}`}
                      aria-hidden="true"
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

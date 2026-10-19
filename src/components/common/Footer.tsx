import Link from "next/link";
import { navigation, siteConfig } from "@/Data/Header";

export default function Footer() {
  return (
    <footer className="divider mt-20 w-full">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-display text-phosphor-white text-[18px]">{siteConfig.name}</p>
          <p className="text-[12px] text-deep-fern mt-1">
            Guías comunitarias de Cookie Run: Kingdom. Sitio no oficial.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-fern-link hover:text-phosphor-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-phosphor-blue-black">
        <p className="mx-auto max-w-[1280px] px-4 py-5 text-[12px] text-deep-fern md:px-6">
          © {new Date().getFullYear()} {siteConfig.name} · Creado por{" "}
          <span className="text-moss-70">{siteConfig.author}</span>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

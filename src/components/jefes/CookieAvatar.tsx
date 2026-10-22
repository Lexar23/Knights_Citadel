import Image from "next/image";
import { getCookie } from "@/Data/cookies";
import { getCookieImages, pickTileImage } from "@/lib/cookieImages";

interface CookieAvatarProps {
  cookieId: string;
  size?: number;
  className?: string;
}

/** Retrato de galleta (cabeza → raíz → ilustración); si no hay imagen muestra sus iniciales. Solo servidor. */
export default function CookieAvatar({ cookieId, size = 72, className = "" }: CookieAvatarProps) {
  const cookie = getCookie(cookieId);
  const src = pickTileImage(getCookieImages(cookieId));
  const initials = cookie.name
    .replace(/\(.*?\)/g, "")
    .replace(/Cookie/i, "")
    .trim()
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[14px] border border-pine-15 bg-carbon-veil ${className}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image src={src} alt={cookie.name} fill sizes={`${size}px`} className="object-contain p-1" />
      ) : (
        <span
          className="absolute inset-0 flex items-center justify-center font-display text-moss-70"
          style={{ fontSize: Math.round(size * 0.3) }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

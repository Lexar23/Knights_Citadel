export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Knights Citadel",
  logo: "/logo.webp",
  author: "Lexar23",
};

export const navigation: NavItem[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Gremios",
    href: "/gremios",
  },
  {
    label: "Jefes",
    href: "/jefes",
  },
  {
    label: "Arena",
    href: "/arena",
  },
  {
    label: "Alianza",
    href: "/alianza",
  },
  {
    label: "Eventos",
    href: "/eventos",
  },
];
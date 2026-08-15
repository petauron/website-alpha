import { localizePath, translations, type Locale } from "./i18n";

const navigationItems = [
  { key: "projects", href: "/projects" },
  { key: "updates", href: "/updates" },
  { key: "about", href: "/about" },
] as const;

export function navigation(locale: Locale) {
  return navigationItems.map((item) => ({
    href: localizePath(item.href, locale),
    label: translations[locale].navigation[item.key],
  }));
}

import { useLocale } from "next-intl";
import Link from "next/link";

export default function MainMenu() {
  const locale = useLocale();

  return (
    <ul>
      <li>
        <Link href="#about">{locale === "en" ? "About us" : "عنا"}</Link>
      </li>
      <li>
        <Link href="#service">{locale === "en" ? "Services" : "الخدمات"}</Link>
      </li>
      <li>
        <Link href="#contact">
          {locale === "en" ? "Contact" : "الاتصال بنا"}
        </Link>
      </li>
      <li>
        <Link href="#blog">{locale === "en" ? "Blog" : "المدونة"}</Link>
      </li>
      <li>
        <Link href={`/${locale}/branches`}>
          {locale === "en" ? "Branches" : "الفروع"}
        </Link>
      </li>
    </ul>
  );
}

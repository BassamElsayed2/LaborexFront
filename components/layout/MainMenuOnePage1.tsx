import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useRef, useEffect } from "react";

type LocaleType = "ar" | "en";

// SVG icons for flags
const EgyptFlag = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ borderRadius: "50%" }}
  >
    <rect width="24" height="8" y="0" fill="#e21a1a" />
    <rect width="24" height="8" y="8" fill="#fff" />
    <rect width="24" height="8" y="16" fill="#000" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="7"
      fill="#c09300"
      fontWeight="bold"
      fontFamily="Arial"
    >
      ★
    </text>
  </svg>
);
const USFlag = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ borderRadius: "50%" }}
  >
    <rect width="24" height="24" fill="#b22234" />
    <g>
      {[...Array(6)].map((_, i) => (
        <rect key={i} y={i * 4} width="24" height="2" fill="#fff" />
      ))}
    </g>
    <rect width="10" height="10" fill="#3c3b6e" />
    <g>
      {[...Array(9)].map((_, i) => (
        <circle
          key={i}
          cx={1.5 + (i % 3) * 3}
          cy={1.5 + Math.floor(i / 3) * 3}
          r="0.6"
          fill="#fff"
        />
      ))}
    </g>
  </svg>
);

export default function MainMenu() {
  const locale = useLocale() as LocaleType;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !(menuRef.current as Node).contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleLanguageChange = (lang: LocaleType) => {
    setOpen(false);
    if (lang !== locale) {
      router.push(pathname, { locale: lang });
    }
  };

  return (
    <ul>
      <li>
        <Link href="/about">
          {locale === "en" ? "About us" : "عن لابوريكس"}
        </Link>
      </li>
      <li>
        <Link href="/service">{locale === "en" ? "Services" : "خدماتنا"}</Link>
      </li>
      <li>
        <Link href="/blog">{locale === "en" ? "Blog" : "الاخبار"}</Link>
      </li>
      <li>
        <Link href="#contact">{locale === "en" ? "Contact" : "اتصل بنا"}</Link>
      </li>
      <li>
        <Link href="/work">{locale === "en" ? "Work" : "وظيفة"}</Link>
      </li>

      <li ref={menuRef} style={{ position: "relative" }}>
        <button
          className="lang-icon-btn"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {locale === "ar" ? EgyptFlag : USFlag}
        </button>
        {open && (
          <div
            className="lang-popup-menu"
            style={{
              position: "absolute",
              top: "110%",
              right: 0,
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              borderRadius: 8,
              zIndex: 100,
              minWidth: 120,
            }}
          >
            <button
              className={`lang-popup-item${locale === "ar" ? " active" : ""}`}
              onClick={() => handleLanguageChange("ar")}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                background: "none",
                border: "none",
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: locale === "ar" ? "bold" : "normal",
                color: locale === "ar" ? "#007bff" : "#222",
              }}
            >
              <span style={{ marginRight: 8 }}>{EgyptFlag}</span>
              العربية
              {locale === "ar" && <span style={{ marginLeft: "auto" }}>✓</span>}
            </button>
            <button
              className={`lang-popup-item${locale === "en" ? " active" : ""}`}
              onClick={() => handleLanguageChange("en")}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                background: "none",
                border: "none",
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: locale === "en" ? "bold" : "normal",
                color: locale === "en" ? "#007bff" : "#222",
              }}
            >
              <span style={{ marginRight: 8, marginLeft: 8 }}>{USFlag}</span>
              English
              {locale === "en" && <span style={{ marginLeft: "auto" }}>✓</span>}
            </button>
          </div>
        )}
      </li>
    </ul>
  );
}

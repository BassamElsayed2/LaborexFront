"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";

interface MobileMenuProps {
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
  offcanvas_bg?: string;
  offcanvas_menu?: string;
  offcanvas_social?: string;
}

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

export default function MobileMenu({
  isMobileMenu,
  handleMobileMenu,
  offcanvas_bg,
  offcanvas_menu,
  offcanvas_social,
}: MobileMenuProps) {
  const [isAccordion, setIsAccordion] = useState(0);
  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

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
    <>
      {isMobileMenu && (
        <div
          className="vl-offcanvas-overlay vl-offcanvas-overlay-open"
          onClick={handleMobileMenu}
        />
      )}

      {/* offcanvas menu start */}
      <div
        className={`vl-offcanvas vl-offcanvas-bg-1 ${
          isMobileMenu ? "vl-offcanvas-open" : ""
        } ${offcanvas_bg}`}
      >
        <div className="vl-offcanvas-wrapper">
          <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-40">
            <div className="vl-offcanvas-logo">
              <Link href="/">
                <img src="/assets/img/logo/vl-logo-1.1.png" alt="" />
              </Link>
            </div>
            <div className="vl-offcanvas-close">
              <button
                className="vl-offcanvas-close-toggle"
                onClick={handleMobileMenu}
              >
                <i className="fal fa-times" />
              </button>
            </div>
          </div>
          <div
            className={`vl-offcanvas-menu ${offcanvas_menu} d-lg-none mb-40`}
          >
            <nav>
              <ul>
                <li>
                  <Link href="/" onClick={() => handleAccordion(1)}>
                    {locale === "en" ? "Home" : "الرئيسية"}
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    {" "}
                    {locale === "en" ? "About Us" : "عنا"}
                  </Link>
                </li>

                <li>
                  <Link href="/service" onClick={() => handleAccordion(4)}>
                    {locale === "en" ? "Services" : "الخدمات"}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={() => handleAccordion(4)}>
                    {locale === "en" ? "Blog" : "المقالات"}
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    {" "}
                    {locale === "en" ? "Contact" : "تواصل"}
                  </Link>
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
                        className={`lang-popup-item${
                          locale === "ar" ? " active" : ""
                        }`}
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
                        {locale === "ar" && (
                          <span style={{ marginLeft: "auto" }}>✓</span>
                        )}
                      </button>
                      <button
                        className={`lang-popup-item${
                          locale === "en" ? " active" : ""
                        }`}
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
                        <span style={{ marginRight: 8, marginLeft: 8 }}>
                          {USFlag}
                        </span>
                        English
                        {locale === "en" && (
                          <span style={{ marginLeft: "auto" }}>✓</span>
                        )}
                      </button>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          <div className="vl-offcanvas-info mb-40">
            <h3 className="vl-offcanvas-sm-title">
              {" "}
              {locale === "en" ? "Contact Us" : "تواصل معنا"}
            </h3>
            <span>
              <Link href="#">
                <span className="ml-5">
                  <img src="/assets/img/icons/vl-footer-icon-1.1.svg" alt="" />
                </span>
                +57 9954 6476
              </Link>
            </span>
            <br />
            <span>
              <Link href="#">
                <span className="ml-5">
                  <img src="/assets/img/icons/vl-footer-icon-1.3.svg" alt="" />
                </span>
                dentistsolution@com
              </Link>
            </span>
            <br />
            <span>
              <Link href="#">
                <span className="ml-5">
                  <img src="/assets/img/icons/vl-footer-icon-1.2.svg" alt="" />
                </span>
                421 Allen, Mexico 4233
              </Link>
            </span>
          </div>
          <div className="vl-offcanvas-social mb-40">
            <h3 className="vl-offcanvas-sm-title">
              {locale === "en" ? "Follow Us" : "تابعنا"}
            </h3>
            <div className={`vl-footer-social ${offcanvas_social}`}>
              <ul>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

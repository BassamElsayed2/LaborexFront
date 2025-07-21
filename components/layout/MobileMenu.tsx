"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
  offcanvas_bg?: string;
  offcanvas_menu?: string;
  offcanvas_social?: string;
}

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

  const locale = useLocale();

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

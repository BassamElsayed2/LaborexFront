import { useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const locale = useLocale();

  return (
    <>
      {/*================= Footer section start =================*/}
      <section className="vl-footer vl-footer-margin-top-minus vl-off-white-bg pt-240">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-footer-widget-1">
                <div className="vl-footer-logo">
                  <Link href="/">
                    <img src="/assets/img/logo/vl-footer-logo-1.1.png" alt="" />
                  </Link>
                </div>
                <div className="vl-footer-content">
                  <p className="pt-24 pb-24">
                    {locale === "en"
                      ? "We’re dedicated to providing high-quality, compassionate dental care for patients of all  ages from preventive care."
                      : "نحن ملتزمون بتقديم رعاية أسنان عالية الجودة ورحيمة للمرضى من جميع الأعمار من الرعاية الوقائية."}
                  </p>
                </div>
                <div className="vl-footer-social">
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
            <div className="col-lg-2 col-md-6 mb-30">
              <div className="vl-footer-widget-2">
                <h3 className="vl-footer-widget-title mb-24">
                  {locale === "en" ? "Quick Links" : "روابط سريعة"}
                </h3>
                <div className="vl-footer-menu">
                  <ul>
                    <li>
                      <Link href="/">
                        {locale === "en" ? "Home Page " : "الرئيسية"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        {locale === "en" ? "About" : "من نحن"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        {locale === "en" ? "Appointment" : "حجز موعد"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        {locale === "en" ? "News & Blog" : "الأخبار والمدونة"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        {locale === "en" ? "Service" : "الخدمات"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-30">
              <div className="vl-footer-widget-3 ml-40">
                <h3 className="vl-footer-widget-title mb-24">
                  {locale === "en" ? "Our Services" : "خدماتنا"}
                </h3>
                <div className="vl-footer-menu">
                  <ul>
                    <li>
                      <Link href="#">
                        {locale === "en"
                          ? "General Dental"
                          : "طب الأسنان العام"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {locale === "en"
                          ? "Cosmetic Dental"
                          : "طب الأسنان التجميلي"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {locale === "en" ? "Whitening Care" : "تبييض الأسنان"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {locale === "en" ? "Dental Implants" : "زراعة الأسنان"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {locale === "en" ? "Dental Care" : "العناية بالأسنان"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-footer-widget-4">
                <h3 className="vl-footer-widget-title mb-24">
                  {locale === "en" ? "Contact Us" : "تواصل معنا"}
                </h3>
                {/* icon list */}
                <div className="vl-footer-icon-list">
                  <ul>
                    <li>
                      <Link href="#">
                        <span>
                          <img
                            src="/assets/img/icons/vl-footer-icon-1.1.svg"
                            alt=""
                          />
                        </span>
                        {locale === "en"
                          ? "+1 123 456 7890"
                          : "+1 123 456 7890"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span>
                          <img
                            src="/assets/img/icons/vl-footer-icon-1.2.svg"
                            alt=""
                          />
                        </span>
                        {locale === "en"
                          ? "421 Allen, Mexico 4233"
                          : "421 ألين، المكسيك 4233"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span>
                          <img
                            src="/assets/img/icons/vl-footer-icon-1.3.svg"
                            alt=""
                          />
                        </span>
                        {locale === "en"
                          ? "dentistsolution@com"
                          : "dentistsolution@com"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span>
                          <img
                            src="/assets/img/icons/vl-footer-icon-1.4.svg"
                            alt=""
                          />
                        </span>
                        {locale === "en"
                          ? "dentistsolution.com"
                          : "dentistsolution.com"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="vl-footer-copyright-text">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p className="para">
                  {locale === "en"
                    ? "© 2025 Dentalx ,Inc. All Rights Reserved."
                    : "© 2025 دينتالكس، جميع الحقوق محفوظة."}
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="copy-right-menu">
                  <ul>
                    <li>
                      <Link href="#">
                        {locale === "en" ? "Privacy Policy" : "سياسة الخصوصية"}{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {locale === "en"
                          ? "Terms & Conditions"
                          : "الشروط والأحكام"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Footer section End =================*/}
    </>
  );
}

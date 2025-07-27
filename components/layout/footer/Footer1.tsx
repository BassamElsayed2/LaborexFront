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
                      ? "Laborex Pharmaceuticals Warehouse provides reliable and safe pharmaceutical solutions to meet market"
                      : "لابوريكس للأدوية يوفر حلولًا دوائية موثوقة وآمنة لتلبية احتياجات السوق."}
                  </p>
                </div>
                <div className="vl-footer-social">
            
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-30">
      
            </div>
            <div className="col-lg-2 col-md-6 mb-30">
              <div className="vl-footer-widget-3 ml-40">
                <h3 className="vl-footer-widget-title mb-24">
                  {locale === "en" ? "Quick links" : "روابط سريعه"}
                </h3>
                <div className="vl-footer-menu">
                  <ul>
                    <li>
                      <Link href="/about">
                        {locale === "en"
                          ? "About us"
                          : "معلومات عنا"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        {locale === "en"
                          ? "Our services"
                          : "خدماتنا"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {locale === "en" ? "Order Now" : "إطلب الان"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {locale === "en" ? "Jobs" : "وظائف"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {locale === "en" ? "Contact us" : "اتصل بنا"}
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
                          ? "Tanta , el rakha st."
                          : "ش الرخاء من الاستاد - طنطا"}
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
                          ? "info@laborex-pharma.co"
                          : "info@laborex-pharma.co"}
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
                          ? "laborex-pharma.co"
                          : "laborex-pharma.co"}
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
                    ? "© 2025 Laborex ,Inc. All Rights Reserved."
                    : "© 2025 لابوريكس، جميع الحقوق محفوظة."}
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="copy-right-menu">
                 
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

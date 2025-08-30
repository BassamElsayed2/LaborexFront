import { useLocale } from "next-intl";
import Link from "next/link";

export default function Section9() {
  const locale = useLocale();

  return (
    <>
      {/*================= Cta section start =================*/}
      <section className="vl-cta-area" dir={locale === "ar" ? "rtl" : "ltr"}>
        <div className="container">
          <div className="vl-cta-bg" data-background="/assets/img/s9.jpg">
            <div className="vl-line-shape">
              <img
                src="/assets/img/shape/cta-left-arrow-shape-1.1.svg"
                alt=""
              />
            </div>
            <div className="row">
              <div className="col-lg-5" />
              <div className="col-lg-5">
                <div className="vl-cta-content">
                  <h3 className="title text-anime-style-3 pb-32">
                    {locale === "en"
                      ? "Get our news"
                      : "اطلب الان ليصلك كل جديد"}
                  </h3>
                  <div className="vl-cta-form">
                    {/* <input
                        name="email"
                        type="email"
                        placeholder={
                          locale === "en"
                            ? "Enter Your Email"
                            : "أدخل بريدك الإلكتروني"
                        }
                      /> */}
                    <div className="cta-submit-btn">
                      <Link href="/order" className="vl-btn-primary">
                        {locale === "en" ? "Order Now" : "اطلب الآن"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="vl-cta-shape d-none d-lg-block">
                  <div className="shape-thumb">
                    <img
                      className="circle"
                      src="/assets/img/shape/vl-star-shape-1.1.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Cta section End =================*/}
    </>
  );
}

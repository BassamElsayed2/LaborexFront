import { useLocale } from "next-intl";
import Link from "next/link";

export default function Section2() {
  const locale = useLocale();

  // ترجمة النصوص
  const texts = {
    subtitle: locale === "en" ? "Our Mission Vision" : "رؤية رسالتنا",
    title: locale === "en" ? "Vision & Mission :" : "رؤيتنا ورسالتنا:     ",
    para:
      locale === "en"
        ? "To be the leading pharmaceutical distribution company in the local market, providing reliable and fast services, and ensuring that high-quality medicines are available at the best prices to every pharmacy, thus achieving better health for the community."
        : " أن تكون الشركة الرائدة في مجال توزيع الأدوية على مستوى السوق المحلي، بتقديم خدمات موثوقة وسريعة، وضمان وصول الدواء بجودة عالية وبأفضل الأسعار لكل صيدلية، بما يحقق صحة أفضل للمجتمع.",
    tabs: [
      {
        label: locale === "en" ? "Our Vision" : "رؤيتنا",
        content: [
          locale === "en" ? (
            <>
              We seek to provide and distribute medicines and pharmaceuticals
              efficiently and professionally from through: Building a strong and
              reliable distribution network that covers all pharmacies. Ensuring
              the quality of products and their compliance with international
              health standards. Commitment to credibility and transparency in
              dealing with our partners from companies and pharmacies. Investing
              in technology and human cadres to provide a distinguished and fast
              service. Supporting pharmacists in providing appropriate treatment
              for patients, which contributes to improving the level of health
              care. Providing the needs of pharmacists from market shortages
            </>
          ) : (
            <>
              نسعى لتوفير وتوزيع الأدوية والمستحضرات الطبية بكفاءة واحترافية من
              خلال: بناء شبكة توزيع قوية وموثوقة تغطي جميع الصيدليات. ضمان جودة
              المنتجات وتوافقها مع المعايير الصحية العالمية. الالتزام بالمصداقية
              والشفافية في التعامل مع شركائنا من شركات وصيدليات. الاستثمار في
              التكنولوجيا والكوادر البشرية لتقديم خدمة متميزة وسريعة. دعم
              الصيادلة في توفير العلاج المناسب للمرضى بما يساهم في تحسين مستوى
              الرعاية الصحية. توفير احتياجات السادة الصيادلة من نواقص السوق
            </>
          ),
        ],
      },
      {
        label: locale === "en" ? "Our History" : "تاريخنا",
        content: [
          locale === "en" ? (
            <>
              For 15 years we have been honored to serve pharmacies and provide
              quality service in distribution and warehousing
            </>
          ) : (
            <>
              على مدى 15 عاما تشرفنا بخدمة الصيدليات وتوفيرخدمة جيدة ف
              التوزيع والتخزين
            </>
          ),
        ],
      },
    ],
    btn: locale === "en" ? "Get Started Now" : "ابدأ الآن",
    counterYears: locale === "en" ? "Years Experience" : "سنوات الخبرة",
  };

  return (
    <>
      {/*================= Mission section start =================*/}
      <section className="vl-mission-area fix pt-100 pb-70">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 mb-30">
              <div className="vl-mission-content-inner mr-60">
                {/* section title */}
                <div className="vl-section-title">
                  <h5 className="subtitle">{texts.subtitle}</h5>
                  <h2 className="title pt-16 pb-16">{texts.title}</h2>
                  <p className="para pb-32">{texts.para}</p>
                </div>
                {/* mission tabs */}
                <div className="vl-mission-tabs">
                  <div className="vl-tab-heading-content">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      {texts.tabs.map((tab, idx) => (
                        <li
                          className="nav-item"
                          role="presentation"
                          key={tab.label}
                        >
                          <button
                            className={`nav-link${idx === 0 ? " active" : ""}`}
                            id={`pills-tab-${idx}`}
                            data-bs-toggle="pill"
                            data-bs-target={`#pills-content-${idx}`}
                            type="button"
                            role="tab"
                            aria-controls={`pills-content-${idx}`}
                            aria-selected={idx === 0 ? "true" : "false"}
                          >
                            <span className="tab-title">{tab.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    {texts.tabs.map((tab, idx) => (
                      <div
                        className={`tab-pane fade${
                          idx === 0 ? " show active" : ""
                        }`}
                        id={`pills-content-${idx}`}
                        role="tabpanel"
                        aria-labelledby={`pills-tab-${idx}`}
                        tabIndex={0}
                        key={tab.label}
                      >
                        {/* tab content */}
                        <div className="vl-tab-content">
                          <p className="para pt-30 pb-20">{tab.content[0]}</p>
                          <p className="para pb-32">{tab.content[1]}</p>
                          {/* tab btn */}
                          {/* <div className="vl-tab-btn">
                            <Link href="/order" className="vl-btn-primary">
                              {texts.btn}
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              {/* mission thumb */}
              <div className="vl-mission-iner-thumb">
                <div className="vl-mission-thumb-iner reveal image-anime">
                  <img className="w-100" src="/assets/img/s7.jpg" alt="" />
                </div>
                {/* counter */}
                <div className="vl-tab-counter-box">
                  <div className="vl-icon">
                    <span>
                      <img
                        className="circle"
                        src="/assets/img/icons/vl-counter-icon-1.1.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="vl-counter-content">
                    <h3>
                      <span className="title counter">15</span>
                      <span>+</span>
                    </h3>
                    <span className="deseg">{texts.counterYears}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Mission section End =================*/}
    </>
  );
}

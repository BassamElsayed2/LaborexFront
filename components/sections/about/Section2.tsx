import { useLocale } from "next-intl";
import Link from "next/link";

export default function Section2() {
  const locale = useLocale();

  // ترجمة النصوص
  const texts = {
    subtitle: locale === "en" ? "Our Mission Vision" : "رؤية رسالتنا",
    title:
      locale === "en"
        ? "Vision & Mission Excellence in Dental Care Smile"
        : "رؤيتنا ورسالتنا: التميز في رعاية الأسنان والابتسامة",
    para:
      locale === "en"
        ? "Our mission is to provide exceptional dental care enhances the health, confidence, & well-being of our patients we are committed fostering."
        : "مهمتنا هي تقديم رعاية استثنائية للأسنان تعزز صحة وراحة وثقة مرضانا. نحن ملتزمون بدعم رفاهيتهم.",
    tabs: [
      {
        label: locale === "en" ? "Our Vision" : "رؤيتنا",
        content: [
          locale === "en" ? (
            <>
              <span>Client-Centric:</span> We aim to inspire healthier
              communities by promoting <br />
              the importance of oral health and creating smiles that last a
              lifetime. <br />
              Together, we’re transforming lives, one smile at a time.
            </>
          ) : (
            <>
              <span>محور العميل:</span> نهدف إلى إلهام مجتمعات أكثر صحة من خلال
              تعزيز أهمية صحة الفم وخلق ابتسامات تدوم مدى الحياة.
              <br />
              معًا، نغير الحياة، ابتسامة تلو الأخرى.
            </>
          ),
          locale === "en" ? (
            <>
              <span>Personalized Approach:</span> Our vision is to a leader in
              dental excellence, continually advancing our services through
              innovation, education.
            </>
          ) : (
            <>
              <span>نهج مخصص:</span> رؤيتنا أن نكون روادًا في التميز في طب
              الأسنان، مع تطوير خدماتنا باستمرار من خلال الابتكار والتعليم.
            </>
          ),
        ],
      },
      {
        label: locale === "en" ? "Our History" : "تاريخنا",
        content: [
          locale === "en" ? (
            <>
              <span>Trusted Legacy:</span> With years of experience, we have
              built a reputation for quality dental care and patient
              satisfaction.
              <br />
              Our journey is marked by dedication and continuous improvement.
            </>
          ) : (
            <>
              <span>إرث موثوق:</span> على مدى سنوات من الخبرة، بنينا سمعة في
              جودة رعاية الأسنان ورضا المرضى.
              <br />
              رحلتنا تتميز بالتفاني والتحسين المستمر.
            </>
          ),
          locale === "en" ? (
            <>
              <span>Milestones:</span> We have achieved significant milestones
              in dental innovation and patient care, making us a trusted choice
              in the community.
            </>
          ) : (
            <>
              <span>محطات بارزة:</span> حققنا إنجازات كبيرة في الابتكار ورعاية
              المرضى، مما يجعلنا خيارًا موثوقًا في المجتمع.
            </>
          ),
        ],
      },
      {
        label: locale === "en" ? "Why Choose Us" : "لماذا تختارنا",
        content: [
          locale === "en" ? (
            <>
              <span>Expert Team:</span> Our skilled professionals are dedicated
              to providing the best dental care using the latest technology.
              <br />
              We prioritize your comfort and satisfaction.
            </>
          ) : (
            <>
              <span>فريق خبير:</span> فريقنا الماهر ملتزم بتقديم أفضل رعاية
              للأسنان باستخدام أحدث التقنيات.
              <br />
              نحن نضع راحتك ورضاك في المقام الأول.
            </>
          ),
          locale === "en" ? (
            <>
              <span>Comprehensive Services:</span> From preventive care to
              advanced treatments, we offer a full range of dental services
              tailored to your needs.
            </>
          ) : (
            <>
              <span>خدمات شاملة:</span> من الرعاية الوقائية إلى العلاجات
              المتقدمة، نقدم مجموعة كاملة من خدمات الأسنان المصممة خصيصًا لك.
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
                  <h2 className="title text-anime-style-3 pt-16 pb-16">
                    {texts.title}
                  </h2>
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
                          <div className="vl-tab-btn">
                            <Link href="/contact" className="vl-btn-primary">
                              {texts.btn}
                            </Link>
                          </div>
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
                  <img
                    className="w-100"
                    src="/assets/img/about/vl-mission-thumb-iner1.1.png"
                    alt=""
                  />
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

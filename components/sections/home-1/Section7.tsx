import { useLocale } from "next-intl";
import Link from "next/link";

export default function Section7() {
  const locale = useLocale();
  return (
    <>
      {/*================= Contact section start =================*/}
      <section id="contact" className="vl-contact-bg-1 fix pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="vl-contact-text-wraper-1">
                <div className="vl-section-title mb-32">
                  <h5
                    className="subtitle"
                    data-aos="fade-up"
                    data-aos-duration={800}
                    data-aos-delay={300}
                  >
                    {locale === "en" ? "Contact Us" : "تواصل معنا"}
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">
                    {locale === "en" ? "Book Your Appointment" : "للطلبات والاستفسار"}
                  </h2>
                </div>
                <div
                  className="vl-contact-form"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 mb-24">
                        <input
                          name="text"
                          type="text"
                          placeholder={
                            locale === "en" ? "First Name" : "الاسم الأول"
                          }
                        />
                      </div>
                      <div className="col-lg-6 mb-24">
                        <input
                          name="text"
                          type="text"
                          placeholder={
                            locale === "en" ? "phone number" : "رقم الهاتف"
                          }
                        />
                      </div>

                      <div className="col-lg-12 mb-24">
                        <textarea
                          name="message"
                          id="message"
                          placeholder={
                            locale === "en" ? "Your Message" : "رسالتك"
                          }
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="col-lg-6">
                    <div className="vl-contact-btn">
                      <button className="vl-btn-primary">
                        {locale === "en" ? "Submit" : "إرسال"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mb-30"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-delay={300}
            >
              <div
                className="vl-contact-thumb1 image-anime"
                data-background="/assets/img/contact/vl-contact-thumb-1.1.png"
              >
                {/* contact-info */}
                <div className="vl-contact-info-box">
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">
                        {locale === "en"
                          ? "Thursday - English"
                          : "السبت - الخميس"}
                      </h4>
                      <span className="time">
                        {locale === "en" ? "10pM - 5PM" : "10 صباحًا - 5 مساءً"}
                      </span>
                    </div>
                  </div>
                
                  <div className="vl-contact-info-btn mt-12">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Contact section End =================*/}
    </>
  );
}

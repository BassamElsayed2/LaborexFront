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
                    {locale === "en" ? "Book Your Appointment" : "احجز موعدك"}
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
                            locale === "en" ? "Last Name" : "اسم العائلة"
                          }
                        />
                      </div>
                      <div className="col-lg-6 mb-24">
                        <input
                          name="email"
                          type="email"
                          placeholder={
                            locale === "en"
                              ? "Email Address"
                              : "البريد الإلكتروني"
                          }
                        />
                      </div>
                      <div className="col-lg-6 mb-24">
                        <select
                          name="select-date"
                          className="nice-select wide vl-select-date"
                        >
                          <option
                            data-display={locale === "en" ? "Date" : "اليوم"}
                          >
                            {locale === "en"
                              ? "Monday - Friday(9AM - 10PM)"
                              : "الاثنين - الجمعة (9 صباحًا - 10 مساءً)"}
                          </option>
                          <option value={1}>
                            {locale === "en"
                              ? "Sunday(9AM - 10PM)"
                              : "الأحد (9 صباحًا - 10 مساءً)"}
                          </option>
                          <option value={2}>
                            {locale === "en"
                              ? "Saturday(10AM - 4PM)"
                              : "السبت (10 صباحًا - 4 مساءً)"}
                          </option>
                        </select>
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
                          ? "Monday - Friday"
                          : "الاثنين - الجمعة"}
                      </h4>
                      <span className="time">
                        {locale === "en" ? "9AM - 10PM" : "9 صباحًا - 10 مساءً"}
                      </span>
                    </div>
                  </div>
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">
                        {locale === "en" ? "Sunday" : "الأحد"}
                      </h4>
                      <span className="time">
                        {locale === "en" ? "9AM - 10PM" : "9 صباحًا - 10 مساءً"}
                      </span>
                    </div>
                  </div>
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">
                        {locale === "en" ? "Saturday" : "السبت"}
                      </h4>
                      <span className="time">
                        {locale === "en" ? "10AM - 4PM" : "10 صباحًا - 4 مساءً"}
                      </span>
                    </div>
                  </div>
                  <div className="vl-contact-info-btn mt-12">
                    <Link
                      href="tel:+11234567890"
                      className="w-100 text-center vl-btn-primary"
                    >
                      {locale === "en"
                        ? "Call +1 (123) 456-7890"
                        : "اتصل على +1 (123) 456-7890"}
                    </Link>
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

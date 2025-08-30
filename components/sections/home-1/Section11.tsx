"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocale } from "next-intl";

export default function Section11() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    emailjs
      .sendForm(
        "service_9znjvzs",
        "template_gs4kl58",
        formRef.current,
        "wc2_8AveQQcgWxoGU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setLoading(false);
          // formRef.current?.reset(); // لا حاجة لإعادة تعيين الفورم لأنه سيختفي
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          alert(
            locale === "en"
              ? "Failed to send message."
              : "فشل في إرسال الرسالة."
          );
        }
      );
  };

  return (
    <section id="contact" className="vl-contact-bg-1 fix pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-30">
            <div className="vl-contact-text-wraper-1">
              <div className="vl-section-title mb-32">
                {/* <h5
                  className="subtitle"
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  {locale === "en" ? "Join us" : "أنضم ألينا "}
                </h5> */}
                <h2 className="title pt-16 text-anime-style-3">
                  {locale === "en" ? "Order Now" : "أطلب الان  "}
                </h2>
              </div>

              <div
                className="vl-contact-form"
                data-aos="fade-right"
                data-aos-duration={800}
                data-aos-delay={300}
              >
                {sent ? (
                  <div
                    style={{
                      minHeight: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h4 style={{ color: "green", textAlign: "center" }}>
                      {locale === "en"
                        ? "We will contact you as soon as possible."
                        : "سوف يتم التواصل معك في أقرب وقت."}
                    </h4>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    style={{
                      opacity: loading ? 0.5 : 1,
                      pointerEvents: loading ? "none" : "auto",
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-6 mb-24">
                        <input
                          name="user_name"
                          type="text"
                          placeholder={
                            locale === "en" ? "Full Name" : "الاسم الكامل"
                          }
                          required
                        />
                      </div>
                      <div className="col-lg-6 mb-24">
                        <input
                          name="user_phone"
                          type="number"
                          placeholder={
                            locale === "en" ? "Phone Number" : "رقم الهاتف"
                          }
                          required
                          style={{
                            backgroundColor: "white",
                            borderRadius: "10px",
                            color: "black",
                          }}
                        />
                      </div>

                      <div className="col-lg-6 mb-24">
                        <input
                          name="user_position"
                          type="text"
                          placeholder={locale === "en" ? "Address" : "العنوان"}
                        />
                      </div>
                      <div className="col-lg-12 mb-24">
                        <textarea
                          name="message"
                          placeholder={locale === "en" ? "Your Order" : "الطلب"}
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="vl-contact-btn">
                          <button
                            type="submit"
                            className="vl-btn-primary"
                            disabled={loading}
                          >
                            {loading
                              ? locale === "en"
                                ? "Sending..."
                                : "جاري الإرسال ..."
                              : locale === "en"
                              ? "Submit"
                              : "إرسال"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
                {loading && !sent && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      background: "rgba(255,255,255,0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                    }}
                  >
                    <span style={{ fontSize: 20, color: "#333" }}>
                      {locale === "en" ? "Sending..." : "جاري الإرسال ..."}
                    </span>
                  </div>
                )}
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
              data-background="/assets/img/s7.jpg"
            >
              <div className="vl-contact-info-box">
                <div className="vl-contact-info-btn mt-12">
                  <a
                    href="tel:01201788357"
                    className="w-100 text-center vl-btn-primary"
                  >
                    {locale === "en"
                      ? "Call 01201788357"
                      : "اتصل على 01201788357"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

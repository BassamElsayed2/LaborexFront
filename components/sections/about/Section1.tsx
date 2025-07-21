"use client";
import { useState } from "react";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Section1({ background }: { background: string }) {
  const [isOpen, setOpen] = useState(false);

  const locale = useLocale();

  return (
    <>
      {/*================= Choose us section start =================*/}
      <section className={`${background} fix pt-100 pb-70`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="vl-about-thm4b-inner mr-30">
                <img
                  className="w-100"
                  src="/assets/img/about/vl-about-inner1.1.png"
                  alt=""
                />
                <div className="vl-video-pla4y">
                  <div className="popup-video" onClick={() => setOpen(true)}>
                    <span>
                      <i className="fa-solid fa-play" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="vl-choose-us-inner-content">
                {/* section title */}
                <div className="vl-section-title">
                  <h5 className="subtitle">
                    {locale === "en" ? "Why Choose us" : "لماذا تختارنا"}
                  </h5>
                  <h2 className="title text-anime-style-3 pt-16 pb-12 mr-20">
                    {locale === "en"
                      ? "Top Reason To Trust Us with Your Smile Every Smile"
                      : "أهم الأسباب للثقة بنا من أجل ابتسامتك"}
                  </h2>
                  <p className="para pb-32">
                    {locale === "en"
                      ? "We’re dedicated to providing exceptional dental care with a personal touch. Our team of experienced professionals combines advanced technology."
                      : "نحن ملتزمون بتقديم رعاية أسنان استثنائية بلمسة شخصية. يجمع فريقنا من المحترفين ذوي الخبرة بين التكنولوجيا المتقدمة."}
                  </p>
                </div>
                {/* line progress bar item*/}
                <div className="vl-bar-single-item">
                  <h4 className="title">
                    {locale === "en"
                      ? "Endodontic Equiqment"
                      : "معدات علاج جذور الأسنان"}
                  </h4>
                  <div
                    id="bar1"
                    className="progress barfiller"
                    role="progressbar"
                    aria-label="Endodontic Equiqment"
                    aria-valuenow={86}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar fill"
                      style={{ width: "86%" }}
                    ></div>
                  </div>
                </div>
                {/* line progress bar item*/}
                <div className="vl-bar-single-item">
                  <h4 className="title">
                    {locale === "en"
                      ? "Operatory Cabinetry"
                      : "خزائن غرف العمليات"}
                  </h4>
                  <div
                    id="bar2"
                    className="progress barfiller"
                    role="progressbar"
                    aria-label="Operatory Cabinetry"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                {/* line progress bar item*/}
                <div className="vl-bar-single-item">
                  <h4 className="title">
                    {locale === "en" ? "Surgical Microscopes" : "مجاهر جراحية"}
                  </h4>
                  <div
                    id="bar3"
                    className="progress barfiller"
                    role="progressbar"
                    aria-label="Surgical Microscopes"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                {/* line progress bar item*/}
                <div className="vl-bar-single-item">
                  <h4 className="title">
                    {locale === "en"
                      ? "Dental Operatory Lights"
                      : "أضواء غرف العمليات السنية"}
                  </h4>
                  <div
                    id="bar4"
                    className="progress barfiller"
                    role="progressbar"
                    aria-label="Dental Operatory Lights"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                {/* btn */}
                <div className="vl-progress-btn mt-12">
                  <Link href="/contact" className="vl-btn-primary">
                    {locale === "en" ? "Contact Us" : "تواصل معنا"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Choose us section start =================*/}
      <ModalVideo
        channel="youtube"
        videoId="vR24qT-I5ko"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

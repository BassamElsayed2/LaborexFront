"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperPadding from "@/components/elements/BoxSwiperPadding";
import Link from "next/link";
import { useLocale } from "next-intl";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
};

export default function Section3() {
  const locale = useLocale();

  return (
    <>
      {/*================= Service section start =================*/}
      <SwiperPadding />

      <section id="service" className="vl-service-bg-1 fix pt-100 pb-100">
        <div className="container swipper-root">
          <div className="row">
            <div className="col-lg-5" style={{ marginRight: "auto" }}>
              <div className="vl-service-section-title">
                <div className="vl-section-title mb-60">
                  <h5
                    className="subtitle"
                    data-aos="fade-up"
                    data-aos-duration={800}
                    data-aos-delay={300}
                  >
                    {locale === "en" ? "Our Service" : "خدماتنا"}
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">
                    {locale === "en"
                      ? "Your Complete Guide to Dental Health"
                      : "دليلك الكامل لصحة الأسنان"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="service-slide-1">
          <div>
            <Swiper
              {...swiperOptions}
              className="owl-carousel owl-theme"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={300}
            >
              {/* single slider box */}
              <SwiperSlide
                className="vl-single-service-box"
                data-background=".//assets/img/service/vl-service-thumb1.1.png"
              >
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img
                        src="/assets/img/icons/vl-service-icon-1.1.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/service-single">
                        {locale === "en"
                          ? "Restorative Solutions"
                          : "الحلول التصالحية"}
                      </Link>
                    </h4>
                    <p className="para pt-16 pb-24">
                      {locale === "en"
                        ? "Whether you’re here for routine care or specialized treatment, our is committed to providing gentle, compassionate care."
                        : "سواء أكنت هنا للحصول على رعاية روتينية أو علاج متخصص، فإن مركزنا ملتزم بتقديم رعاية لطيفة ورحيمة."}
                    </p>
                    <Link href="/service-single" className="learnmore">
                      {locale === "en" ? "Learn More" : "اعرف المزيد"}
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* single slider box */}
              <SwiperSlide
                className="vl-single-service-box"
                data-background=".//assets/img/service/vl-service-thumb1.2.png"
              >
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img
                        src="/assets/img/icons/vl-service-icon-1.2.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/service-single">
                        {locale === "en" ? "Periodontal Therapy" : "علاج اللثة"}
                      </Link>
                    </h4>
                    <p className="para pt-16 pb-24">
                      {locale === "en"
                        ? "For a younger patients, Pediatric Dentistry offers a comfortable and fun environment, helping children build healthy habits."
                        : "للمرضى الأصغر سنًا، يوفر طب أسنان الأطفال بيئة مريحة وممتعة، تساعد الأطفال على بناء عادات صحية."}
                    </p>
                    <Link href="/service-single" className="learnmore">
                      {locale === "en" ? "Learn More" : "اعرف المزيد"}
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* single slider box */}
              <SwiperSlide
                className="vl-single-service-box"
                data-background=".//assets/img/service/vl-service-thumb1.3.png"
              >
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img
                        src="/assets/img/icons/vl-service-icon-1.3.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/service-single">
                        {locale === "en"
                          ? "Pediatric Dentistry"
                          : "طب أسنان الأطفال"}
                      </Link>
                    </h4>
                    <p className="para pt-16 pb-24">
                      {locale === "en"
                        ? "Our Cosmetic Dentistry options, including whitening & veneers, are crafted enhance your confidence with a radiant, beautiful."
                        : "خيارات طب الأسنان التجميلي لدينا، بما في ذلك التبييض والقشور، مصممة لتعزيز ثقتك بنفسك بابتسامة مشرقة وجميلة."}
                    </p>
                    <Link href="/service-single" className="learnmore">
                      {locale === "en" ? "Learn More" : "اعرف المزيد"}
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* single slider box */}
              <SwiperSlide
                className="vl-single-service-box"
                data-background=".//assets/img/service/vl-service-thumb1.1.png"
              >
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img
                        src="/assets/img/icons/vl-service-icon-1.1.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/service-single">
                        {locale === "en"
                          ? "Restorative Solutions"
                          : "الحلول التصالحية"}
                      </Link>
                    </h4>
                    <p className="para pt-16 pb-24">
                      {locale === "en"
                        ? "Whether you’re here for routine care or specialized treatment, our is committed to providing gentle, compassionate care."
                        : "سواء أكنت هنا للحصول على رعاية روتينية أو علاج متخصص، فإن مركزنا ملتزم بتقديم رعاية لطيفة ورحيمة."}
                    </p>
                    <Link href="/service-single" className="learnmore">
                      {locale === "en" ? "Learn More" : "اعرف المزيد"}
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="owl-nav">
              <button className="owl-prev">
                <i className="fa-solid fa-arrow-left" />
              </button>
              <button className="owl-next">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*================= Service section End =================*/}
    </>
  );
}

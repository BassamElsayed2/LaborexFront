"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperPadding from "@/components/elements/BoxSwiperPadding";
import Link from "next/link";
import { useLocale } from "next-intl";
import type { news as newsType } from "@/services/apiServices";

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

export default function Section3({ news }: { news?: newsType[] }) {
  const locale = useLocale();

  console.log(news);

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
              {news?.map((news) => (
                <SwiperSlide
                  key={news.id} // مهم لإزالة التحذيرات
                  className="vl-single-service-box"
                  data-background={news?.images?.[0]}
                  style={{
                    backgroundImage: `url(${news.images?.[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
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
                        <Link href={`/${locale}/service/${news.id}`}>
                          {locale === "en" ? news.title_en : news.title_ar}
                        </Link>
                      </h4>
                      <div
                        className="para pt-16 pb-24 "
                        dangerouslySetInnerHTML={{
                          __html:
                            (locale === "en"
                              ? news.content_en
                              : news.content_ar
                            )
                              ?.split(" ")
                              .slice(0, 20)
                              .join(" ") + "...",
                        }}
                      ></div>
                      <Link href="/service-single" className="learnmore">
                        {locale === "en" ? "Learn More" : "اعرف المزيد"}
                        <span className="right-arow">
                          <i className="fa-regular fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { useLocale } from "next-intl";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Section1() {
  const [isOpen, setOpen] = useState(false);

  const locale = useLocale();

  return (
    <>
      {/*================= Banner section start =================*/}
      <Swiper
        {...swiperOptions}
        id="banner-slid1e"
        className="swiper owl-carousel owl-theme position-relative"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            {/* single slider */}
            <div
              className="vl-banner-area"
              data-background=".//assets/img/banner/1.jpg"
            >
              <div className="shape shape-1">
                <img src="/assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
              </div>
              <div className="shap3e circle">
                <img src="/assets/img/shape/vl-star-shape-1.1.svg" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 fix">
                    <div className="vl-banner-area-content fix p-relative">
                      <h5 className="subtitle">
                        {locale === "en"
                          ? "Comprehensive and Safe Drug Inventory"
                          : "مخزون دوائي متكامل وآمن"}
                      </h5>
                      <h1 className="title text-anime-style-3 pt-16 pb-16">
                        {locale === "en"
                          ? "Comprehensive and Safe Drug Inventory"
                          : "مخزون دوائي متكامل وآمن"}
                      </h1>
                      <p className="para pb-32">
                        {locale === "en" ? (
                          <>
                          We offer thousands of certified medical items with continuous monitoring of expiration 
                          </>
                        ) : (
                          <>
                          {" "}
                            <br /> نوفر آلاف الأصناف الطبية المعتمدة مع متابعة مستمرة<br></br>  لتواريخ الصلاحية
                          </>
                        )}
                      </p>
                      {/* btn */}
                      <div
                        className="vl-hero-btn"
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={300}
                      >
                        <Link href="/contact" className="vl-btn-primary">
                          {locale === "en"
                            ? "Book An Appoinment"
                            : "احجز موعداً"}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 p-relative">
                    <div className="video-shape">
                      <img
                        src="/assets/img/banner/vl-popup-video-thumb.png"
                        alt=""
                      />
                      <div className="play-button-container">
                        <div
                          className="play-button"
                          onClick={() => setOpen(true)}
                        >
                          <div className="play-icon popup-video">
                            <i className="fa-duotone fa-solid fa-play" />
                          </div>
                          {/* Play icon */}
                        </div>
                        <div className="wave wave-1" />
                        <div className="wave wave-2" />
                        <div className="wave wave-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            {/* single slider */}
            <div
              className="vl-banner-area"
              data-background=".//assets/img/banner/3.jpg"
            >
              <div className="shape shape-1">
                <img src="/assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
              </div>
              <div className="shap3e circle">
                <img src="/assets/img/shape/vl-star-shape-1.1.svg" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 fix">
                    <div className="vl-banner-area-content fix p-relative">
                      <h5 className="subtitle">
                        {locale === "en"
                          ? "Trusted Partnerships with Pharma Companies"
                          : "شراكة موثوقة مع شركات الأدوية"}
                      </h5>
                      <h1 className="title text-anime-style-3 pt-16 pb-16">
                        {locale === "en"
                          ? "Trusted Partnerships with Pharma Companies"
                          : "شراكة موثوقة مع شركات الأدوية"}
                      </h1>
                      <p className="para pb-32">
                        {locale === "en" ? (
                          <>
                        We collaborate with top local and international companies to<br></br> ensure the highest quality 
                          </>
                        ) : (
                          <>
                             نتعامل مع كبرى الشركات المحلية والعالمية لضمان<br></br> أعلى جودة وأفضل سعر
                          </>
                        )}
                      </p>
                      {/* btn */}
                      <div
                        className="vl-hero-btn"
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={300}
                      >
                        <Link href="/contact" className="vl-btn-primary">
                          {locale === "en"
                            ? "Book An Appoinment"
                            : "احجز موعداً"}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 p-relative">
                    <div className="video-shape">
                      <img
                        src="/assets/img/banner/vl-popup-video-thumb.png"
                        alt=""
                      />
                      <div className="play-button-container">
                        <div
                          className="play-button"
                          onClick={() => setOpen(true)}
                        >
                          <div className="play-icon popup-video">
                            <i className="fa-duotone fa-solid fa-play" />
                          </div>
                          {/* Play icon */}
                        </div>
                        <div className="wave wave-1" />
                        <div className="wave wave-2" />
                        <div className="wave wave-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            {/* single slider */}
            <div
              className="vl-banner-area"
              data-background=".//assets/img/banner/2.jpg"
            >
              <div className="shape shape-1">
                <img src="/assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
              </div>
              <div className="shap3e circle">
                <img src="/assets/img/shape/vl-star-shape-1.1.svg" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 fix">
                    <div className="vl-banner-area-content fix p-relative">
                      <h5 className="subtitle">
                        {locale === "en"
                          ? "Confident Smile Begins Here"
                          : "الابتسsasdasdsامة الواثقة تبدأ من هنا"}
                      </h5>
                      <h1 className="title text-anime-style-3 pt-16 pb-16">
                        {locale === "en"
                          ? "24/7 Technical Support & Customer Service"
                          : "دعم فني وخدمة عملاء على مدار الساعة"}
                      </h1>
                      <p className="para pb-32">
                        {locale === "en" ? (
                          <>
                           Our team is ready to assist you with every step of the ordering <br></br>and distribution process
                          </>
                        ) : (
                          <>
                           فريقنا جاهز للرد على استفساراتك ومساعدتك في كل خطوة من<br></br> عملية الطلب والتوزيع
                          </>
                        )}
                      </p>
                      {/* btn */}
                      <div
                        className="vl-hero-btn"
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={300}
                      >
                        <Link href="/contact" className="vl-btn-primary">
                          {locale === "en"
                            ? "Book An Appoinment"
                            : "احجز موعداً"}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 p-relative">
                    <div className="video-shape">
                      <img
                        src="/assets/img/banner/vl-popup-video-thumb.png"
                        alt=""
                      />
                      <div className="play-button-container">
                        <div
                          className="play-button"
                          onClick={() => setOpen(true)}
                        >
                          <div className="play-icon popup-video">
                            <i className="fa-duotone fa-solid fa-play" />
                          </div>
                          {/* Play icon */}
                        </div>
                        <div className="wave wave-1" />
                        <div className="wave wave-2" />
                        <div className="wave wave-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
      {/*================= Banner section End =================*/}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="3MdqSkr7yfs-U"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

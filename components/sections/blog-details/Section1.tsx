"use client";
import { useState } from "react";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import { useLocale } from "next-intl";

interface blogs {
  title_ar: string;
  title_en: string;
  author?: string;
  content_ar: string;
  content_en: string;
  images?: string[];
  yt_code?: string;
  created_at?: string;
  id?: string;
  user_id?: string;
}

export default function Section1({
  left,
  single,
  details,
}: {
  left?: boolean;
  single?: boolean;
  details?: blogs;
}) {
  const [isOpen, setOpen] = useState(false);
  const locale = useLocale();

  console.log(details);
  return (
    <>
      {/*================= Blog Details section Start =================*/}
      <section className="vl-blog-details pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div
              className={`col-lg-4 mb-30 ${left ? "" : "order-2"} ${
                single ? "d-none" : ""
              }`}
            >
              <div className="vl-sidebar">
                {/* search widget */}
                <div className="vl-widegt-1 vl-off-white-bg mb-30">
                  <h4 className="title pb-24">Search</h4>
                  <div className="vl-searh-form-wid">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <span>
                        <i className="fa-regular fa-magnifying-glass" />
                      </span>
                    </form>
                  </div>
                </div>
                {/* rec post widget */}
                <div className="vl-widegt-rec-post vl-off-white-bg mb-30">
                  <h4 className="title pb-24">Recent Blogs</h4>
                  {/* single post item */}
                  <div className="vl-rec-post-flex">
                    <div className="vl-thumb">
                      <Link href="#">
                        <img
                          src="/assets/img/blog/vl-rec-blog-1.1.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="vl-content">
                      <div className="meta">
                        <ul>
                          <li>
                            <Link href="#">
                              <span>
                                <img
                                  src="/assets/img/icons/vl-rec-date-icon1.1.svg"
                                  alt=""
                                />
                              </span>
                              10/10/2025
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="title">
                        <Link href="/blog-single">
                          Foods for Healthy <br /> Teeth: What to Eat an...
                        </Link>
                      </h3>
                    </div>
                  </div>
                  {/* single post item */}
                  <div className="vl-rec-post-flex">
                    <div className="vl-thumb">
                      <Link href="">
                        <img
                          src="/assets/img/blog/vl-rec-blog-1.2.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="vl-content">
                      <div className="meta">
                        <ul>
                          <li>
                            <Link href="#">
                              <span>
                                <img
                                  src="/assets/img/icons/vl-rec-date-icon1.1.svg"
                                  alt=""
                                />
                              </span>
                              16/10/2025
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="title">
                        <Link href="/blog-single">
                          How to Care for Your <br /> Teeth After a Filling
                          or...
                        </Link>
                      </h3>
                    </div>
                  </div>
                  {/* single post item */}
                  <div className="vl-rec-post-flex">
                    <div className="vl-thumb">
                      <Link href="">
                        <img
                          src="/assets/img/blog/vl-rec-blog-1.3.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="vl-content">
                      <div className="meta">
                        <ul>
                          <li>
                            <Link href="#">
                              <span>
                                <img
                                  src="/assets/img/icons/vl-rec-date-icon1.1.svg"
                                  alt=""
                                />
                              </span>
                              08/10/2025
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="title">
                        <Link href="/blog-single">
                          Braces vs. Invisalign: <br /> Which is Right for You?
                        </Link>
                      </h3>
                    </div>
                  </div>
                  {/* single post item */}
                  <div className="vl-rec-post-flex">
                    <div className="vl-thumb">
                      <Link href="">
                        <img
                          src="/assets/img/blog/vl-rec-blog-1.4.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="vl-content">
                      <div className="meta">
                        <ul>
                          <li>
                            <Link href="#">
                              <span>
                                <img
                                  src="/assets/img/icons/vl-rec-date-icon1.1.svg"
                                  alt=""
                                />
                              </span>
                              07/10/2025
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="title">
                        <Link href="/blog-single">
                          Foods That Promote <br /> Strong Teeth and Gums...
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* tag widget */}
                <div className="vl-tags-widget vl-off-white-bg mb-14">
                  <h4 className="title pb-24">Popular Tags</h4>
                  <div className="vl-tags-list">
                    <ul>
                      <li>
                        <Link href="#">HealthySmiles</Link>
                      </li>
                      <li>
                        <Link href="#">OralHealthMatters</Link>
                      </li>
                      <li>
                        <Link href="#">PreventiveDentistry</Link>
                      </li>
                      <li>
                        <Link href="#">BrightSmiles</Link>
                      </li>
                      <li>
                        <Link href="#">DentistryExperts</Link>
                      </li>
                      <li>
                        <Link href="#">TeethWhitening</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* auth widget */}
                <div className="vl-auth-widget vl-off-white-bg mb-15">
                  <h4 className="title pb-24">Our Author</h4>
                  <div className="vl-auth-box-grid">
                    <div className="vl-auth-thumb">
                      <Link href="/team">
                        <img
                          src="/assets/img/team/vl-auth-iner1.1.png"
                          alt=""
                        />
                      </Link>
                      <Link href="/team">
                        <img
                          src="/assets/img/team/vl-auth-iner1.2.png"
                          alt=""
                        />
                      </Link>
                      <Link href="/team">
                        <img
                          src="/assets/img/team/vl-auth-iner1.3.png"
                          alt=""
                        />
                      </Link>
                      <Link href="/team">
                        <img
                          src="/assets/img/team/vl-auth-iner1.4.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* phone widget */}
                <div className="vl-widegt-3 vl-off-white-bg mb-30">
                  <h4 className="title pb-24">
                    If You Need Any Help <br /> Contact With Us
                  </h4>
                  <Link href="tel:+1234567890" className="phone">
                    <span>
                      <i className="fa-light fa-phone" />
                    </span>
                    +123 456 7890
                  </Link>
                </div>
                {/* social widget */}
                {/* <div className="vl-widegt-4 vl-off-white-bg mb-30">
                  <h4 className="title pb-24">Follow Us</h4>
                  <div className="vl-sidebar-social">
                    <ul>
                      <li>
                        <Link href="#">
                          <span>
                            <i className="fa-brands fa-facebook-f" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span>
                            <i className="fa-brands fa-x-twitter" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span>
                            <i className="fa-brands fa-linkedin-in" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span>
                            <i className="fa-brands fa-instagram" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              className={`col-lg-8 mb-30 ${left ? "" : "order-1"} ${
                single ? "mx-auto" : ""
              }`}
            >
              <div
                className={`vl-sidebar-details ${left ? "ml-80" : "mr-80"} ${
                  single ? "me-0" : ""
                }`}
              >
                {/* thumbnail */}
                <div className="vl-blog-large-thumb-iner mb-32">
                  <img
                    className="w-100 br-8"
                    src={details?.images?.[0]}
                    alt=""
                  />
                </div>
                {/* meta */}
                <div className="vl-blog-meta-list">
                  <ul>
                    <li>
                      <Link href="#">{details?.author}</Link>
                    </li>
                  </ul>
                </div>
                {/* content one */}
                <div className="vl-sidebar-conten2t mb-32">
                  <div
                    className="para"
                    dangerouslySetInnerHTML={{
                      __html:
                        locale === "en"
                          ? details?.content_en || ""
                          : details?.content_ar || "",
                    }}
                  ></div>
                </div>
                {/* icon block */}
                {/* <div className="row">
                  <div className="col-lg-6 col-md-6 mb-30">
                    <div className="vl-deatils-icon-block-flex">
                      <div className="icon">
                        <span>
                          <img
                            src="/assets/img/icons/vl-service-details-icon1.1.svg"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="content">
                        <h4 className="title pb-16">Advanced Dentistry</h4>
                        <p className="para">
                          Using the latest technology, we provide effective
                          &amp; comfortable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-30">
                    <div className="vl-deatils-icon-block-flex">
                      <div className="icon">
                        <span>
                          <img
                            src="/assets/img/icons/vl-service-details-icon1.2.svg"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="content">
                        <h4 className="title pb-16">Preventive Restorative</h4>
                        <p className="para">
                          Our clinic specializes maintaining oral health
                          restoring functionality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* content one */}

                {/* check box */}
                {/* <div className="row">
                  <div className="col-lg-12 mb-16">
                    <div className="vl-service-check-lis2t">
                      <ul>
                        <li>
                          <span>
                            <i className="fa-regular fa-check" />
                          </span>
                          Tailored Care for Every Stage of Life
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-check" />
                          </span>
                          Comprehensive Care for Every Smile
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-check" />
                          </span>
                          Tailored Solutions Your Dental Needs
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-check" />
                          </span>
                          Tailored Solutions for Your Dental Needs
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-check" />
                          </span>
                          Preventive, Restorative, and Cosmetic
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-check" />
                          </span>
                          Expert Care for All Ages
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* video thumb area */}
                <div className="row">
                  {Array.isArray(details?.images) &&
                    details.images.length > 1 && (
                      <div className="vl-blog-sm-thumb grid grid-cols-2 md:grid-cols-3 gap-3">
                        {details.images.map((image, index) => (
                          <img
                            key={index}
                            className="w-full rounded-lg shadow"
                            src={image}
                            alt={`Blog image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}

                  {details?.yt_code && (
                    <div className="col-lg-12 col-md-12 mb-30">
                      <div className="vl-service-video-thum2b p-relative">
                        <img
                          className="w-100 br-8"
                          src="/assets/img/blog/vl-blog-sm-video-thumb-1.2.png"
                          alt=""
                        />
                        <div
                          className="popup-video vl-play-btn"
                          onClick={() => setOpen(true)}
                        >
                          <span>
                            <i className="fa-solid fa-play" />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Blog Details section End =================*/}
      {details?.yt_code && (
        <ModalVideo
          channel="youtube"
          videoId={details?.yt_code}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

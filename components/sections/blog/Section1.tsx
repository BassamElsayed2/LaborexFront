"use client";
import type { blogs as BlogType } from "@/services/apiBlog";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogMember {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  link: string;
}

export default function Section1({
  blogs,
  service = false,
}: {
  blogs?: BlogType[];
  service: boolean;
}) {
  const [blog, setBlog] = useState<BlogMember[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("../data/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  // Pagination
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(blog.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBlog = blog.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const locale = useLocale();

  return (
    <>
      {/*================= Blog section Start =================*/}
      <section className="vl-blog-iner-sec pt-100 pb-70">
        <div className="container">
          <div className="row">
            {blogs?.map((blogs, index) => (
              <div className="col-lg-4 col-md-6 mb-30" key={index}>
                {/* single blog box */}
                <div className="vl-single-blog-box">
                  <div className="vl-blog-thumb image-anime">
                    <Link href={`/${locale}/blog/${blogs.id}`}>
                      <img
                        className="w-100"
                        src={blogs.images?.[0] || "/"}
                        alt={blogs.title_en}
                      />
                    </Link>
                  </div>
                  <div className="vl-blog-content">
                    {!service && (
                      <div className="vl-blog-meta">
                        <cite className="meta-icon mr-6">
                          <img
                            src="/assets/img/icons/vl-blog-user1.1.svg"
                            alt=""
                          />
                        </cite>
                        {blogs.author}
                      </div>
                    )}
                    <h3 className="title pt-20 pb-24">
                      <Link
                        href={
                          `/${locale}/${service ? "service" : "blog"}/${
                            blogs.id
                          }` || ""
                        }
                      >
                        {locale === "en" ? blogs.title_en : blogs.title_ar}
                      </Link>
                    </h3>
                    <div
                      className="para pt-16 pb-24 "
                      dangerouslySetInnerHTML={{
                        __html:
                          (locale === "en"
                            ? blogs.content_en
                            : blogs.content_ar
                          )
                            ?.split(" ")
                            .slice(0, 20)
                            .join(" ") + "...",
                      }}
                    ></div>
                    <Link
                      href={
                        `/${locale}/${service ? "service" : "blog"}/${
                          blogs.id
                        }` || ""
                      }
                      className="blog-learnmore"
                    >
                      {locale === "en" ? "Learn more" : "المزيد"}
                      <span>
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination below */}
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="vl-theme-pagination text-center mt-18 mb-30">
                <ul>
                  <li
                    className={`page-item${
                      currentPage === 1 ? " disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      {locale === "en" ? (
                        <i className="fa-regular fa-angle-left" />
                      ) : (
                        <i className="fa-regular fa-angle-right" />
                      )}
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i}
                      className={`page-item${
                        currentPage === i + 1 ? " active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item${
                      currentPage === totalPages ? " disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link mr-10"
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      {locale === "en" ? (
                        <i className="fa-regular fa-angle-right" />
                      ) : (
                        <i className="fa-regular fa-angle-left" />
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Blog section End =================*/}
    </>
  );
}

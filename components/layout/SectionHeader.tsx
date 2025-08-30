import { useLocale } from "next-intl";
import Link from "next/link";

export default function SectionHeader({
  title_en,
  title_ar,
  current,
  isGroup,
  linkGroup,
  pageGroup,
}: {
  title_en: string;
  title_ar: string;
  current: string;
  isGroup: boolean;
  linkGroup: string;
  pageGroup: string;
}) {
  const locale = useLocale();

  return (
    <>
      {/*================= Breadcrumb section start =================*/}
      <section
        className="vl-breadcrumb-area"
        data-background="/assets/img/s3.jpg"
      >
        <div className="container">
          <div className="vl-breadcrumb-content">
            <h2 className="title">{locale === "en" ? title_en : title_ar}</h2>
            <div className="vl-breadcrumb-list">
              <ul>
                <li>
                  <Link href="/">{locale === "en" ? "Home" : "الرئيسية"}</Link>
                </li>

                <li>
                  <Link href="#">
                    <span>
                      {locale === "en" ? (
                        <i className="fa-regular fa-angle-right" />
                      ) : (
                        <i className="fa-regular fa-angle-left" />
                      )}
                    </span>
                  </Link>
                </li>

                <li className={isGroup ? "d-inline-block" : "d-none"}>
                  <Link href={linkGroup}>{pageGroup}</Link>
                </li>

                <li className={isGroup ? "d-inline-block" : "d-none"}>
                  <Link href="#">
                    <span>
                      <i className="fa-regular fa-angle-right" />
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="#" className="active mr-2">
                    {locale === "en" ? title_en : title_ar}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*================= Breadcrumb section End =================*/}
    </>
  );
}

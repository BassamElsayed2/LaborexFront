"use client";

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Section9 from "@/components/sections/home-1/Section9";

import { useQuery } from "@tanstack/react-query";
import { getNews } from "@/services/apiServices";

export default function Home() {
  const { data: news } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  return (
    <>
      <Layout mainMenuStyle="one-page">
        <SectionHeader
          title_en="Our Services"
          title_ar="خدماتنا"
          isGroup={false}
          linkGroup=""
          pageGroup=""
          current="Our Blog"
        />
        <Section1 blogs={news} service={true} />
        <Section9 />
      </Layout>
    </>
  );
}

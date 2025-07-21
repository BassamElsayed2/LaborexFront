"use client";

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Section9 from "@/components/sections/home-1/Section9";
import { getBlog } from "@/services/apiBlog";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  const { data: blogs } = useQuery({
    queryKey: ["blog"],
    queryFn: getBlog,
  });

  return (
    <>
      <Layout mainMenuStyle="one-page">
        <SectionHeader
          title_en="Our Blog"
          title_ar="مقال"
          isGroup={false}
          linkGroup=""
          pageGroup=""
          current="Our Blog"
        />
        <Section1 blogs={blogs} service={false} />
        <Section9 />
      </Layout>
    </>
  );
}

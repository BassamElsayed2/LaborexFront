"use client";

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home-1/Section1";
import Section2 from "@/components/sections/home-1/Section2";
import Section3 from "@/components/sections/home-1/Section3";

import Section7 from "@/components/sections/home-1/Section7";
import Section8 from "@/components/sections/home-1/Section8";
import Section9 from "@/components/sections/home-1/Section9";
import { getBlog } from "@/services/apiBlog";
import { getNews } from "@/services/apiServices";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: news } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  const { data: blogs } = useQuery({
    queryKey: ["blog"],
    queryFn: getBlog,
  });

  return (
    <>
      <Layout mainMenuStyle="one-page">
        <Section1 />
        <Section2 />
        <Section3 news={news} />
        {/* <Section4 /> */}
        {/* <Section5 /> */}
        {/* <Section6 /> */}
        <Section7 />
        <Section8 blogs={blogs} />
        <Section9 />
      </Layout>
    </>
  );
}

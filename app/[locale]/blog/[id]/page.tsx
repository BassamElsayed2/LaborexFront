"use client";

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog-details/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Section9 from "@/components/sections/home-1/Section9";
import Section2 from "@/components/sections/blog-details/Section2";
import { useParams } from "next/navigation";
import { getBlogsById } from "@/services/apiBlog";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const params = useParams();
  const id = params?.id as string;

  const { data: blogDetails, isLoading: isLoadingPost } = useQuery({
    queryKey: ["news", id],
    queryFn: () => getBlogsById(id),
    enabled: !!id,
  });

  return (
    <>
      <Layout mainMenuStyle="one-page">
        <SectionHeader
          title_en="Our Blogs"
          title_ar="جميع المقالات"
          isGroup={false}
          linkGroup="/blog"
          pageGroup="Our Blog"
          current="Our Blog Details"
        />
        <Section1 single={true} details={blogDetails} />
        <Section2 />
        <Section9 />
      </Layout>
    </>
  );
}

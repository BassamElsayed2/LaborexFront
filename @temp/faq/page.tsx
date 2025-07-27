import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/faq/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Section9 from "@/components/sections/home-1/Section9";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title_en="FAQ’s"
          title_ar="الأسئلة الشائعة"
          isGroup={false}
          linkGroup=""
          pageGroup=""
          current="FAQ’s"
        />
        <Section1 />
        <Section9 />
      </Layout>
    </>
  );
}

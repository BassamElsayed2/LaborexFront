import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section10 from "@/components/sections/home-1/Section10";

import Section9 from "@/components/sections/home-1/Section9";

import React from "react";

function WorkPage() {
  return (
    <Layout mainMenuStyle="one-page">
      <SectionHeader
        title_en="Work"
        title_ar="العمل"
        current="Work"
        isGroup={false}
        linkGroup=""
        pageGroup=""
      />
      <Section10 />
      <Section9 />
    </Layout>
  );
}

export default WorkPage;

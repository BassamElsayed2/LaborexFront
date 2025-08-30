import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section11 from "@/components/sections/home-1/Section11";
import Section9 from "@/components/sections/home-1/Section9";

import React from "react";

function OrderPage() {
  return (
    <Layout mainMenuStyle="one-page">
      <SectionHeader
        title_en="Order"
        title_ar="اطلب"
        current="Order"
        isGroup={false}
        linkGroup=""
        pageGroup=""
      />
      <Section11 />
      <Section9 />
    </Layout>
  );
}

export default OrderPage;

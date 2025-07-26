import Layout from "@/components/layout/Layout";
import Section11 from "@/components/sections/home-1/Section11";
import Section9 from "@/components/sections/home-1/Section9";

import React from "react";

function page() {
  return (
    <Layout mainMenuStyle="one-page">
      <Section11 />
      <Section9 />
    </Layout>
  );
}

export default page;

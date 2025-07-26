import Layout from "@/components/layout/Layout";
import Section10 from "@/components/sections/home-1/Section10";

import Section9 from "@/components/sections/home-1/Section9";
import React from "react";

function page() {
  return (
    <Layout mainMenuStyle="one-page">
      <Section10 />
      <Section9 />
    </Layout>
  );
}

export default page;

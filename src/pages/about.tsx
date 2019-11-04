import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default (): React.ReactElement => {
  return (
    <Layout title="About David" pageTitle="About">
      <SEO title="Portfolio" />
      <div>
        <h1 style={{ textAlign: "center" }}>About Coming Soon</h1>
      </div>
    </Layout>
  );
};

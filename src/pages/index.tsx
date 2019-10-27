import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Home = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>HOME</h1>
    </Layout>
  );
};

export default Home;

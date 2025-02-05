import React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>关于Balbina Safari</h1>
      <p>欢迎来到我们的关于页面！</p>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title="About Me" />;

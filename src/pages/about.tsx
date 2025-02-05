import React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";

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

export const Head: HeadFC = () => (
  <>
    <title>关于 Balbina Safari</title>
    <meta
      name="description"
      content="Balbina Safari 是一家位于坦桑尼亚的旅游公司，专注于提供独特的野生动物探险和文化体验。我们致力于为游客提供难忘的旅行回忆。"
    />
  </>
);

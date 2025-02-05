import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Welcome to Balbina Safari</h1>
      <p>
        Balbina Safari
        是一家位于坦桑尼亚的旅游公司，专注于提供独特的野生动物探险和文化体验。我们致力于为游客提供难忘的旅行回忆。
      </p>
      <Link to="/about">About</Link>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/car-5-p.jpg"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Balbina Safari</title>;

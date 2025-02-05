import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

interface BlogPageProps {
  allMdx: {
    nodes: {
      frontmatter: { date: string; title: string };
      id: string;
      excerpt: string;
    }[];
  };
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

const BlogPage: React.FC<PageProps<BlogPageProps>> = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};
export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default BlogPage;

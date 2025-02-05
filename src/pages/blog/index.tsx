import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { HeadFC, Link, PageProps } from "gatsby";
import { graphql } from "gatsby";

interface BlogPageProps {
  allMdx: {
    nodes: {
      frontmatter: { date: string; title: string; slug: string };
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
          slug
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
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};
export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default BlogPage;

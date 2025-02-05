import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, HeadFC, HeadProps, PageProps } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

interface BlogPostProps {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      hero_image: any;
      hero_image_alt: string;
    };
  };
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
      }
    }
  }
`;

const BlogPost: React.FC<PageProps<BlogPostProps>> = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout>
      <p>{data.mdx.frontmatter.date}</p>
      {image && (
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      )}
      {children}
    </Layout>
  );
};

export const Head: HeadFC<BlogPostProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;

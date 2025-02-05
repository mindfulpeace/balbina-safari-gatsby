import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface SeoProps {
  title?: string;
  description?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />
    </>
  );
};

export default Seo;

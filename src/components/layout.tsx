import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "./layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    <div className="container">
      <header>{data.site.siteMetadata.title}</header>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/blog">Blog</Link>
            </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Balbina Safari</p>
      </footer>
    </div>
  );
};

export default Layout;

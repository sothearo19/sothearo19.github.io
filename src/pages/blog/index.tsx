import * as React from "react";
import { graphql, HeadFC, Link } from "gatsby";
import Seo from "../../components/seo";

interface Props {
  data: DataProps;
}

const BlogPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h1 className="mb-4">Blog Page</h1>
      <div className="flex flex-col gap-1.5">
        {data.allMdx.nodes.map(({ frontmatter: { title, slug, date } }) => (
          <article key={title}>
            <h2>
              <Link to={`/blog/${slug}`}>{title}</Link>
            </h2>
            <p>{date}</p>
          </article>
        ))}
      </div>
    </>
  );
};

interface DataProps {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string;
        slug: string;
        date: string;
      };
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
          date(formatString: "MMMM DD, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default BlogPage;

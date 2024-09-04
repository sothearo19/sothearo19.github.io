import * as React from "react";
import { graphql, HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";

interface Props {
  data: DataProps;
  children: React.ReactNode;
}

const BlogPost: React.FC<Props> = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <GatsbyImage image={image!} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>{data.mdx.frontmatter.date}</p>
      <div className="markdown-body">{children}</div>
    </>
  );
};

interface DataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      hero_image_alt: string;
      hero_image: {
        childImageSharp: {
          gatsbyImageData: any;
        };
      };
    };
  };
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPost;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);

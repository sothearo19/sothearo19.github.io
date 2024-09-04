import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface Props {
  title: string;
}

export default function Seo({ title }: Props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
}

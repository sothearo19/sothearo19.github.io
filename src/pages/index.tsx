import * as React from "react";
import { HeadFC } from "gatsby";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Homepage" />;

export default IndexPage;

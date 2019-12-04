/*
 * FeaturePage
 *
 * List all the features
 */
import React from "react";
import { Helmet } from "react-helmet";
import "./style.scss";

function FeaturePage() {
  return (
    <>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <article>detailed movies</article>
    </>
  );
}

export default FeaturePage;

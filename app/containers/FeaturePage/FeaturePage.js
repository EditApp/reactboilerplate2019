/*
 * FeaturePage
 *
 * List all the features
 */
import React from "react";
import { Helmet } from "react-helmet";
import "./style.scss";



import MovieItem from "../../components/MovieItem";
import { fakedata } from "../HomePage/fakeData";


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
      <section className={"flexboxContainer1col"}>
          {fakedata.map(movie => (
            <MovieItem
              displayfull={true}
              id={movie.id}
              key={movie.id}
              title={movie.original_title}
              image={movie.poster_path}
              date={movie.release_date}
              description={movie.overview}
            />
          ))}
        </section>
    </>
  );
}

export default FeaturePage;

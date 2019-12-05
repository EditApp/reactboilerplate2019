//HomePage This is the first thing users see of our App, at the '/' route

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "./style.scss";

//components

import MovieItem from "../../components/MovieItem";
import { fakedata } from "./fakeData";


function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div className="home-page">
        {/*<div>{JSON.stringify(movieslist)}</div>*/}
        <section className={"flexboxContainer4cols"}>
          {fakedata.map(movie => (
            <MovieItem
              key={movie.id}
              title={movie.title}
              image={movie.coverUrl}
              date={movie.publicationDate}
              description={movie.description}
            />
          ))}
        </section>
      </div>
    </article>
  );
}

export default HomePage;



HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};

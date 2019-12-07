import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./style.scss";

import MovieDetail from "../../components/MovieDetail";
import { fakedata } from "../../store/fakeData";

class FeaturePage extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "paw-patrol",
      language: "en-US",
      page: "1"
    };
    this.apiKey = "ee2a2cbe04745ba68bf80eb4a82c6296";
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=${this.state.language}&page=${this.state.page}`
    )
      .then(data => data.json())
      .then(data => {
        console.log("data.results");
        console.log(data.results);

        const currentId = this.props.location.pathname.slice(13);
  
        this.setState({
          movies: [...data.results]
        });
      });
  }
  render() {

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
          {console.log("return this.state.movies")}
          {console.log(this.state.movies)}
          {this.state.movies.map(movie => (
            <MovieDetail
              showbutton={false}
              rating={movie.vote_average}
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
}

export default FeaturePage;

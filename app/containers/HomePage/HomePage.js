//HomePage This is the first thing users see of our App, at the '/' route

import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "./style.scss";

import MovieItem from "../../components/MovieItem";
import MoviesList from "../MoviesList";

class HomePage extends Component {
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
        console.log("data");
        console.log(data);
        this.setState({
          movies: [...data.results]
        });
      });
  }
  render() {
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
          {/*TODO - afficher data de store,*/}
          <section>
            <MoviesList moviesdata={this.props.films.moviesListy} />
          </section>
          <section className={"flexboxContainer4cols"}>
            {this.state.movies.map(movie => (
              <MovieItem
              showbutton={true}
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
        </div>
      </article>
    );
  }
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

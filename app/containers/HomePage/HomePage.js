//HomePage This is the first thing users see of our App, at the '/' route

import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "./style.scss";

//components
import MovieItem from "../../components/MovieItem";
import FormSubmit from "../../components/FormSubmit";
import { fakedata } from "../../store/fakeData";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "paw-patrol",
      latest: "latest"
    };
    this.apiKey = "ee2a2cbe04745ba68bf80eb4a82c6296";
  }

  componentDidMount(){
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
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

  getLatest = e => {
    e.preventDefault();
    console.log('get latest');
  };

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

        <FormSubmit
          getLatest={this.getLatest}
        />

        <div className="home-page">
          <section className={"flexboxContainer4cols"}>
            {this.state.movies.map(movie => (
              <MovieItem
                displayfull={false}
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

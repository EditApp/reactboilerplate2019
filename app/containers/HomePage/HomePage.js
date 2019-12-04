/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "./style.scss";

//components

import MovieItem from "../../components/MovieItem";

function HomePage() {
  const fakedata = [
    {
      id: "1",
      title: "Avatar",
      description: "Lorem ipsum",
      publicationDate: "12/08/2019",
      coverUrl:
        "https://qph.fs.quoracdn.net/main-qimg-f6c254c92142d55d02f0fa0d382bb91a.webp"
    },
    {
      id: "2",
      title: "Blabla blu",
      description: "Lorem ipsum",
      publicationDate: "12/07/2019",
      coverUrl:
        "https://qph.fs.quoracdn.net/main-qimg-f6c254c92142d55d02f0fa0d382bb91a.webp"
    },
    {
      id: "3",
      title: "Cdgdffds",
      description: "Lorem ipsum",
      publicationDate: "12/10/2019",
      coverUrl:
        "https://qph.fs.quoracdn.net/main-qimg-f6c254c92142d55d02f0fa0d382bb91a.webp"
    },
    {
      id: "4",
      title: "SSAsfsff",
      description: "Lorem ipsum",
      publicationDate: "12/06/2019",
      coverUrl:
        "https://qph.fs.quoracdn.net/main-qimg-f6c254c92142d55d02f0fa0d382bb91a.webp"
    },
    {
      id: "5",
      title: "AvatFFDar",
      description: "Lorem ipsum",
      publicationDate: "12/05/2019",
      coverUrl:
        "https://qph.fs.quoracdn.net/main-qimg-f6c254c92142d55d02f0fa0d382bb91a.webp"
    }
  ];
  const [hasError, setErrors] = useState(false);
  const [movieslist, setMovieslist] = useState({});

  const baseUrl = `https://api.themoviedb.org/3/movie/550?`;
  const apiKey = `ee2a2cbe04745ba68bf80eb4a82c6296`;
  const apiKeyParam = `api_key=${apiKey}`;

  const apiEndpoint = `${baseUrl}${apiKeyParam}`;

  console.log("apiEndpoint");
  console.log(apiEndpoint);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(apiEndpoint);
      data
        .json()
        .then(data => setMovieslist(data))
        .catch(err => setErrors(err));
    }

    fetchData();
  }, []);

  console.log("apiKey");
  console.log(apiKey);
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
        <section classname={'flexboxContainer4cols'}>
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

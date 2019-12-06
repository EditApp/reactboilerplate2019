//TODO
//Use the API Movie Database, to create user interface
//show the last movies
//show movies by date
//show a film on another page
//show film suggestions
//get movies list : publication date, title, description, 
//request example  https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/latest?api_key=ee2a2cbe04745ba68bf80eb4a82c6296
//mu API key : ee2a2cbe04745ba68bf80eb4a82c6296
//https://developers.themoviedb.org/3/getting-started/introduction

//LOGIN
//https://www.themoviedb.org/?_dc=1575563436
//username : EdytaSkibinska
//Password : Gouraya13
//click on API
  

const baseUrl = `https://api.themoviedb.org/3/movie/550?`;
const apiKey = `ee2a2cbe04745ba68bf80eb4a82c6296`;
const apiKeyParam = `api_key=${apiKey}`;
const completeUrl = `${baseUrl}${apiKeyParam}`;
console.log('completeUrl');
console.log(completeUrl);

export const fetchMoviesData = async () => {
  try {
    const response = await fetch(
      completeUrl
    );
    const data = await response.json();
    //console.log('data')
    //console.log(data)
    return data;
  } catch (e) {
    console.log(e);
  }
};

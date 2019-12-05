const baseUrl = `https://api.themoviedb.org/3/movie/550?`;
const apiKey = `ee2a2cbe04745ba68bf80eb4a82c6296`;
const apiKeyParam = `api_key=${apiKey}`;
const apiEndpoint = `${baseUrl}${apiKeyParam}`;
console.log('apiEndpoint');
console.log(apiEndpoint);

export const fetchMoviesData = async () => {
  try {
    const response = await fetch(
      apiEndpoint
    );
    const data = await response.json();
    console.log('data')
    console.log(data)
    return data;
  } catch (e) {
    console.log(e);
  }
};

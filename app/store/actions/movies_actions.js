/// NEW STORE
import axios from "axios";

const URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "ee2a2cbe04745ba68bf80eb4a82c6296";
const LANG = "en-US";
const PAGE = "1";
//actions requesting cart list from json data
export function moviesList() {
  const request = axios
    .get(`${URL}/upcoming?api_key=${API_KEY}&language=${LANG}&page=${PAGE}`)
    .then(response => response.data);
  return {
    type: "GET_MOVIES",
    payload: request
  };
}
/// NEW STORE

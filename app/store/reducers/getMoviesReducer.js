//TODO

import { RECEIVE_MOVIES } from "../actions/getMoviesActions";


export default ( state = {}, {type, data }) => {
  switch(type) {
    case RECEIVE_MOVIES:
      return data;
    default:
      return state
    }
}
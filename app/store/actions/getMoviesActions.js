//TODO REQUEST API DATA MOVIES DB
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export const requestMoviesData = () => ({type: REQUEST_MOVIES })
export const receiveMoviesData = (data) => ({type: RECEIVE_MOVIES, data })
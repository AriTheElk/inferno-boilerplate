// these are the initial values for our global store
export default {
  ajax: {
    callsInProgress: 0, // the size of our async queue
  },
  movies: {
    query: '', // query we're searching the movie database for
    results: [], // movie results our query returned
  },
};

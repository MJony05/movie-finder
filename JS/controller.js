import SearchView from "./view.js";
import { state, findMovie } from "./model.js";
const control = async function () {
  await findMovie(SearchView.getText());
  console.log(state.result.Search);
  SearchView.renderHtml(state.result.Search);
};
SearchView.addHandler(control);
/**
 *  Poster: "https://m.media-amazon.com/images/M/MV5BOWZhZjE4NGQtODg5Ni00MjQ1LWJmMzAtNzQ2N2M1NzYzMDJkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
Title: "Shazam!"
Type: "movie"
Year: "2019"
 */

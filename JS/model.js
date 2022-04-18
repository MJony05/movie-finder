export const state = {
  result: {},
};
export const findMovie = async function (movieKey) {
  try {
    const data = await fetch(
      `https://www.omdbapi.com/?apikey=1fd18c03&s=${movieKey}`
    );
    const dataJson = await data.json();
    state.result = dataJson;
  } catch (err) {
    console.error(err);
  }
};

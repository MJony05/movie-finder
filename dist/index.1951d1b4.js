var e = new (class {
  _parentElement = document.querySelector(".movie-list");
  userFrom = document.querySelector(".user-form");
  #e = document.querySelector(".search-input");
  getText() {
    return this.#e.value;
  }
  addHandler(e) {
    this.userFrom.addEventListener("submit", function (t) {
      t.preventDefault(), e();
    });
  }
  renderHtml(e) {
    let t;
    (this._parentElement.innerHTML = ""),
      e.forEach((e) => {
        (t = `\n      <div class="movie-list-item">\n      <img class="movie-list-item-img" src="${e.Poster}" alt="" />\n      <span class="movie-list-item-title">${e.Title}</span>\n      <p class="movie-list-item-desc">\n       Year:${e.Year}\n      </p>\n      <button class="movie-list-item-button">${e.Type}</button>\n    </div>`),
          this._parentElement.insertAdjacentHTML("afterbegin", t);
      });
  }
})();
const t = { result: {} };
e.addHandler(async function () {
  await (async function (e) {
    try {
      const n = await fetch(`https://www.omdbapi.com/?apikey=1fd18c03&s=${e}`),
        s = await n.json();
      t.result = s;
    } catch (e) {
      console.error(e);
    }
  })(e.getText()),
    console.log(t.result.Search),
    e.renderHtml(t.result.Search);
});
//# sourceMappingURL=index.1951d1b4.js.map

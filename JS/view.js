class SearchView {
  _parentElement = document.querySelector(".movie-list");
  userFrom = document.querySelector(".user-form");
  #searchInput = document.querySelector(".search-input");
  getText() {
    const movie = this.#searchInput.value;
    return movie;
  }
  addHandler(handle) {
    this.userFrom.addEventListener("submit", function (e) {
      e.preventDefault();
      handle();
    });
  }
  renderHtml(arr) {
    let html;
    this._parentElement.innerHTML = "";
    arr.forEach((element) => {
      html = `
      <div class="movie-list-item">
      <img class="movie-list-item-img" src="${element.Poster}" alt="" />
      <span class="movie-list-item-title">${element.Title}</span>
      <p class="movie-list-item-desc">
       Year:${element.Year}
      </p>
      <button class="movie-list-item-button">${element.Type}</button>
    </div>`;
      this._parentElement.insertAdjacentHTML("afterbegin", html);
    });
  }
}
export default new SearchView();

import movieStore, { searchMovies } from "../store/movie";

import { Component } from "../core/core";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");

    this.el.innerHTML = /*HTML*/ `
      <div class="search-wrap">
        <input value="" placeholder="ex) avengers" />
        <select id='year'>
          <option>All Year</option>
        </select>
        <button class="btn btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    `;

    const thisYear = new Date().getFullYear();
    const select = this.el.querySelector("#year");
    for (let i = thisYear; i >= 1985; i--) {
      const options = document.createElement("option");
      options.value = i;
      options.innerText = i;
      select.append(options);
    }

    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      movieStore.state.searchText = inputEl.value;
    });
    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && movieStore.state.searchText.trim()) {
        if (select.value === "All Year") {
          movieStore.state.searchYear = "";
        } else {
          movieStore.state.searchYear = select.value;
        }
        searchMovies(1);
        searchMovies(2);
      }
    });
    const btnEl = this.el.querySelector(".btn-search");
    btnEl.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) {
        if (select.value === "All Year") {
          movieStore.state.searchYear = "";
        } else {
          movieStore.state.searchYear = select.value;
        }
        searchMovies(1);
        searchMovies(2);
      }
    });
  }
}

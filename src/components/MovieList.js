import movieStore, { searchMovies } from "../store/movie";

import { Component } from "../core/core";
import MovieDetail from "./MovieDetail";
import MovieItem from "./Movieitem";
import TheLoader from "./TheLoader";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
    movieStore.subscribe("listLoading", () => {
      this.render();
    });
    movieStore.subscribe("message", () => {
      this.render();
    });
  }

  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /*HTML*/ `
      ${
        movieStore.state.message
          ? `<div class="message">${movieStore.state.message}</div>`
          : '<div class="movies"></div>'
      }
    `;
    const loader = new TheLoader().el;
    const detail = new MovieDetail().el;
    this.el.append(loader, detail);

    movieStore.state.listLoading
      ? loader.classList.remove("hide")
      : loader.classList.add("hide");

    const moviesEl = this.el.querySelector(".movies");
    const newMovies = movieStore.state.movies.slice(
      0,
      movieStore.state.page * 20
    );

    moviesEl?.append(
      ...newMovies.map(
        (movie) =>
          new MovieItem({
            movie,
          }).el
      )
    );
  }
}

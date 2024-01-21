import movieStore, { getMovieDetails } from "../store/movie";

import { Component } from "../core/core";

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: "div",
    });
  }
  render() {
    const { movie } = this.props;
    this.el.classList.add("movie");
    this.el.innerHTML = /* html */ `
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
        <div class="type">
          ${movie.Type}
        </div>
      </div>
      <img src="${movie.Poster}" onerror="this.src='https://fl-1.cdn.flockler.com/embed/no-image.svg'"alt="noimage" />
    `;

    this.el.addEventListener("click", async () => {
      movieStore.state.movie = {};
      movieStore.state.contents = false;
      movieStore.state.modal = true;
      await getMovieDetails(movie.imdbID);
    });
  }
}

import movieStore, { getMovieDetails } from '../store/movie';

import { Component } from '../core/assets';

export default class Movie extends Component {
  async render() {
    this.el.classList.add('the-movie');
    this.el.innerHTML = /* html */ `
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
        <ul class="movieinfo skeleton"></ul>
      </div>
    `;
    await getMovieDetails(history.state.id);
    const { movie } = movieStore.state;
    const bigPoster = movie.Poster.replace('SX300', 'SX1000');

    this.el.innerHTML = /* html */ `
      <a class="prev" href="#/search"><i class="fa-solid fa-xmark"></i></a>
      <div
        style="background-image: url(${bigPoster});"
        class="poster">
      </div>
      <div class="specs">
        <div class="title">
          ${movie.Title}
        </div>
        <div class="labels">
          <span>${movie.Released}</span>
          &nbsp;/&nbsp;
          <span>${movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movie.Country}</span>
        </div>
        <div class="plot">
          ${movie.Plot}
        </div>
        <div>
          <!-- ul 태그를 활용하여 movieinfo 클래스명으로 상세 정보 구성 -->
          <ul class="movieinfo">
            <div>
              <li>
                <h3>Ratings</h3>
                ${movie.Ratings.map((rating) => {
                  return `<p>${rating.Source} - ${rating.Value}</p>`;
                }).join('')}
              </li>
              <li>
                <h3>Actors</h3>
                <p>${movie.Actors}</p>
              </li>
            </div>
            <div>
              <li>
                <h3>BoxOffice</h3>
                <p>${movie.BoxOffice}</p>
              </li>
              <li>
                <h3>Director</h3>
                <p>${movie.Director}</p>
              </li>
              <li>
                <h3>Genre</h3>
                <p>${movie.Genre}</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    `;
  }
}

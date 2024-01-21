import { Component } from "../core/core";

export default class Home extends Component {
  async render() {
    this.el.classList.add("main-co");
    this.el.innerHTML = /* html */ `
      <div class="co-detail">
        <!-- Section : Trail-info -->
        <section class="trail-info">
          <div class="trail-detail">
            <div class="trail-title">
              <h3>Avengers Infinity War</h3>
              <a 
                href="https://www.youtube.com/watch?v=xUDhdCsLkjU" 
                target="_blank">
                Trailer</a>
            </div>
            <ul class="scene">
              <li>
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000080/80585/80585154120_727.jpg" />
              </li>
              <li>
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000080/80585/80585154123_727.jpg" />
              </li>
              <li>
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000080/80585/80585154128_727.jpg" />
              </li>
            </ul>
          </div>
        </section>
        
        <!-- Section : Marvel (Marvel) -->
        <section class="movie-related">
          <h3>Marvel</h3>
          <ul class="related-movies" id="marvelMovies"></ul>
        </section>

        <!-- Section : Disney (Disney) -->
        <section class="movie-related">
          <h3>Disney</h3>
          <ul class="related-movies" id="disneyMovies"></ul>
        </section>

        <!-- Section : Pixar (Pixar) -->
        <section class="movie-related">
          <h3>Pixar</h3>
          <ul class="related-movies" id="pixarMovies"></ul>
        </section>
      </div>
    `;

    async function fetchMoviesByTitle(title) {
      const apiKey = "14c167f8";
      const searchQuery = title;
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`
      );
      const data = await response.json();

      return data.Search || [];
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function renderMovieCards(movies, listId) {
      const moviesElement = document.getElementById(listId);

      const shuffledMovies = shuffleArray(movies);

      shuffledMovies.forEach((movie) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="related-poster">
            <img src="${movie.Poster}" onerror="this.src='https://fl-1.cdn.flockler.com/embed/no-image.svg'"alt="noimage" />
          </div>
          <div class="related-info">
            <h4>${movie.Title}</h4>
            <span>${movie.Year}</span>
          </div>
        `;
        moviesElement.appendChild(li);
      });
    }

    (async () => {
      const marvelMovies = await fetchMoviesByTitle("Marvel");
      renderMovieCards(marvelMovies, "marvelMovies");
    })();

    (async () => {
      const disneyMovies = await fetchMoviesByTitle("Disney");
      renderMovieCards(disneyMovies, "disneyMovies");
    })();

    (async () => {
      const pixarMovies = await fetchMoviesByTitle("Pixar");
      renderMovieCards(pixarMovies, "pixarMovies");
    })();
  }
}

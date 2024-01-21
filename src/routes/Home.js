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
        
        <!-- Section : Movie-Popular -->
        <section class="movie-related">
          <h3>Now Playing</h3>
          <ul class="related-movies">
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/spider-man-far-from-home" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/spider-manfarfromhome_lob_crd_04_3.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Spider-Man: Far-From Home</h4>
                <span>2019</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/avengers-endgame" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05_2.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Avengers: Endgame</h4>
                <span>2019</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/captain-marvel" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/captainmarvel_lob_crd_06.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Captain Marvel</h4>
                <span>2019</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/ant-man-and-the-wasp" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/ant-manthewasp_lob_crd_01.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Ant-Man and The Wasp</h4>
                <span>2018</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/black-panther" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/blackpanther_lob_crd_01_4.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Black Panther</h4>
                <span>2018</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/thor-ragnarok" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/thorragnarok_lob_crd_03.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Thor: Ragnarok</h4>
                <span>2017</span>
              </div>
            </li>
          </ul>
        </section>

        <!-- Section : Movie-Popular -->
        <section class="movie-related">
          <h3>Popular</h3>
          <ul class="related-movies">
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/spider-man-far-from-home" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/spider-manfarfromhome_lob_crd_04_3.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Spider-Man: Far-From Home</h4>
                <span>2019</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/avengers-endgame" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05_2.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Avengers: Endgame</h4>
                <span>2019</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/captain-marvel" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/captainmarvel_lob_crd_06.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Captain Marvel</h4>
                <span>2019</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/ant-man-and-the-wasp" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/ant-manthewasp_lob_crd_01.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Ant-Man and The Wasp</h4>
                <span>2018</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/black-panther" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/blackpanther_lob_crd_01_4.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Black Panther</h4>
                <span>2018</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/thor-ragnarok" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/thorragnarok_lob_crd_03.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Thor: Ragnarok</h4>
                <span>2017</span>
              </div>
            </li>
          </ul>
        </section>

        <!-- Section : Movie-Comming soon -->
        <section class="movie-related">
          <h3>Comming soon</h3>
          <ul class="related-movies">
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/spider-man-far-from-home" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/spider-manfarfromhome_lob_crd_04_3.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Spider-Man: Far-From Home</h4>
                <span>2019</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/avengers-endgame" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05_2.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Avengers: Endgame</h4>
                <span>2019</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/captain-marvel" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/captainmarvel_lob_crd_06.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Captain Marvel</h4>
                <span>2019</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/ant-man-and-the-wasp" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/ant-manthewasp_lob_crd_01.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Ant-Man and The Wasp</h4>
                <span>2018</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/black-panther" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/blackpanther_lob_crd_01_4.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Black Panther</h4>
                <span>2018</span>
              </div>
            </li>
            <li>
              <div class="related-poster">
                <a 
                  href="https://www.marvel.com/movies/thor-ragnarok" 
                  target="_blank">
                  <img src="https://cdn.marvel.com/content/1x/thorragnarok_lob_crd_03.jpg" />
                </a>
              </div>
              <div class="related-info">
                <h4>Thor: Ragnarok</h4>
                <span>2017</span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    `;
  }
}

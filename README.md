## 'J's CINEBOX'

<br>

### • 배포 주소: [https://junyong-cinebox.netlify.app/#/](https://junyong-cinebox.netlify.app/#/)

<br>

#### - 작업 기간: 2024.01

<br>

### 기술 스택

Development

<p>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white" />
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white" />
</p>

Config

<p>
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/></a>
</p>

Environment

<p>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>
</p>
<br>

### 전체 페이지

<img src="https://github.com/azure0929/junyong-CINEBOX/assets/128226527/a68929a3-56aa-402e-9c9d-7ba28fb86285" />

<br><br>

### 💻 주요 기능

---

- intersection obeserver

```javascript
import { Component } from "../core/core";
import movieStore, { searchMovies } from "../store/movie";

export default class ObserverEl extends Component {
  render() {
    this.el.classList.add("observer-container");
    this.el.innerHTML = /*HTML*/ `
      <div id="observe"></div>
    `;

    const io = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    });
    function handleObserver(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (movieStore.state.page < movieStore.state.pageMax) {
            movieStore.state.page += 1;
            searchMovies(movieStore.state.page);
            if (movieStore.state.page === movieStore.state.pageMax) {
              io.disconnect();
            }
          }
        }
      });
    }
    const observer = this.el.querySelector("#observe");
    io.observe(observer);
  }
}
```

<br>

- 년도 별 검색

```javascript
this.el.classList.add("search");

this.el.innerHTML = /*HTML*/ `
      <div class="search-wrap">
        <input value="" placeholder="Enter the movie title" />
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
```

<br>

- 영화 사 별 랜덤 영화 출력

```javascript
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
```

<br>

- 대체 이미지 적용 (onerror 사용)

```html
<img
  src="${movie.Poster}"
  onerror="this.src='https://fl-1.cdn.flockler.com/embed/no-image.svg'"
  alt="noimage"
/>
```

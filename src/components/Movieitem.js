import { Component } from '../core/assets';

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'a'
    });
  }
  render() {
    const { movie } = this.props;

    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`);
    this.el.classList.add('movie');
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
      <img src="${movie.Poster}"  onerror="this.src='https://fl-1.cdn.flockler.com/embed/no-image.svg'"alt="noimage" />
    `;
  }
}

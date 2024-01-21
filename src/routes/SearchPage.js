import { Component } from "../core/core";
import MovieItemsMore from "../components/MovieItemsMore";
import MovieList from "../components/MovieList";
import Search from "../components/Search";

export default class Home extends Component {
  render() {
    const movieItems = new MovieList().el;
    const movieItemsMore = new MovieItemsMore().el;
    const search = new Search().el;

    this.el.classList.add("searchpage");
    this.el.append(search, movieItems, movieItemsMore);
  }
}

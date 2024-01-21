import { Component } from "../core/core";
import MovieList from "../components/MovieList";
import ObserverEl from "../components/ObserverEl";
import Search from "../components/Search";

export default class Home extends Component {
  render() {
    const movieItems = new MovieList().el;
    const search = new Search().el;
    const observerEl = new ObserverEl().el;

    this.el.classList.add("searchpage");
    this.el.append(search, movieItems, observerEl);
  }
}

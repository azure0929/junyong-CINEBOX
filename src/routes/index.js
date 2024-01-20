import Home from './Home';
import Movie from './Movie';
import Search from './SearchPage';
import { createRouter } from '../core/assets';

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/search', component: Search },
  { path: '#/movie', component: Movie }
]);

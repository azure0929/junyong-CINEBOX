import Home from "./Home";
import SearchPage from "./SearchPage";
import { createRouter } from "../core/core";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/search", component: SearchPage },
]);

import App from "./App";
import router from "./routes";

const info = document.querySelector(".root");
info.append(new App().el);

router();

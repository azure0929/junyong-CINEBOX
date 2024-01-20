import App from './App';
import router from './routes';

const info = document.querySelector('.root');
info.append(new App().el);

router();

const toTopEl = document.querySelector('.to-top');

toTopEl.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

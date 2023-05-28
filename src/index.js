import Notiflix from 'notiflix';
import { getApiInfo } from './js/getApi';
import { getMoviList } from './js/getMoviList';

let NUMBER_OF_PAGE = 1;

const loadBtn = document.querySelector('.button');
const clear = document.querySelector('.clear');
const list = document.querySelector('.js-list');
const guard = document.querySelector('.js-guard');

loadBtn.addEventListener('click', onClick);
clear.addEventListener('click', clearPage);

let options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(onPagination, options);

function clearPage(event) {
  return document.location.reload();
}

function onClick(event) {
  loadBtn.disabled = true;
  loadBtn.style.backgroundColor = '#313030';

  getApiInfo(NUMBER_OF_PAGE)
    .then(data => {
      console.log(data);
      Notiflix.Notify.success(
        '🤡🤠👽 Request done success! Get you movi-list!'
      );
      const markup = getMoviList(data.results);
      list.insertAdjacentHTML('afterbegin', markup);
      observer.observe(guard);
    })
    .catch(error => {
      console.dir(error);
      Notiflix.Notify.failure(`😡😡😡 You have some ERROR: ${error.message}`);
    });
}

function onPagination(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      NUMBER_OF_PAGE += 1;
      getApiInfo(NUMBER_OF_PAGE).then(data => {
        list.insertAdjacentHTML('beforeend', getMoviList(data.results));
        if (NUMBER_OF_PAGE === data.total_pages) {
          observer.unobserve(guard);
        }
      });
    }
  });
}

import {createHtmlElement} from './utils.js';

const listCard = document.querySelector('.other-films__list');

const renderCard = data => {

  listCard.textContent = '';

  const cards = data.map((item) => {

    const card = createHtmlElement('li', 'other-films__item');
    const link = createHtmlElement('a', 'other-films__link');
    const img = createHtmlElement('img', 'other-films__img');

    link.dataset.rating = item.vote_average === 0 ? '-' : item.vote_average;
    img.alt = `Постер ${item.title || item.name}`;
    img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`;

    link.append(img);
    card.append(link);

    return card;
  });
  listCard.append(...cards);
}

export default renderCard;
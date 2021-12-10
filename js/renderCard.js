import {createHtmlElement} from './utils.js';
import {getVideo} from './services.js';

const listCard = document.querySelector('.other-films__list');

const renderCard = data => {

  listCard.textContent = '';

  Promise.all(data.map(async (item) => {

    const video = await getVideo(item.id, item.media_type);
    const key = video.results[0]?.key;
    console.log(key);
    const card = createHtmlElement('li', 'other-films__item');
    const link = createHtmlElement('a', 'other-films__link');
    const img = createHtmlElement('img', 'other-films__img');

    link.classList.add('tube');

    link.dataset.rating = item.vote_average === 0 ? '-' : item.vote_average;
    img.alt = `Постер ${item.title || item.name}`;
    img.src = item.poster_path
      ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`
      : 'https://via.placeholder.com/600x900?text=Poster+not+found';

    if(key) link.href = `https://youtu.be/${key}`

    link.append(img);
    card.append(link);

    return card;
  })).then(cards => listCard.append(...cards));
}

export default renderCard;
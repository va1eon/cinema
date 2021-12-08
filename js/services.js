const API_KEY = '876fa09df7b97d56d91cc16793415801';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

const getData = url => fetch(url)
  .then(res => {
    if(res.ok) {
      return  res.json()
    }
    throw `Что-то пошло не так, ошибка ${res.status}`
  })
  .catch(err => console.error(err));

export const getTriends = async (type = 'all', period = 'week', page = 1) =>{
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
}
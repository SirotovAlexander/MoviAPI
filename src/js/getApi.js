const BASE_LINK = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/tv/week?';
const API_KEY = 'api_key=345007f9ab440e5b86cef51be6397df1';

async function getApiInfo(page) {
  const URL = `${BASE_LINK}${END_POINT}${API_KEY}&page=${page}`;
  const response = await fetch(URL);
  return response.json();
}

export { getApiInfo };

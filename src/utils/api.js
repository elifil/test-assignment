const BASE_URL = "https://restcountries.eu"
const fetchJson = url => fetch(url).then(res => res.json());

export const api = {
  getItem: id => fetchJson(`${BASE_URL}//rest/v2/name/${id}`),
  getItemsIds: () => fetchJson(`${BASE_URL}/rest/v2/all`),
};

import wretch from 'wretch';

const BASE_URL = 'http://www.omdbapi.com/?&apikey=db6338f0';
export const api = wretch(BASE_URL);

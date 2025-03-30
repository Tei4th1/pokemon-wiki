import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';
axios.defaults.baseURL = API_URL;

export const getPokemon = async (offset = 0, limit = 70) => {
  try {
    const response = await axios.get(`/pokemon`, { params: { offset, limit } });
    return response.data;
  } catch (error) {
    console.log(error, 'err');
  }
};

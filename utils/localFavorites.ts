/* eslint-disable import/no-anonymous-default-export */
const toggleFavorite = (id: number) => {
  if (typeof window === 'undefined') return;
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const exitInFavorite = (id: number): Boolean => {
  if (typeof window === 'undefined') return false;
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
};

const favoritesPokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default {
  toggleFavorite,
  exitInFavorite,
  favoritesPokemons
};
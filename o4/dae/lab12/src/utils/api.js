const BASE = 'https://pokeapi.co/api/v2';

export async function fetchPokemonList(limit = 150) {
  const res = await fetch(`${BASE}/pokemon?limit=${limit}`);
  if (!res.ok) throw new Error('Error al obtener la lista');
  const data = await res.json();
  return data.results;
}

export async function fetchPokemonData(name) {
  const res = await fetch(`${BASE}/pokemon/${name}`);
  if (!res.ok) throw new Error('Error al obtener datos de Pokémon');
  return res.json();
}

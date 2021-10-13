const funGames = async () => {

  // const base = 'https://api.rawg.io/api/games';
  const query = `?key=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data;

}
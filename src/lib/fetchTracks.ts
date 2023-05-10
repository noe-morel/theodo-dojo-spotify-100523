const apiToken: string =
  'BQCCxc2rrku3tRuI8Gk-jN0wZ6gNBYLiHjLzEsc3KmKp93sxvGvIpJ1UoNiJZLbXPPk9iv1eALdG9Crnirc3ZrajWjbKURymwaD6rtLxoOYYTqN2ZC7eFHz7-Ixr9yxZIZsZTUb36EMHCrdTt5NpyaLY_JchCAjhiBbmdhirBz3KqRooqfBayPc-oRkQdehCxQXzzt-qZKMT6PT8OLrQqu8';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};

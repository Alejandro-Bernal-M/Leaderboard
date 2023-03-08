import gameId from './gameID.js';

const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

export default async (name, sco) => {
  const score = {
    user: name,
    score: sco,
  };
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  };

  const res = await fetch(gameUrl, config);
  const data = await res.json();
  return data;
};
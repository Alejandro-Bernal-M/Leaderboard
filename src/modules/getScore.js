import gameId from './gameID.js';

const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
export default async () => {
  const getData = await fetch(gameUrl).then((response) => response.json());
  const sorted = getData.result.sort((a, b) => b.score - a.score);
  return sorted;
} 

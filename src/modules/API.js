const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const game = {
  name: 'Alejandro leaderboard new game',
};

const config = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(game),
};

async function setGame() {
  const response = await fetch(apiUrl, config).then((response) => response.json());
  return response;
}

export default setGame;

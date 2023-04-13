import axios from 'axios';

const scores = async () => {
  try {
    const response = await axios.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZaPbm9oaVpqPuijeJXt8/scores');
    return response.data.result;
  } catch (error) {
    const display = document.querySelector('.scores-container');
    display.innerHTML = error;
    throw error;
  }
};

const refreshButton = document.getElementById('refresh-btn');
const scoresList = document.querySelector('.scores-container');

refreshButton.addEventListener('click', async () => {
  const gameId = 'ZaPbm9oaVpqPuijeJXt8';
  const score = await scores(gameId);

  scoresList.innerHTML = '';
  score.forEach((score) => {
    const li = document.createElement('li');
    li.classList.add('score-list');
    li.innerText = `${score.user}: ${score.score}`;
    scoresList.appendChild(li);
  });
});

export default scores;
import axios from 'axios';

const createGame = async () => {
  try {
    const response = await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      name: 'TheGame',
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 201) {
      const form = document.querySelector('.add-score-form');
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const user = document.querySelector('#name').value;
        const score = document.querySelector('#score').value;
        await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZaPbm9oaVpqPuijeJXt8/scores', {
          user,
          score,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        form.reset();
      });
    }
  } catch (error) {
    const display = document.querySelector('.scores-container');
    display.innerHTML = error;
  }
};

export default createGame;
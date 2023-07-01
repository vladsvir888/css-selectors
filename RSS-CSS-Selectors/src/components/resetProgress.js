import dataGame from '../dataGame';
import loadLevel from './loadLevel';

function resetProgress() {
    const resetButton = document.querySelector('.sidebar__reset');

    if (!resetButton) return;

    resetButton.addEventListener('click', () => {
        if (dataGame.currentLevel === 0) return;

        dataGame.currentLevel = 0;

        dataGame.historyAnswers = {};

        loadLevel();
    });
}

export default resetProgress;

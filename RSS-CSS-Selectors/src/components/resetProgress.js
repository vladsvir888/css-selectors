import data from '../data';
import loadLevel from './loadLevel';

function resetProgress() {
    const resetButton = document.querySelector('.sidebar__reset');

    resetButton.addEventListener('click', () => {
        if (data.currentLevel === 0) return;

        data.currentLevel = 0;

        loadLevel();
    });
}

export default resetProgress;

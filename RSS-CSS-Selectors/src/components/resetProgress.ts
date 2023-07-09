import { keyLocalStorage } from '../data';
import loadLevel from './loadLevel';
import setDataFromLocalStorage from './setDataFromLocalStorage';

function resetProgress(): void {
    const resetButton = document.querySelector('.sidebar__reset');

    resetButton?.addEventListener('click', () => {
        localStorage.setItem(
            keyLocalStorage,
            JSON.stringify({ currentLevel: 0, completeLevels: [], completeLevelsWithHelp: [] })
        );

        setDataFromLocalStorage();
        loadLevel();
    });
}

export default resetProgress;

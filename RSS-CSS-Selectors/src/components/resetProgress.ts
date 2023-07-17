import { dataLocalStorage, keyLocalStorage } from '../data';
import loadLevel from './loadLevel';
import setDataFromLocalStorage from './setDataFromLocalStorage';

function resetProgress(): void {
    const resetButton = document.querySelector('.sidebar__reset');

    resetButton?.addEventListener('click', () => {
        dataLocalStorage.currentLevel = 0;
        dataLocalStorage.completeLevels = [];
        dataLocalStorage.completeLevelsWithHelp = [];

        localStorage.setItem(keyLocalStorage, JSON.stringify(dataLocalStorage));

        setDataFromLocalStorage();
        loadLevel();
    });
}

export default resetProgress;

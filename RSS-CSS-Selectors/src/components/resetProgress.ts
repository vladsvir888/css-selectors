import { keyLocalStorage } from '../data';
import loadLevel from './loadLevel';
import setDataFromLocalStorage from './setDataFromLocalStorage';

function resetProgress(): void {
    const resetButton = document.querySelector('.sidebar__reset');

    resetButton?.addEventListener('click', () => {
        localStorage.removeItem(keyLocalStorage);

        setDataFromLocalStorage();
        loadLevel();
    });
}

export default resetProgress;

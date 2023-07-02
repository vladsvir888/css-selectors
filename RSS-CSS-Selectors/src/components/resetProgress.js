import { keyLocalStorage } from '../data';
import loadLevel from './loadLevel';
import setDataFromLocalStorage from './setDataFromLocalStorage';

function resetProgress() {
    const resetButton = document.querySelector('.sidebar__reset');

    if (!resetButton) return;

    resetButton.addEventListener('click', () => {
        localStorage.removeItem(keyLocalStorage);

        setDataFromLocalStorage();
        loadLevel();
    });
}

export default resetProgress;

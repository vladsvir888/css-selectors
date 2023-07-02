import { dataLocalStorage, keyLocalStorage } from '../data';
import loadLevel from './loadLevel';

function toggleLevel() {
    document.addEventListener('click', (event) => {
        const { target } = event;

        if (!target.classList.contains('sidebar__level-btn') && !target.classList.contains('sidebar__btn')) return;

        if (target.classList.contains('sidebar__level-btn')) {
            const buttons = [...document.querySelectorAll('.sidebar__level-btn')];
            const index = buttons.indexOf(target);

            dataLocalStorage.currentLevel = index;
        }

        if (target.classList.contains('sidebar__btn')) {
            if (target.classList.contains('sidebar__btn--next')) {
                dataLocalStorage.currentLevel += 1;
            } else {
                dataLocalStorage.currentLevel -= 1;
            }
        }

        localStorage.setItem(keyLocalStorage, JSON.stringify(dataLocalStorage));

        loadLevel();
    });
}

export default toggleLevel;

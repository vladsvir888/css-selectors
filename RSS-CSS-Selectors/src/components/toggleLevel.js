import data from '../data';
import loadLevel from './loadLevel';

function toggleLevel() {
    document.addEventListener('click', (event) => {
        const { target } = event;

        if (target.classList.contains('sidebar__level-btn')) {
            const buttons = [...document.querySelectorAll('.sidebar__level-btn')];

            const index = buttons.indexOf(target);

            data.currentLevel = index;

            loadLevel();

            return;
        }

        if (target.classList.contains('sidebar__btn')) {
            if (target.classList.contains('sidebar__btn--next')) {
                data.currentLevel += 1;
            } else {
                data.currentLevel -= 1;
            }

            loadLevel();
        }
    });
}

export default toggleLevel;

import dataGame from '../dataGame';
import loadLevel from './loadLevel';

function toggleLevel() {
    document.addEventListener('click', (event) => {
        const { target } = event;

        if (target.classList.contains('sidebar__level-btn')) {
            const buttons = [...document.querySelectorAll('.sidebar__level-btn')];
            const index = buttons.indexOf(target);

            dataGame.currentLevel = index;

            loadLevel();

            return;
        }

        if (target.classList.contains('sidebar__btn')) {
            if (target.classList.contains('sidebar__btn--next')) {
                dataGame.currentLevel += 1;
            } else {
                dataGame.currentLevel -= 1;
            }

            loadLevel();
        }
    });
}

export default toggleLevel;

import data from '../data';
import loadLevel from './loadLevel';

function toggleLevel() {
    const levelButtons = document.querySelectorAll('.sidebar__btn');
    const levelPrevButton = document.querySelector('.sidebar__btn--prev');
    const levelNextButton = document.querySelector('.sidebar__btn--next');

    levelButtons.forEach((levelButton) => {
        levelButton.addEventListener('click', () => {
            if (levelButton.classList.contains('sidebar__btn--next')) {
                data.currentLevel += 1;

                levelPrevButton.removeAttribute('disabled');
            } else {
                data.currentLevel -= 1;

                levelNextButton.removeAttribute('disabled');
            }

            loadLevel();
        });
    });
}

export default toggleLevel;

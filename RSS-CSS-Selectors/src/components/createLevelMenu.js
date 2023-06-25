import data from '../data';
import loadLevel from './loadLevel';

function createLevelMenu() {
    const levelsWrapperNode = document.querySelector('.sidebar__levels');

    const { levels, currentLevel } = data;

    const result = levels
        .map((_, index) => {
            return `
                <li class="sidebar__level">
                    <button class="btn sidebar__level-btn" ${index === currentLevel ? 'disabled' : ''}>
                        Level ${index + 1}
                    </button>
                </li>
            `;
        })
        .join('');

    levelsWrapperNode.insertAdjacentHTML('afterbegin', result);

    const levelButtons = levelsWrapperNode.querySelectorAll('.sidebar__level-btn');

    levelButtons.forEach((levelButton, index) => {
        levelButton.addEventListener('click', () => {
            data.currentLevel = index;

            loadLevel();
        });
    });
}

export default createLevelMenu;

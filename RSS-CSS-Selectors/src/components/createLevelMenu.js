import dataGame from '../dataGame';

function createLevelMenu() {
    const levelsWrapper = document.querySelector('.sidebar__levels');

    if (!levelsWrapper) return;

    const { levels, currentLevel } = dataGame;
    let result = '';

    levels.forEach((_, index) => {
        result += `
            <li class="sidebar__level">
                <button class="btn sidebar__level-btn" ${index === currentLevel ? 'disabled' : ''}>
                    Level ${index + 1}
                </button>
            </li>
        `;
    });

    levelsWrapper.insertAdjacentHTML('afterbegin', result);
}

export default createLevelMenu;

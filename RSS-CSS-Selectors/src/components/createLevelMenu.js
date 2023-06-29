import data from '../data';

function createLevelMenu() {
    const levelsWrapper = document.querySelector('.sidebar__levels');

    if (!levelsWrapper) return;

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

    levelsWrapper.insertAdjacentHTML('afterbegin', result);
}

export default createLevelMenu;

import { dataLevels, dataLocalStorage } from '../data';

function createLevelMenu(): void {
    const levelsWrapper = document.querySelector('.sidebar__levels');
    let result = '';

    dataLevels.forEach((_, index) => {
        result += `
            <li class="sidebar__level">
                <button 
                    class="btn sidebar__level-btn" 
                    ${index === dataLocalStorage.currentLevel ? 'disabled' : ''}
                >
                    Level ${index + 1}
                </button>
            </li>
        `;
    });

    levelsWrapper?.insertAdjacentHTML('afterbegin', result);
}

export default createLevelMenu;

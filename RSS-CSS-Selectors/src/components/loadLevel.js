import { dataLevels, dataLocalStorage } from '../data';

function loadLevel() {
    const currentLevelData = dataLevels[dataLocalStorage.currentLevel];
    const descriptionLevelString = `
        <div class="sidebar__level-descr">
            <p>${currentLevelData.selectorName}</p>
            <p>${currentLevelData.selectorDescription}</p>
        </div>
    `;
    const headingLevel = document.querySelector('h1');
    const currentAndTotalLevel = document.querySelector('.sidebar__text');
    const levelButtons = document.querySelectorAll('.sidebar__level-btn');
    const activeLevelButton = document.querySelector('.sidebar__level-btn[disabled]');
    const levelPreviousButton = document.querySelector('.sidebar__btn--prev');
    const levelNextButton = document.querySelector('.sidebar__btn--next');
    const descriptionLevel = document.querySelector('.sidebar__level-descr');
    const table = document.querySelector('.table__wrap');
    const code = document.querySelector('.code-block__area--html');
    const input = document.querySelector('.code-block__input');

    input.value = '';

    if (descriptionLevel) descriptionLevel.remove();

    headingLevel.textContent = currentLevelData.title;
    currentAndTotalLevel.textContent = `Level ${dataLocalStorage.currentLevel + 1} of ${dataLevels.length}`;

    activeLevelButton.removeAttribute('disabled');
    levelButtons[dataLocalStorage.currentLevel].setAttribute('disabled', true);
    levelButtons[dataLocalStorage.currentLevel].insertAdjacentHTML('afterend', descriptionLevelString);

    if (dataLocalStorage.currentLevel === 0) {
        levelPreviousButton.setAttribute('disabled', true);
        levelNextButton.removeAttribute('disabled');
    } else if (dataLocalStorage.currentLevel === dataLevels.length - 1) {
        levelPreviousButton.removeAttribute('disabled');
        levelNextButton.setAttribute('disabled', true);
    } else if (dataLocalStorage.currentLevel !== 0 && dataLocalStorage.currentLevel !== dataLevels.length - 1) {
        levelPreviousButton.removeAttribute('disabled');
        levelNextButton.removeAttribute('disabled');
    }

    table.innerHTML = currentLevelData.markup;
    code.innerHTML = currentLevelData.markup;
}

export default loadLevel;

import { dataLevels, dataLocalStorage } from '../data';
import { ILoadLevelElements } from '../types';
import resetControls from './resetControls';

function getElements(): ILoadLevelElements {
    return {
        headingLevel: document.querySelector('h1'),
        currentAndTotalLevel: document.querySelector('.sidebar__text'),
        levelButtons: document.querySelectorAll('.sidebar__level-btn'),
        activeLevelButton: document.querySelector('.sidebar__level-btn[disabled]'),
        levelPreviousButton: document.querySelector('.sidebar__btn--prev'),
        levelNextButton: document.querySelector('.sidebar__btn--next'),
        descriptionLevel: document.querySelector('.sidebar__level-descr'),
        table: document.querySelector('.table__wrap'),
        code: document.querySelector('.code-block__area--html'),
    };
}

function loadLevel(): void {
    const currentLevelData = dataLevels[dataLocalStorage.currentLevel];

    const {
        headingLevel,
        currentAndTotalLevel,
        levelButtons,
        activeLevelButton,
        levelPreviousButton,
        levelNextButton,
        descriptionLevel,
        table,
        code,
    } = getElements();

    if (
        !table ||
        !code ||
        !headingLevel ||
        !currentAndTotalLevel ||
        !activeLevelButton ||
        !levelPreviousButton ||
        !levelNextButton
    ) {
        return;
    }

    resetControls();

    if (descriptionLevel) descriptionLevel.remove();

    headingLevel.textContent = currentLevelData.title;
    currentAndTotalLevel.textContent = `Level ${dataLocalStorage.currentLevel + 1} of ${dataLevels.length}`;

    activeLevelButton.removeAttribute('disabled');
    levelButtons[dataLocalStorage.currentLevel].setAttribute('disabled', '');
    levelButtons[dataLocalStorage.currentLevel].insertAdjacentHTML(
        'afterend',
        `
        <div class="sidebar__level-descr">
            <p>${currentLevelData.selectorName}</p>
            <p>${currentLevelData.selectorDescription}</p>
        </div>
        `
    );

    levelPreviousButton.removeAttribute('disabled');
    levelNextButton.removeAttribute('disabled');

    if (dataLocalStorage.currentLevel === 0) levelPreviousButton.setAttribute('disabled', '');
    if (dataLocalStorage.currentLevel === dataLevels.length - 1) levelNextButton.setAttribute('disabled', '');

    table.innerHTML = currentLevelData.markup;
    code.innerHTML = currentLevelData.markup;
}

export default loadLevel;

import { dataLevels, dataLocalStorage } from '../data';
import resetControls from './resetControls';

function changeDisabledAttributeOnLevelButtons(): void {
    const activeLevelButton = <HTMLButtonElement>document.querySelector('.sidebar__level-btn[disabled]');
    const levelButtons = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.sidebar__level-btn');
    const levelPreviousButton = <HTMLElement>document.querySelector('.sidebar__btn--prev');
    const levelNextButton = <HTMLElement>document.querySelector('.sidebar__btn--next');

    activeLevelButton.removeAttribute('disabled');
    levelButtons[dataLocalStorage.currentLevel].setAttribute('disabled', '');

    levelPreviousButton.removeAttribute('disabled');
    levelNextButton.removeAttribute('disabled');

    if (dataLocalStorage.currentLevel === 0) levelPreviousButton.setAttribute('disabled', '');
    if (dataLocalStorage.currentLevel === dataLevels.length - 1) levelNextButton.setAttribute('disabled', '');
}

function updateLevelMarkup(): void {
    const currentLevelData = dataLevels[dataLocalStorage.currentLevel];
    const headingLevel = <HTMLHeadingElement>document.querySelector('h1');
    const currentAndTotalLevelText = <HTMLElement>document.querySelector('.sidebar__text');
    const levelButtons = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.sidebar__level-btn');
    const table = <HTMLElement>document.querySelector('.table__wrap');
    const code = <HTMLElement>document.querySelector('.code-block__area--html');

    headingLevel.textContent = currentLevelData.title;
    currentAndTotalLevelText.textContent = `Level ${dataLocalStorage.currentLevel + 1} of ${dataLevels.length}`;

    levelButtons[dataLocalStorage.currentLevel].insertAdjacentHTML(
        'afterend',
        `
        <div class="sidebar__level-descr">
            <p>${currentLevelData.selectorName}</p>
            <p>${currentLevelData.selectorDescription}</p>
        </div>
        `
    );

    table.innerHTML = currentLevelData.markup;
    code.innerHTML = currentLevelData.markup;
}

function loadLevel(): void {
    const descriptionLevel = document.querySelector('.sidebar__level-descr');

    resetControls();

    if (descriptionLevel) descriptionLevel.remove();

    changeDisabledAttributeOnLevelButtons();
    updateLevelMarkup();
}

export default loadLevel;

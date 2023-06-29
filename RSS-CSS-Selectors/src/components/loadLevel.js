import data from '../data';

function loadLevel() {
    const { levels, currentLevel, keyLocalStorage } = data;
    const currentLevelData = levels[currentLevel];
    const headingLevel = document.querySelector('h1');
    const currentAndTotalLevel = document.querySelector('.sidebar__text');
    const levelButtons = document.querySelectorAll('.sidebar__level-btn');
    const activeLevelButton = document.querySelector('.sidebar__level-btn[disabled]');
    const levelPrevButton = document.querySelector('.sidebar__btn--prev');
    const levelNextButton = document.querySelector('.sidebar__btn--next');
    const descriptionLevel = document.querySelector('.sidebar__level-descr');
    const descriptionLevelString = `
        <div class="sidebar__level-descr">
            <p>${currentLevelData.selectorName}</p>
            <p>${currentLevelData.selectorDescription}</p>
        </div>
    `;
    const table = document.querySelector('.table__wrap');
    const code = document.querySelector('.code-block__area--html');

    if (descriptionLevel) descriptionLevel.remove();

    headingLevel.textContent = currentLevelData.title;

    currentAndTotalLevel.textContent = `Level ${currentLevel + 1} of ${levels.length}`;

    activeLevelButton.removeAttribute('disabled');
    levelButtons[currentLevel].setAttribute('disabled', true);

    levelButtons[currentLevel].insertAdjacentHTML('afterend', descriptionLevelString);

    localStorage.setItem(keyLocalStorage, currentLevel);

    if (currentLevel === 0) {
        levelPrevButton.setAttribute('disabled', true);
        levelNextButton.removeAttribute('disabled');
    } else if (currentLevel === levels.length - 1) {
        levelPrevButton.removeAttribute('disabled');
        levelNextButton.setAttribute('disabled', true);
    } else if (currentLevel !== 0 && currentLevel !== levels.length - 1) {
        levelPrevButton.removeAttribute('disabled');
        levelNextButton.removeAttribute('disabled');
    }

    table.innerHTML = currentLevelData.markup;
    code.innerHTML = currentLevelData.markup;

    table.querySelectorAll(currentLevelData.answer).forEach((element) => {
        element.classList.add('animate-pulse');
    });
}

export default loadLevel;

import data from '../data';

function loadLevel() {
    const { levels, currentLevel, keyLS } = data;
    const currentLevelData = levels[currentLevel];
    const headingLevelNode = document.querySelector('h1');
    const currentAndTotalLevelNode = document.querySelector('.sidebar__text');
    const levelButtons = document.querySelectorAll('.sidebar__level-btn');
    const activeLevelButton = document.querySelector('.sidebar__level-btn[disabled]');
    const levelPrevButton = document.querySelector('.sidebar__btn--prev');
    const levelNextButton = document.querySelector('.sidebar__btn--next');
    const descriptionLevelNode = document.querySelector('.sidebar__level-descr');
    const descriptionLevelString = `
        <div class="sidebar__level-descr">
            <p>${currentLevelData.selectorName}</p>
            <p>${currentLevelData.selectorDescription}</p>
        </div>
    `;

    if (descriptionLevelNode) descriptionLevelNode.remove();

    headingLevelNode.textContent = currentLevelData.title;

    currentAndTotalLevelNode.textContent = `Level ${currentLevel + 1} of ${levels.length}`;

    activeLevelButton.removeAttribute('disabled');

    levelButtons[currentLevel].setAttribute('disabled', true);
    levelButtons[currentLevel].insertAdjacentHTML('afterend', descriptionLevelString);

    localStorage.setItem(keyLS, currentLevel);

    if (currentLevel === 0) {
        levelPrevButton.setAttribute('disabled', true);
    } else if (currentLevel === levels.length - 1) {
        levelNextButton.setAttribute('disabled', true);
    } else if (currentLevel !== 0 || currentLevel !== levels.length - 1) {
        levelPrevButton.removeAttribute('disabled');
        levelNextButton.removeAttribute('disabled');
    }
}

export default loadLevel;

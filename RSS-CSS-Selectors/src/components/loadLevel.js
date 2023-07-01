import dataGame from '../dataGame';

function loadLevel() {
    const {
        levels,
        currentLevel,
        keyLocalStorageCurrentLevel,
        keyLocalStorageHistoryAnswers,
        historyAnswers,
    } = dataGame;

    const main = document.querySelector('.main');

    if (currentLevel >= levels.length) {
        main.classList.add('pe-none');

        alert(
            'You won. This was the last level of the game. If you want to continue the game, then either restart your browser or use the sidebar panel.'
        );

        dataGame.currentLevel -= 1;

        return;
    } else {
        main.classList.remove('pe-none');
    }

    const currentLevelData = levels[currentLevel];
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
    const levelPrevButton = document.querySelector('.sidebar__btn--prev');
    const levelNextButton = document.querySelector('.sidebar__btn--next');
    const descriptionLevel = document.querySelector('.sidebar__level-descr');
    const table = document.querySelector('.table__wrap');
    const code = document.querySelector('.code-block__area--html');
    const input = document.querySelector('.code-block__input');

    input.value = '';

    if (descriptionLevel) descriptionLevel.remove();

    headingLevel.textContent = currentLevelData.title;
    currentAndTotalLevel.textContent = `Level ${currentLevel + 1} of ${levels.length}`;

    activeLevelButton.removeAttribute('disabled');
    levelButtons[currentLevel].setAttribute('disabled', true);
    levelButtons[currentLevel].insertAdjacentHTML('afterend', descriptionLevelString);

    localStorage.setItem(keyLocalStorageCurrentLevel, JSON.stringify(currentLevel));
    localStorage.setItem(keyLocalStorageHistoryAnswers, JSON.stringify(historyAnswers));

    if (!Object.keys(historyAnswers).length) {
        levelButtons.forEach((levelButton) => {
            levelButton.classList.remove('success');
            levelButton.classList.remove('with-help');
        });
    } else {
        for (let key in historyAnswers) {
            if ('isHelp' in historyAnswers[key]) {
                levelButtons[key].classList.add('with-help');
            } else {
                levelButtons[key].classList.add('success');
            }
        }
    }

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
}

export default loadLevel;

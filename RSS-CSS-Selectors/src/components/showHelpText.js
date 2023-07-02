import { dataLevels, dataLocalStorage, keyLocalStorage } from '../data';
import addAnimation from './addAnimation';

function showHelpText() {
    const button = document.querySelector('.code-block__help-btn');

    if (!button) return;

    const input = document.querySelector('.code-block__input');

    button.addEventListener('click', () => {
        const { currentLevel, completeLevelsWithHelp } = dataLocalStorage;
        const currentLevelData = dataLevels[currentLevel];

        if (!completeLevelsWithHelp.includes(currentLevel)) {
            completeLevelsWithHelp.push(currentLevel);
        }

        document.querySelector('.sidebar__level-btn[disabled]').classList.add('with-help');

        localStorage.setItem(keyLocalStorage, JSON.stringify(dataLocalStorage));

        input.value = currentLevelData.answer;

        addAnimation([input], 'typing-text');
    });
}

export default showHelpText;

import dataGame from '../dataGame';
import addAnimation from './addAnimation';

function showHelpText() {
    const button = document.querySelector('.code-block__help-btn');

    if (!button) return;

    const input = document.querySelector('.code-block__input');

    button.addEventListener('click', () => {
        const { levels, currentLevel } = dataGame;
        const currentLevelData = levels[currentLevel];

        dataGame.historyAnswers[dataGame.currentLevel] = {
            isHelp: true,
        };

        input.value = currentLevelData.answer;

        addAnimation([input], 'typing-text');
    });
}

export default showHelpText;

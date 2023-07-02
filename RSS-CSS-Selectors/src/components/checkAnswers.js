import { dataLevels, dataLocalStorage, keyLocalStorage } from '../data';
import addAnimation from './addAnimation';
import loadLevel from './loadLevel';

function checkAnswer(node) {
    const { currentLevel, completeLevels } = dataLocalStorage;
    const currentLevelData = dataLevels[currentLevel];
    const table = document.querySelector('.table__wrap');
    const code = document.querySelector('.code-block');
    const correctAnswer = table.querySelectorAll(currentLevelData.answer);
    let correctAnswerString = '';
    let answerInputString = '';
    let answerInput;

    try {
        answerInput = table.querySelectorAll(node.value);
    } catch (error) {
        addAnimation([code], 'animate-shake');

        return;
    }

    correctAnswer.forEach((item) => (correctAnswerString += item.outerHTML));
    answerInput.forEach((item) => (answerInputString += item.outerHTML));

    if (correctAnswer.length === answerInput.length && correctAnswerString === answerInputString) {
        if (!completeLevels.includes(currentLevel)) {
            completeLevels.push(currentLevel);
        }

        document.querySelector('.sidebar__level-btn[disabled]').classList.add('success');

        dataLocalStorage.currentLevel += 1;

        if (dataLocalStorage.currentLevel >= dataLevels.length) {
            dataLocalStorage.currentLevel -= 1;

            alert('This was the last level of the game. Use the menu in the sidebar to go to another the level.');
        }

        localStorage.setItem(keyLocalStorage, JSON.stringify(dataLocalStorage));

        node.value = '';

        addAnimation(correctAnswer, 'animate-fadeout');

        setTimeout(() => {
            loadLevel();
        }, 500);
    } else {
        addAnimation([code], 'animate-shake');
    }
}

export default checkAnswer;

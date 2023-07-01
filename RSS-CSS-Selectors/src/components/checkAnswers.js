import dataGame from '../dataGame';
import addAnimation from './addAnimation';
import loadLevel from './loadLevel';

function checkAnswer(node) {
    const currentLevelData = dataGame.levels[dataGame.currentLevel];
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
        dataGame.historyAnswers[dataGame.currentLevel] = {
            ...dataGame.historyAnswers[dataGame.currentLevel],
            isCorrect: true,
        };

        dataGame.currentLevel += 1;

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

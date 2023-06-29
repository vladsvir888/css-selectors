import data from '../data';
import addAnimation from './addAnimation';
import loadLevel from './loadLevel';

function checkAnswer(node) {
    const currentLevelData = data.levels[data.currentLevel];
    const table = document.querySelector('.table');
    const code = document.querySelector('.code-block');
    let answerInput;

    const correctAnswer = table.querySelector(currentLevelData.answer);

    try {
        answerInput = table.querySelector(node.value);
    } catch (error) {
        addAnimation(code);
    }

    if (answerInput === correctAnswer) {
        data.currentLevel += 1;

        node.value = '';

        loadLevel();
    } else {
        addAnimation(code);
    }
}

export default checkAnswer;

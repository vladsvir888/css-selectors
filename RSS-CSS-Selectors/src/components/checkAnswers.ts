import { dataLevels, dataLocalStorage, keyLocalStorage } from '../data';
import Animation from './animation';
import loadLevel from './loadLevel';
import { AnimationEnum } from '../types';

function updateData() {
    const { currentLevel, completeLevels } = dataLocalStorage;

    if (!completeLevels.includes(currentLevel)) completeLevels.push(currentLevel);

    dataLocalStorage.currentLevel += 1;

    if (dataLocalStorage.currentLevel >= dataLevels.length) {
        dataLocalStorage.currentLevel -= 1;

        alert('This was the last level of the game. Use the menu in the sidebar to go to another the level.');
    }

    localStorage.setItem(keyLocalStorage, JSON.stringify(dataLocalStorage));
}

function checkAnswer(node: HTMLInputElement): void {
    const currentLevelData = dataLevels[dataLocalStorage.currentLevel];
    const table = document.querySelector('.table__wrap');
    const code: NodeListOf<HTMLElement> = document.querySelectorAll('.code-block');
    let correctAnswerString = '';
    let answerInputString = '';
    let answerInput: NodeListOf<HTMLElement>;

    if (!table || !code) return;

    const correctAnswer: NodeListOf<HTMLElement> = table.querySelectorAll(currentLevelData.answer);

    try {
        answerInput = table.querySelectorAll(node.value);
    } catch (error) {
        new Animation().add(code, AnimationEnum.Shake);

        return;
    }

    correctAnswer.forEach((item) => (correctAnswerString += item.outerHTML));
    answerInput.forEach((item) => (answerInputString += item.outerHTML));

    if (correctAnswer.length === answerInput.length && correctAnswerString === answerInputString) {
        updateData();

        document.querySelector('.sidebar__level-btn[disabled]')?.classList.add('success');

        node.value = '';

        new Animation().add(correctAnswer, AnimationEnum.FadeOut);

        setTimeout(() => {
            loadLevel();
        }, 500);
    } else {
        new Animation().add(code, AnimationEnum.Shake);
    }
}

export default checkAnswer;

import { dataLevels, dataLocalStorage } from '../data';
import Animation from './animation';
import loadLevel from './loadLevel';
import { AnimationEnum } from '../types';
import resetControls from './resetControls';
import { CacheKey, cacheUtil } from '../utils/localStorageUtility';

function updateData() {
    const { currentLevel, completeLevels } = dataLocalStorage;

    if (!completeLevels.includes(currentLevel)) completeLevels.push(currentLevel);

    dataLocalStorage.currentLevel += 1;

    if (dataLocalStorage.currentLevel >= dataLevels.length) {
        dataLocalStorage.currentLevel -= 1;

        alert('This was the last level of the game. Use the menu in the sidebar to go to another the level.');
    }

    cacheUtil.set(CacheKey.LevelInfo, dataLocalStorage);
}

function catchInvalidSelector(node: HTMLInputElement, table: HTMLElement): NodeListOf<HTMLElement> | null {
    const code = <NodeListOf<HTMLElement>>document.querySelectorAll('.code-block');

    try {
        const answerInput = <NodeListOf<HTMLElement>>table.querySelectorAll(node.value);

        return answerInput;
    } catch (error) {
        new Animation().add(code, AnimationEnum.Shake);
    }

    return null;
}

function compareAnswers(correctAnswer: NodeListOf<HTMLElement>, answerInput: NodeListOf<HTMLElement>): void {
    const code = <NodeListOf<HTMLElement>>document.querySelectorAll('.code-block');
    let correctAnswerString = '';
    let answerInputString = '';

    correctAnswer.forEach((item) => (correctAnswerString += item.outerHTML));
    answerInput.forEach((item) => (answerInputString += item.outerHTML));

    if (correctAnswer.length === answerInput.length && correctAnswerString === answerInputString) {
        updateData();

        document.querySelector('.sidebar__level-btn[disabled]')?.classList.add('success');

        resetControls();

        new Animation().add(correctAnswer, AnimationEnum.FadeOut);

        setTimeout(() => {
            loadLevel();
        }, 500);
    } else {
        new Animation().add(code, AnimationEnum.Shake);
    }
}

function checkAnswer(node: HTMLInputElement): void {
    const currentLevelData = dataLevels[dataLocalStorage.currentLevel];
    const table = <HTMLElement>document.querySelector('.table__wrap');
    const correctAnswer = <NodeListOf<HTMLElement>>table.querySelectorAll(currentLevelData.answer);
    const answerInput = catchInvalidSelector(node, table);

    if (!answerInput) return;

    compareAnswers(correctAnswer, answerInput);
}

export default checkAnswer;

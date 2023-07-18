import { dataLevels, dataLocalStorage } from '../data';
import Animation from './animation';
import { AnimationEnum } from '../types';
import { CacheKey, cacheUtil } from '../utils/localStorageUtility';

function showHelpText(): void {
    const button = document.querySelector('.code-block__help-btn');
    const inputs = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.code-block__input');

    button?.addEventListener('click', () => {
        const { currentLevel, completeLevelsWithHelp } = dataLocalStorage;
        const currentLevelData = dataLevels[currentLevel];

        if (!completeLevelsWithHelp.includes(currentLevel)) completeLevelsWithHelp.push(currentLevel);

        document.querySelector('.sidebar__level-btn[disabled]')?.classList.add('with-help');

        cacheUtil.set(CacheKey.LevelInfo, dataLocalStorage);

        inputs[0].value = currentLevelData.answer;

        new Animation().add(inputs, AnimationEnum.Typing);
    });
}

export default showHelpText;

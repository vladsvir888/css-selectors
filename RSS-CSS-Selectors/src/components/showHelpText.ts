import { dataLevels, dataLocalStorage, keyLocalStorage } from '../data';
import Animation from './animation';
import { AnimationEnum } from '../types';

function showHelpText(): void {
    const button = document.querySelector('.code-block__help-btn');
    const inputs: NodeListOf<HTMLElement> = document.querySelectorAll('.code-block__input');

    button?.addEventListener('click', () => {
        const { currentLevel, completeLevelsWithHelp } = dataLocalStorage;
        const currentLevelData = dataLevels[currentLevel];

        if (!completeLevelsWithHelp.includes(currentLevel)) {
            completeLevelsWithHelp.push(currentLevel);
        }

        document.querySelector('.sidebar__level-btn[disabled]')?.classList.add('with-help');

        localStorage.setItem(keyLocalStorage, JSON.stringify(dataLocalStorage));

        (<HTMLInputElement>inputs[0]).value = currentLevelData.answer;

        new Animation<NodeListOf<HTMLElement>>().add(inputs, AnimationEnum.Typing);
    });
}

export default showHelpText;

import { dataLocalStorage, keyLocalStorage } from '../data';
import { IDataLocalStorage } from '../types';

function setDataFromLocalStorage(): void {
    const value = localStorage.getItem(keyLocalStorage);

    if (!value) return;

    const data: IDataLocalStorage = JSON.parse(value);
    const levelButtons = document.querySelectorAll('.sidebar__level-btn');
    const { currentLevel, completeLevels, completeLevelsWithHelp } = data;

    dataLocalStorage.currentLevel = currentLevel;
    dataLocalStorage.completeLevels = completeLevels;
    dataLocalStorage.completeLevelsWithHelp = completeLevelsWithHelp;

    levelButtons.forEach((levelButton) => levelButton.classList.remove('success', 'with-help'));

    completeLevels.forEach((item) => levelButtons[item].classList.add('success'));
    completeLevelsWithHelp.forEach((item) => levelButtons[item].classList.add('with-help'));
}

export default setDataFromLocalStorage;

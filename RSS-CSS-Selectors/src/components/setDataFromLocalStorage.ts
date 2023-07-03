import { dataLocalStorage, keyLocalStorage } from '../data';
import { IDataLocalStorage } from '../types';

function setDataFromLocalStorage(): void {
    const value = localStorage.getItem(keyLocalStorage);

    if (!value) return;

    const data: IDataLocalStorage = JSON.parse(value);
    const levelButtons = document.querySelectorAll('.sidebar__level-btn');

    dataLocalStorage.currentLevel = data?.currentLevel ?? 0;
    dataLocalStorage.completeLevels = data?.completeLevels ?? [];
    dataLocalStorage.completeLevelsWithHelp = data?.completeLevelsWithHelp ?? [];

    levelButtons.forEach((levelButton) => {
        levelButton.classList.remove('success');
        levelButton.classList.remove('with-help');
    });

    data?.completeLevels.forEach((item) => levelButtons[item].classList.add('success'));
    data?.completeLevelsWithHelp.forEach((item) => levelButtons[item].classList.add('with-help'));
}

export default setDataFromLocalStorage;

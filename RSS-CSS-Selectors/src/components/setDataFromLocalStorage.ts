import { dataLocalStorage, keyLocalStorage } from '../data';
import { CacheKey, cacheUtil } from '../utils/localStorageUtility';

function setDataFromLocalStorage(): void {
    const value = localStorage.getItem(keyLocalStorage);

    if (!value) return;

    const data = cacheUtil.get(CacheKey.LevelInfo);
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

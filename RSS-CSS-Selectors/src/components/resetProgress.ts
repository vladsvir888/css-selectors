import { dataLocalStorage } from '../data';
import { CacheKey, cacheUtil } from '../utils/localStorageUtility';
import loadLevel from './loadLevel';
import setDataFromLocalStorage from './setDataFromLocalStorage';

function resetProgress(): void {
    const resetButton = document.querySelector('.sidebar__reset');

    resetButton?.addEventListener('click', () => {
        dataLocalStorage.currentLevel = 0;
        dataLocalStorage.completeLevels = [];
        dataLocalStorage.completeLevelsWithHelp = [];

        cacheUtil.set(CacheKey.LevelInfo, dataLocalStorage);

        setDataFromLocalStorage();
        loadLevel();
    });
}

export default resetProgress;

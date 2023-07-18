import { dataLocalStorage } from '../data';
import { CacheKey, cacheUtil } from '../utils/localStorageUtility';
import loadLevel from './loadLevel';

function toggleLevel(): void {
    document.addEventListener('click', (event) => {
        const target = <HTMLElement>event.target;

        if (!target.matches('.sidebar__level-btn, .sidebar__btn')) return;

        if (target.classList.contains('sidebar__level-btn')) {
            const buttons = [...document.querySelectorAll('.sidebar__level-btn')];
            const index = buttons.indexOf(target);

            dataLocalStorage.currentLevel = index;
        }

        if (target.classList.contains('sidebar__btn')) {
            const count = target.classList.contains('sidebar__btn--next') ? 1 : -1;

            dataLocalStorage.currentLevel += count;
        }

        cacheUtil.set(CacheKey.LevelInfo, dataLocalStorage);

        loadLevel();
    });
}

export default toggleLevel;

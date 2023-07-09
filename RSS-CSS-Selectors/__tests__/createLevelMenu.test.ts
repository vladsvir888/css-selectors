import createLevelMenu from '../src/components/createLevelMenu';
import { dataLevels, dataLocalStorage } from '../src/data';

test('it should create level menu', () => {
    document.body.innerHTML = '<ul class="sidebar__levels"></ul>';

    createLevelMenu();

    const levelButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.sidebar__level-btn');
    expect(levelButtons.length).toBe(dataLevels.length);

    levelButtons.forEach((levelButton, index) => {
        expect(levelButton.textContent?.trim()).toBe(`Level ${index + 1}`);
        expect(levelButton.disabled).toBe(index === dataLocalStorage.currentLevel);
    });
});

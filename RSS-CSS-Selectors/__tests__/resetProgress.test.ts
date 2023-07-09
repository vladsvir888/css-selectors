import resetProgress from '../src/components/resetProgress';
import loadLevel from '../src/components/loadLevel';
import setDataFromLocalStorage from '../src/components/setDataFromLocalStorage';
import { keyLocalStorage } from '../src/data';

jest.mock('../src/components/loadLevel.ts');
jest.mock('../src/components/setDataFromLocalStorage.ts');

test('it should reset progress when button clicked', () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
    Object.setPrototypeOf(window.localStorage.setItem, jest.fn());

    document.body.innerHTML = '<button class="sidebar__reset">Reset progress</button>';

    resetProgress();

    const resetButton = <HTMLButtonElement>document.querySelector('.sidebar__reset');
    resetButton.click();

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
        keyLocalStorage,
        JSON.stringify({ currentLevel: 0, completeLevels: [], completeLevelsWithHelp: [] })
    );
    expect(setDataFromLocalStorage).toHaveBeenCalled();
    expect(loadLevel).toHaveBeenCalled();
});

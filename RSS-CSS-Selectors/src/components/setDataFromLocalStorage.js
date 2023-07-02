import { dataLocalStorage, keyLocalStorage } from '../data';

function setDataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(keyLocalStorage));
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

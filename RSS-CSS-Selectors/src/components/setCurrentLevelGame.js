import data from '../data';

function setCurrentLevelGame() {
    data.currentLevel = Number(localStorage.getItem(data.keyLocalStorage));
}

export default setCurrentLevelGame;

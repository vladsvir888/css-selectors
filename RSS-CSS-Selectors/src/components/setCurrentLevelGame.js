import dataGame from '../dataGame';

function setCurrentLevelGame() {
    const currentLevel = JSON.parse(localStorage.getItem(dataGame.keyLocalStorageCurrentLevel));

    if (currentLevel) dataGame.currentLevel = currentLevel;
}

export default setCurrentLevelGame;

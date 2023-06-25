import data from '../data';

function checkLevelInLS() {
    const value = Number(localStorage.getItem(data.keyLS));

    data.currentLevel = value;
}

export default checkLevelInLS;

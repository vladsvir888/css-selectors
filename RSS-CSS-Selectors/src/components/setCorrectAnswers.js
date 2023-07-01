import dataGame from '../dataGame';

function setCorrectAnswers() {
    const answers = JSON.parse(localStorage.getItem(dataGame.keyLocalStorageHistoryAnswers));

    if (answers) dataGame.historyAnswers = answers;
}

export default setCorrectAnswers;

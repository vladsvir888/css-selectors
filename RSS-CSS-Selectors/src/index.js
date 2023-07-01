import setCurrentLevelGame from './components/setCurrentLevelGame';
import createLevelMenu from './components/createLevelMenu';
import loadLevel from './components/loadLevel';
import resetProgress from './components/resetProgress';
import toggleLevel from './components/toggleLevel';
import mouseHoverHandling from './components/mouseHoverHandling';
import inputHandling from './components/inputHandling';
import setCorrectAnswers from './components/setCorrectAnswers';
import showHelpText from './components/showHelpText';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    setCurrentLevelGame();
    setCorrectAnswers();
    createLevelMenu();
    loadLevel();
    toggleLevel();
    resetProgress();
    mouseHoverHandling();
    inputHandling();
    showHelpText();
});

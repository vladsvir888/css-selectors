import createLevelMenu from './components/createLevelMenu';
import setDataFromLocalStorage from './components/setDataFromLocalStorage';
import loadLevel from './components/loadLevel';
import toggleLevel from './components/toggleLevel';
import resetProgress from './components/resetProgress';
import mouseHoverHandling from './components/mouseHoverHandling';
import inputHandling from './components/inputHandling';
import showHelpText from './components/showHelpText';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    createLevelMenu();
    setDataFromLocalStorage();
    loadLevel();
    toggleLevel();
    resetProgress();
    mouseHoverHandling();
    inputHandling();
    showHelpText();
});

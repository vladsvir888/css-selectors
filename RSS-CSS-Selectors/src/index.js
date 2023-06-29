import setCurrentLevelGame from './components/setCurrentLevelGame';
import createLevelMenu from './components/createLevelMenu';
import loadLevel from './components/loadLevel';
import resetProgress from './components/resetProgress';
import toggleLevel from './components/toggleLevel';
import mouseHoverHandling from './components/mouseHoverHandling';
import inputHandling from './components/inputHandling';

import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    setCurrentLevelGame();
    createLevelMenu();
    loadLevel();
    toggleLevel();
    resetProgress();
    mouseHoverHandling();
    inputHandling();
});

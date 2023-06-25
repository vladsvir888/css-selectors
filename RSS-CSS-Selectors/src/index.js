import checkLevelInLS from './components/checkLevelInLS';
import createLevelMenu from './components/createLevelMenu';
import loadLevel from './components/loadLevel';
import resetProgress from './components/resetProgress';
import toggleLevel from './components/toggleLevel';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    checkLevelInLS();
    createLevelMenu();
    loadLevel();
    toggleLevel();
    resetProgress();
});

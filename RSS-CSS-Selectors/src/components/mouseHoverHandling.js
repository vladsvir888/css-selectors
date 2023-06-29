import data from '../data';

function mouseHoverHandling() {
    const table = document.querySelector('.table__wrap');
    const code = document.querySelector('.code-block__area--html');

    function handleTableMouseOver(event) {
        const { target } = event;

        if (target === table) return;

        target.classList.add('table-hover');

        const clone = table.cloneNode(true);

        code.innerHTML = clone.innerHTML;
    }

    function handleCodeMouseOver(event) {
        const { target } = event;

        if (target === code) return;

        target.classList.add('code-hover');

        const clone = code.cloneNode(true);

        table.innerHTML = clone.innerHTML;
    }

    function handleCodeAndTableMouseOut() {
        const { levels, currentLevel } = data;
        const currentLevelData = levels[currentLevel];

        table.innerHTML = currentLevelData.markup;
        code.innerHTML = currentLevelData.markup;

        table.querySelector(currentLevelData.answer).classList.add('animate-pulse');
    }

    table.addEventListener('mouseover', handleTableMouseOver);
    table.addEventListener('mouseout', handleCodeAndTableMouseOut);

    code.addEventListener('mouseover', handleCodeMouseOver);
    code.addEventListener('mouseout', handleCodeAndTableMouseOut);
}

export default mouseHoverHandling;

import { dataLevels, dataLocalStorage } from '../data';

function mouseHoverHandling(): void {
    const table = document.querySelector('.table__wrap');
    const code = document.querySelector('.code-block__area--html');

    function handleTableMouseOver(event: Event): void {
        const target = <HTMLElement>event.target;

        if (target === table || !table || !code) return;

        target.dataset.title = target.outerHTML;

        target.classList.add('table-hover');

        const clone = <HTMLElement>table.cloneNode(true);

        code.innerHTML = clone.innerHTML;
    }

    function handleCodeMouseOver(event: Event): void {
        const target = <HTMLElement>event.target;

        if (target === code || !table || !code) return;

        target.classList.add('code-hover');

        const clone = <HTMLElement>code.cloneNode(true);

        table.innerHTML = clone.innerHTML;

        const codeHoverElement = <HTMLElement>document.querySelector('.table .code-hover');

        codeHoverElement.dataset.title = target.outerHTML;
    }

    function handleCodeAndTableMouseOut(): void {
        const currentLevelData = dataLevels[dataLocalStorage.currentLevel];

        if (!currentLevelData || !table || !code) return;

        table.innerHTML = currentLevelData.markup;
        code.innerHTML = currentLevelData.markup;
    }

    table?.addEventListener('mouseover', handleTableMouseOver);
    table?.addEventListener('mouseout', handleCodeAndTableMouseOut);

    code?.addEventListener('mouseover', handleCodeMouseOver);
    code?.addEventListener('mouseout', handleCodeAndTableMouseOut);
}

export default mouseHoverHandling;

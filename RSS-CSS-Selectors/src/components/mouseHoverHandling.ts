import { dataLevels, dataLocalStorage } from '../data';

function mouseHoverHandling(): void {
    const table = <HTMLElement>document.querySelector('.table__wrap');
    const code = <HTMLElement>document.querySelector('.code-block__area--html');

    function handleTableMouseOver(event: Event): void {
        const target = <HTMLElement>event.target;

        if (target === table) return;

        target.dataset.title = target.outerHTML;

        target.classList.add('table-hover');

        const clone = <HTMLElement>table.cloneNode(true);

        code.innerHTML = clone.innerHTML;
    }

    function handleCodeMouseOver(event: Event): void {
        const target = <HTMLElement>event.target;

        if (target === code) return;

        target.classList.add('code-hover');

        const clone = <HTMLElement>code.cloneNode(true);

        table.innerHTML = clone.innerHTML;

        const codeHoverElement = <HTMLElement>document.querySelector('.table .code-hover');

        codeHoverElement.dataset.title = target.outerHTML;
    }

    function handleCodeAndTableMouseOut(): void {
        const currentLevelData = dataLevels[dataLocalStorage.currentLevel];

        if (!currentLevelData) return;

        table.innerHTML = currentLevelData.markup;
        code.innerHTML = currentLevelData.markup;
    }

    table?.addEventListener('mouseover', handleTableMouseOver);
    table?.addEventListener('mouseout', handleCodeAndTableMouseOut);

    code?.addEventListener('mouseover', handleCodeMouseOver);
    code?.addEventListener('mouseout', handleCodeAndTableMouseOut);
}

export default mouseHoverHandling;

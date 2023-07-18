import { dataLevels, dataLocalStorage } from '../data';

function mouseHoverHandling(): void {
    const table = <HTMLElement>document.querySelector('.table__wrap');
    const code = <HTMLElement>document.querySelector('.code-block__area--html');

    function handleCodeAndTableMouseOver(event: Event, type: string): void {
        const target = <HTMLElement>event.target;

        switch (type) {
            case 'table': {
                if (target === table) return;

                target.classList.add('table-hover');

                const clone = <HTMLElement>table.cloneNode(true);

                code.innerHTML = clone.innerHTML;

                target.dataset.title = target.outerHTML;

                break;
            }
            case 'code': {
                if (target === code) return;

                target.classList.add('code-hover');

                const clone = <HTMLElement>code.cloneNode(true);

                table.innerHTML = clone.innerHTML;

                const codeHoverElement = <HTMLElement>document.querySelector('.table .code-hover');

                codeHoverElement.dataset.title = target.outerHTML;

                break;
            }
            default:
                break;
        }
    }

    function handleCodeAndTableMouseOut(): void {
        const currentLevelData = dataLevels[dataLocalStorage.currentLevel];

        table.innerHTML = currentLevelData.markup;
        code.innerHTML = currentLevelData.markup;
    }

    table?.addEventListener('mouseover', (event) => handleCodeAndTableMouseOver(event, 'table'));
    table?.addEventListener('mouseout', handleCodeAndTableMouseOut);
    code?.addEventListener('mouseover', (event) => handleCodeAndTableMouseOver(event, 'code'));
    code?.addEventListener('mouseout', handleCodeAndTableMouseOut);
}

export default mouseHoverHandling;

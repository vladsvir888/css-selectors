import checkAnswer from './checkAnswers';

function inputHandling(): void {
    const button = document.querySelector('.code-block__btn');

    if (!button) return;

    const input = document.querySelector('.code-block__input');

    button.addEventListener('click', () => checkAnswer(<HTMLInputElement>input));

    document.addEventListener('keydown', (event) => {
        const target = <HTMLElement>event.target;

        if (event.code !== 'Enter' || target?.tagName.toLowerCase() !== 'input') return;

        checkAnswer(<HTMLInputElement>target);
    });
}

export default inputHandling;

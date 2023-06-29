import checkAnswer from './checkAnswers';

function inputHandling() {
    const button = document.querySelector('.code-block__btn');

    if (!button) return;

    button.addEventListener('click', () => {
        const input = button.previousElementSibling;

        checkAnswer(input);
    });

    document.addEventListener('keydown', (event) => {
        const { code, target } = event;

        if (code !== 'Enter' || target.tagName.toLowerCase() !== 'input') return;

        checkAnswer(target);
    });
}

export default inputHandling;

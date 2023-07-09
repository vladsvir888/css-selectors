import checkAnswer from '../src/components/checkAnswers';
import inputHandling from '../src/components/inputHandling';

jest.mock('../src/components/checkAnswers.ts');

describe('inputHandling', () => {
    document.body.innerHTML = `
        <input class="code-block__input">
        <button class="code-block__btn">Enter</button>
    `;

    test('it should check answer when button clicked', () => {
        inputHandling();

        const input = <HTMLInputElement>document.querySelector('.code-block__input');
        const button = <HTMLButtonElement>document.querySelector('.code-block__btn');
        button.click();

        expect(checkAnswer).toHaveBeenCalledWith(input);
    });

    test('it should check answer when enter key pressed', () => {
        inputHandling();

        const input = <HTMLInputElement>document.querySelector('.code-block__input');

        const event = new KeyboardEvent('keydown', { code: 'Enter' });
        input.dispatchEvent(event);

        expect(checkAnswer).toHaveBeenCalledWith(input);
    });
});

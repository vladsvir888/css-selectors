function resetControls() {
    const input = <HTMLInputElement>document.querySelector('.code-block__input');

    if (!input) return;

    input.value = '';
}

export default resetControls;

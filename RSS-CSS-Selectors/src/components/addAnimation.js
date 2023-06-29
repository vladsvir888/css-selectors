function addAnimation(node) {
    node.classList.add('animate-shake');

    node.addEventListener('animationend', () => {
        node.classList.remove('animate-shake');
    });
}

export default addAnimation;

function addAnimation(nodes: NodeListOf<HTMLElement>, animateClass: string): void {
    nodes.forEach((node) => {
        node.classList.add(animateClass);

        node.addEventListener('animationend', () => {
            node.classList.remove(animateClass);
        });
    });
}

export default addAnimation;

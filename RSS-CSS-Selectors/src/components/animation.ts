import { AnimationClassesType } from '../types';

class Animation<T extends NodeListOf<HTMLElement>> {
    public add(nodes: T, animateClass: AnimationClassesType): void {
        console.log(nodes);
        nodes.forEach((node) => {
            node.classList.add(animateClass);

            node.addEventListener('animationend', () => {
                node.classList.remove(animateClass);
            });
        });
    }
}

export default Animation;

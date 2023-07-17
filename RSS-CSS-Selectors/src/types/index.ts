export interface IDataLocalStorage {
    currentLevel: number;
    completeLevels: number[];
    completeLevelsWithHelp: number[];
}

export interface IDataLevel {
    title: string;
    selectorName: string;
    selectorDescription: string;
    markup: string;
    answer: string;
}

export interface ILoadLevelElements {
    headingLevel: HTMLHeadingElement | null;
    currentAndTotalLevel: HTMLElement | null;
    levelButtons: NodeListOf<HTMLButtonElement>;
    activeLevelButton: HTMLButtonElement | null;
    levelPreviousButton: HTMLButtonElement | null;
    levelNextButton: HTMLButtonElement | null;
    descriptionLevel: HTMLElement | null;
    table: HTMLElement | null;
    code: HTMLElement | null;
}

export type AnimationClassesType = 'animate-shake' | 'animate-fadeout' | 'typing-text';

export enum AnimationEnum {
    Shake = 'animate-shake',
    FadeOut = 'animate-fadeout',
    Typing = 'typing-text',
}

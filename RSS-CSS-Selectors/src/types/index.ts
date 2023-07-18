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

export type AnimationClassesType = 'animate-shake' | 'animate-fadeout' | 'typing-text';

export enum AnimationEnum {
    Shake = 'animate-shake',
    FadeOut = 'animate-fadeout',
    Typing = 'typing-text',
}

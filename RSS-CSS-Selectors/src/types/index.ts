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

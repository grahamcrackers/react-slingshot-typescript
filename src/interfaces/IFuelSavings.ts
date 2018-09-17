import { ISavings } from './ISavings';

export interface IFuelSavings {
    newMpg: string,
    tradeMpg: string,
    newPpg: string,
    tradePpg: string,
    milesDriven: string,
    milesDrivenTimeframe: string,
    displayResult: boolean,
    dateModified: string,
    necessaryDataIsProvidedToCalculateSavings: boolean,
    savings: ISavings
} 
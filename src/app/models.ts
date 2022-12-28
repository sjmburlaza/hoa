export interface ArchDataModel {
    id: number,
    name: string,
    yearBuilt: string,
    style: string,
    buildingType: string,
    scale: string,
    location: string,
    continent: string,
    description: string,
    imageURL: string,
    codename: string,
    color: string
}

export enum Category {
    ALPHABETICAL,
    CHRONOLOGICAL,
    LOCATION,
    PROGRAMMATIC,
    STYLE
}
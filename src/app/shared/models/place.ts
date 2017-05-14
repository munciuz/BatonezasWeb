export interface IPlace {
    id: number;
    gId: string;
    name: string;
    address: string;
    isValid: boolean;
    lat: string;
    lng: string;
    createdByUser: string;
    createdDateTime: Date;
}
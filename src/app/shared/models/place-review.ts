import { IPlace } from "./place";

export interface IPlaceReview {
    id: number;
    review: string;
    rating: number;
    imageUri: string;
    place: IPlace;
}
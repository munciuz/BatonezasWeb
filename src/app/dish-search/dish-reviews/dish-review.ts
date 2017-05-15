import { IPlace } from "../../shared/models/place";

export interface IDishReview {
    id: number;
    dishId: number;
    dishName: string;
    tagIdList: number[];
    tags: any[];
    review: string;
    rating: number;
    imageUri: string;
    place: IPlace;
}
export interface IGroupedDishReviewListItem {
    dishId: number;
    dishName: string;
    placeId: number;
    placeName: string;
    gId: string;
    ratingAverage: number;
    reviewCount: number;
    imageUri: string;
    tagsIds: number[];
    lat: number;
    lng: number;
    isVegetarian: boolean;
}
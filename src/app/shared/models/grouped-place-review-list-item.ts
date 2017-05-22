export interface IGroupedPlaceReviewListItem {
    placeId: number;
    placeName: string;
    gId: string;
    ratingAverage: number;
    reviewCount: number;
    imageUri: string;
    lat: number;
    lng: number;
    placeTypeIds: number[];
}
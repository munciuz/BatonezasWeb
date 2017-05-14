import { IGroupedDishReviewListItem } from "./grouped-dish-review-list-item"
import { ITagListItem } from "../../tags/tag-list/tag-list-item";
import { IDishListItem } from "../../dishes/dish-list/dish-list-item";

export interface IDishSearchPageModel {
    dishReviewList: IGroupedDishReviewListItem[],
    tagList: ITagListItem[],
    dishList: IDishListItem[] 
}
import { Pipe, PipeTransform } from "@angular/core";
import { IGroupedDishReviewListItem } from "../../shared/models/grouped-dish-review-list-item";

@Pipe({
    name: 'dishSearchPipe'
})

export class DishSearchFilterPipe implements PipeTransform {

    transform(value: IGroupedDishReviewListItem[], filterBy: string): IGroupedDishReviewListItem[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        if (filterBy !== null) {
            value = value.filter((dishTypeItem: IGroupedDishReviewListItem) =>
                dishTypeItem.dishName.toLocaleLowerCase().indexOf(filterBy) !== -1)
        }
        
        return value;
    }
}
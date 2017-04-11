import { Pipe, PipeTransform } from "@angular/core";
import { IDishTypeListItem } from "../shared/interfaces/dish-type/dish-type-list-item";

@Pipe({
    name: 'dishTypeListPipe'
})

export class DishTypeListFilterPipe implements PipeTransform {

    transform(value: IDishTypeListItem[], filterBy: string): IDishTypeListItem[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy
            ? value.filter((dishTypeItem: IDishTypeListItem) =>
                dishTypeItem.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
            : value;
    }
}
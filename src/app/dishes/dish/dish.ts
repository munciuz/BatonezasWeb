import { ITagListItem } from "../../tags/tag-list/tag-list-item";

export interface IDish {
    id: number;
    name: string;
    selectedTags: ITagListItem[];
    allTags: ITagListItem[];
    isValid: boolean;
}
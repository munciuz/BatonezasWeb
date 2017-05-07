import { ITag } from "../../tags/tag/tag";

export interface IDish {
    id: number;
    name: string;
    selectedTags: ITag[];
    allTags: ITag[];
    isValid: boolean;
}
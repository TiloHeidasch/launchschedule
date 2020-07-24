import { TypeFilterItemType } from './type-filter-item-type';

export class TypeFilterItem {
    type: TypeFilterItemType;
    options: { value: number, name: string }[];
}
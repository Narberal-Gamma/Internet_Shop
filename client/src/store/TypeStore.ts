import { makeAutoObservable } from "mobx";
import { IType } from "../types/type";

export default class TypeStore {
    _types: IType[] = [
        { id: 1, name: 'Холодильник' },
        { id: 2, name: 'Компютер' },
        { id: 3, name: 'Стиралка' },
        { id: 4, name: 'Телефон' },
    ];
    _selectedType: IType = {} as IType

    constructor() {
        makeAutoObservable(this)
    }

    setTypes(types: IType[]) {
        this._types = types
    }
    setSelectedType(type: IType) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }
    get selectedType() {
        return this._selectedType
    }
}

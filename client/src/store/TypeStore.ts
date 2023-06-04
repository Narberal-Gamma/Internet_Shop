import { makeAutoObservable } from "mobx";
import { IType } from "../types/type";

export default class TypeStore {
    _types: IType[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    setTypes (types: IType[]) {
        this._types = types 
    }

    get types(){
        return this._types
    }
}

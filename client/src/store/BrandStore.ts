import { makeAutoObservable } from "mobx";
import { IBrand } from "../types/brand";

export default class BrandStore {
    _brands: IBrand[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    setBrands (brands: IBrand[]) {
        this._brands = brands 
    }

    get brands(){
        return this._brands
    }
}

import { makeAutoObservable } from "mobx";
import { IBrand } from "../types/brand";

export default class BrandStore {
    _brands: IBrand[] = [];
    _selectedBrand: IBrand = {} as IBrand

    constructor() {
        makeAutoObservable(this)
    }

    setBrands(brands: IBrand[]) {
        this._brands = brands
    }
    setSelectedBrand(brand: IBrand) {
        this._selectedBrand = brand
    }

    get brands() {
        return this._brands
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}

import { makeAutoObservable } from "mobx";
import { IDevice } from "../types/device";

export default class DeviceStore {
    _devices: IDevice[] = [];
    _page: number = 1;
    _totalCount: number = 0;
    _limit: number = 3;

    constructor() {
        makeAutoObservable(this)
    }

    setDevices (devices: IDevice[]) {
        this._devices = devices 
    }
    setPage (page: number) {
        this._page = page 
    }
    setTotalCount (count: number) {
        this._totalCount = count 
    }

    get devices(){
        return this._devices
    } 
    get page(){
        return this._page
    }
    get totalCount(){
        return this._totalCount
    }
    get limit(){
        return this._limit
    }
}

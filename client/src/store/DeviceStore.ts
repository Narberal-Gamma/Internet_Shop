import { makeAutoObservable } from "mobx";
import { IDevice } from "../types/device";

export default class DeviceStore {
    _devices: IDevice[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    setDevices (devices: IDevice[]) {
        this._devices = devices 
    }

    get devices(){
        return this._devices
    }
}

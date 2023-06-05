import { makeAutoObservable } from "mobx";
import { IDevice } from "../types/device";

export default class DeviceStore {
    _devices: IDevice[] = [
        {id: 1, name: 'item 1', price: 1000, rating: 0, img: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'},
        {id: 2, name: 'item 2', price: 2000, rating: 0, img: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'},
        {id: 3, name: 'item 3', price: 3000, rating: 0, img: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'},
        {id: 4, name: 'item 4', price: 4000, rating: 0, img: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'},
        {id: 5, name: 'item 5', price: 5000, rating: 0, img: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'},
        {id: 6, name: 'item 6', price: 6000, rating: 0, img: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'},
    ];

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

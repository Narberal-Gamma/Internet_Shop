import { IDeviceInfo } from "./deviceInfo";

export interface IDevice {
    id: number,
    name: string,
    price: number,
    rating?: number,
    img: File,
    typeId?: string,
    brandId?: string,
    info?: IDeviceInfo[]
}
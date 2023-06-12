import { IDevice } from "./device"
import { IUserInfo } from "./user"

export interface IBasketInfo {
    id: number,
    userId: number,
    createdAt?: string,
    updatedAt?: string
}

export interface IAxiosUserResponse {
    basket: IBasketInfo,
    user: IUserInfo,
    token: string
}

export interface IAxiosDeviceResponse {
    count: number,
    rows: IDevice[]
}


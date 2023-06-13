import { $host, $authHost } from '.'
import { IAxiosDeviceResponse } from '../types/axios'
import { IDevice } from '../types/device'

export const createDevice = async (device: any): Promise<IDevice> => {
    const { data } = await $authHost.post<IDevice>('/api/device/', device) 
    return data
}

export const fetchDevices = async (): Promise<IAxiosDeviceResponse> => {
    const { data } = await $host.get<IAxiosDeviceResponse>('/api/device/')
    return data
}

export const fetchDeviceById = async (id: string | undefined): Promise<IDevice> => {
    const { data } = await $host.get<IDevice>(`/api/device/${id}`)
    return data
}
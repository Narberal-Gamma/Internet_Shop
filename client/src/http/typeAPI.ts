import { $host, $authHost } from '.'
import { IType } from '../types/type'

export const createType = async (name: IType): Promise<IType> => {
    const { data } = await $authHost.post<IType>('/api/type/', name) 
    return data
}

export const fetchTypes = async (): Promise<IType[]> => {
    const { data } = await $host.get<IType[]>('/api/type/')
    return data
}
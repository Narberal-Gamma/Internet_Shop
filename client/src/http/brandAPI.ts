import { $host, $authHost } from '.'
import { IBrand } from '../types/brand'

export const createBrand = async (name: string): Promise<IBrand> => {
    const { data } = await $authHost.post<IBrand>('/api/brand/', name) 
    return data
}

export const fetchBrands = async (): Promise<IBrand[]> => {
    const { data } = await $host.get<IBrand[]>('/api/brand/')
    return data
}
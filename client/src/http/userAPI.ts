import { $host, $authHost } from '.'
import jwt_decode from 'jwt-decode'
import { IAxiosUserResponse } from '../types/axios'
import { IUserInfo } from '../types/user'

export const registration = async (email: string, password: string): Promise<IUserInfo> => {
    const { data } = await $host.post<IAxiosUserResponse>('/api/user/registration', { email, password, role: 'ADMIN' })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token) as IUserInfo
}

export const login = async (email: string, password: string): Promise<IUserInfo> => {
    const { data } = await $host.post<IAxiosUserResponse>('/api/user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token) as IUserInfo
}

export const checkAuth = async () => {
    const { data } = await $authHost.get('/api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token) as IUserInfo
}
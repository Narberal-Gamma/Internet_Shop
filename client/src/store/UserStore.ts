import { makeAutoObservable } from "mobx";
import { IUserInfo } from "../types/user";

export default class UserStore {
    _isAuth: boolean = false;
    _user = {} as IUserInfo

    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth(auth: boolean) {
        this._isAuth = auth
    }
    setUser (user: IUserInfo) {
        this._user = user 
    }

    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}

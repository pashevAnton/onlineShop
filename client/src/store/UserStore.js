import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user = {}
        this._basket = []
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._isAuth = user
    }

    setBasket(basket){
        this._basket.push(basket)
    }

    get isAuth(){
        return this._isAuth
    }

    get basket(){
        return this._basket
    }

    get user(){
        return this._user
    }

}
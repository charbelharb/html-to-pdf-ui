import {IHtmlToPdfUserModel} from "../interfaces/IHtmlToPdfUserModel";
import {storageKeys, storageService} from "./storage";


const login = (user: IHtmlToPdfUserModel) => {
    storageService.setItem('user', JSON.stringify(user));
}

const logout = () => {
    if (typeof window !== 'undefined') {
        storageService.removeItem(storageKeys.user)
    }
}

const getUser = (): IHtmlToPdfUserModel | undefined => {
    if (typeof window !== 'undefined') {
        return storageService.getItem<IHtmlToPdfUserModel>(storageKeys.user)
    }
}

export const authenticationService = {
    login,
    logout,
    getUser,
};
const setItem = <T>( key: string,item: T): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key,JSON.stringify(item))
    }
}

const getItem = <T>(key: string) : T | undefined => {
    let item: undefined;
    if (typeof window !== 'undefined') {
        let localData = localStorage.getItem(key)
        if(localData)
            item = JSON.parse(localData)
    }
    return item;
}

const removeItem = (key: string) => {
    if (typeof window !== 'undefined')
        localStorage.removeItem(key)
}

export const storageService = {
    setItem,getItem,removeItem
}

export const storageKeys = {
    user: "user"
}
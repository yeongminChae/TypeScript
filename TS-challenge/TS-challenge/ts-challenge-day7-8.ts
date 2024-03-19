interface LocalStorageAPI<T> {
    [key:string]: T;
}

class SStorage<T> {
    private localStorageAPI: LocalStorageAPI<T> = {}

    getItem(key: string): T | null {
        return this.localStorageAPI[key] ?? null;
    }

    setItem(key: string, value: T): void {
        this.localStorageAPI[key] = value
    }

    removeItem(key: string): void {
        delete this.localStorageAPI[key]
    }

    clear(): void {
        for (const i of Object.keys(this.localStorageAPI)) {
            delete this.localStorageAPI[i]
        }
    }

    showAll(): void {
        for (const i of Object.keys(this.localStorageAPI)) {
            console.log(`${i} : ${this.localStorageAPI[i]} `)
        }
    }
}

const sStorage = new SStorage()
sStorage.setItem('key1', 'my Name is key1')
sStorage.setItem('key2', 'my Name is kehg2')
sStorage.setItem('key3', 'my Name is key3')
sStorage.setItem('ke4', 'my Name is key34')
sStorage.setItem('111', 'my Name is key34')

// sStorage.showAll()
// console.log('-----------')
// console.log(sStorage.getItem('key1'))
// console.log('-----------')
// sStorage.removeItem('111')
// sStorage.showAll()
// console.log('-----------')
// sStorage.clear()
// sStorage.showAll()
// console.log('-----끝-----')

interface IOptions {
    maximumAge?: number
    timeOut?: number
    enableHighAccuracy?: boolean
}

interface ResultOfCallBack {
    successCallback: () => void

    errorCallback: () => void

    options: IOptions
}

interface GeolocationAPI {
    getCurrentPosition(
        successfn: ResultOfCallBack['successCallback']
    ): void 

    getCurrentPosition(
        successfn: ResultOfCallBack['successCallback'], errorfn:  ResultOfCallBack['errorCallback']
    ): void 

    getCurrentPosition(
        successfn: ResultOfCallBack['successCallback'], errorfn:  ResultOfCallBack['errorCallback'], optionsObj: ResultOfCallBack['options']
    ): void 

    watchPosition(
        successfn: ResultOfCallBack['successCallback']
    ): number | void

    watchPosition(
        successfn: ResultOfCallBack['successCallback'], errorfn:  ResultOfCallBack['errorCallback']
    ): number | void

    watchPosition(
        successfn: ResultOfCallBack['successCallback'], errorfn:  ResultOfCallBack['errorCallback'], optionsObj: ResultOfCallBack['options']
    ): number | void
}

class GGeolocation implements GeolocationAPI {
    private id: number | undefined = undefined
    
    getCurrentPosition(
        successFn: ResultOfCallBack['successCallback'], errorFn?:  ResultOfCallBack['errorCallback'], optionsObj?: ResultOfCallBack['options']
    ): void {
        navigator.geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
    }

    
    watchPosition(
        successFn: ResultOfCallBack['successCallback'], errorFn?:  ResultOfCallBack['errorCallback'], optionsObj?: ResultOfCallBack['options']
    ): number {
        this.id = navigator.geolocation.watchPosition(successFn, errorFn, optionsObj);
        return this.id
    } 
    
    clearWatch(id: number): void {
        navigator.geolocation.clearWatch(id)
        this.id = undefined;
    }
}

const gGeolocation = new GGeolocation();

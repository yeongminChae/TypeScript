// LocalStorage Interface
abstract class LocalStorage<T> {
  protected items: Items<T>;
  constructor() {
    this.items = {};
  }
  abstract length(): number;
  abstract key(index: number): T;
  abstract getItem(key: string): T;
  abstract setItem(key: string, value: T): void;
  abstract removeItem(key: string): void;
  abstract clear(): void;
}
interface Items<T> {
  [key: string]: T;
}
class SuperStorage extends LocalStorage<string> {
  constructor() {
    super();
  }
  public key(index: number) {
    return Object.keys(this.items)[index];
  }
  public length() {
    return Object.keys(this.items).length;
  }
  public getItem(key: string) {
    return this.items[key];
  }
  public setItem(key: string, value: string) {
    this.items[key] = value;
  }
  public removeItem(key: string) {
    delete this.items[key];
  }
  public clear() {
    this.items = {};
  }
}

// Geolocation Interface
type GeolocationCoords = {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: number;
  speed: number;
};
type Position = {
  coords: GeolocationCoords;
};
type GeoError = {
  code: number;
  message: string;
};
type SuccessFunction = (position: Position) => void;
type ErrorFunction = (error: GeoError) => void;
type GeoOptions = {
  maximumAge: number;
  timeout: number;
  enableHighAccuracy: boolean;
};

type GetCurrentPosition = {
  (success: SuccessFunction): void;
  (success: SuccessFunction, error: ErrorFunction): void;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): void;
};

type WatchCurrentPosition = {
  (success: SuccessFunction): number;
  (success: SuccessFunction, error: ErrorFunction): number;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): number;
};

interface GeolocationAPI {
  getCurrentPosition: GetCurrentPosition;
  watchPosition: WatchCurrentPosition;
  clearWatch: (id: number) => void;
}

class Geolocator implements GeolocationAPI {
  getCurrentPosition: GetCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return; // Implementation goes here :)
  };
  watchPosition: WatchCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return 1; // Implementation goes here :)
  };
  clearWatch = (id: number) => {};
}

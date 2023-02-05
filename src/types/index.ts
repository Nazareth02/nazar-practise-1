export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}
export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface UserGeo {
  lat: string;
  lng: string;
}
export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeo;
}
export type UserGeoPreview = Pick<UserAddress, "geo">;

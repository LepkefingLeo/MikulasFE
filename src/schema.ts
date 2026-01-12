export interface Child {
  id: number;
  name: string;
  address: string;
  country: string;
  wasGoodOrNot: boolean;
}

export interface Toy {
  id: number;
  name: string;
  material: string;
  weight: number;
}

export interface Connection {
  id: number;
  childId: number;
  toyId: number;
}

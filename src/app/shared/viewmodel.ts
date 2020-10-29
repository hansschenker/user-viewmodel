export interface Item {
  id: number;
  name: string;
}

// export interface SearchItem<T> {
//   fieldAndValue: [keyof T, string];
// }
export interface Viewmodel<T> {
  items: T[];
  searchItem?: T;
  searchItems?: T[];
  selectedItem?: T;
}


export type VmFn<T> = (vm: Viewmodel<T>) => Viewmodel<T>;

export type TypeProps<T> = { [key in keyof T]: T[key] };
export const propof = <T>(name: keyof T) => name;


import { createContext } from 'react';
interface Store {
    genres: any[];
    countries: any[];
  }

export const StoreContext = createContext<Store | null>(null);

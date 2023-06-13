import { makeAutoObservable, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { useMemo } from "react";
import { Movies } from "@/interfaces/movie";
import { toJS } from "mobx";

interface Filter {
  name: string;
  id: string;
  nameRu: string;
}


interface SelectedFilters {
  genres: Filter[];
  countries: Filter[];
  actors: Filter[];
  directors: Filter[];
  minRating:Filter[]
  numRatings:Filter[];
  order:Filter[];
  page:Filter[];
}

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

class SSRStore {
  rootStore;
  movies: Movies = { count: 0, rows: [] };

  drama: Movies = { count: 0, rows: [] };
  comedy: Movies = { count: 0, rows: [] };

  sortTypes: Filter[] = [];

  genres: Filter[] = [];
  countries: Filter[] = [];

  movie: any = [];
  similar: any = [];
  comments: any = [];
  persons: any = [];
  person: any = [];

  selectedFilters: SelectedFilters = {
    genres: [],
    countries: [],
    actors: [],
    directors: [],
    minRating: [],
    numRatings: [],
    order: [],
    page: [],
  };

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setMovies(newData, propertyName, pagination = false) {
    runInAction(() => {
      if (pagination) {
        this[propertyName].count = newData.count;
        this[propertyName].rows = [...this[propertyName].rows, ...newData.rows];
      } else {
        this[propertyName] = newData;
      }
    });
  }

  hydrate(data) {
    if (!data) return;

    runInAction(() => {
      Object.keys(data).forEach((key) => {
        this[key] = toJS(data[key]);
      });
    });
  }
}

let store;
export function initializeStore(initialData: any = null, rootStore) {
  //const _store = store ?? /* new SSRStore(rootStore); */ rootStore.ssrStore

  // console.log('initialData', initialData.genres)

  const _store = rootStore.ssrStore;

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (isServer) return _store;
  if (!store) store = _store;

  return _store;
}

export function useStore(initialState = null, rootStore) {
  const store = useMemo(
    () => initializeStore(initialState, rootStore),
    [initialState, rootStore]
  );
  return store;
}

export { SSRStore };

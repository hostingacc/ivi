import { SSRStore } from './ssrStore';
import { MoviesStore } from './moviesStore';

class RootStore {
  ssrStore: any;
  moviesStore: any;

  constructor() {
    this.ssrStore =  new SSRStore(this);
    this.moviesStore = new MoviesStore(this);
  }


}

export const rootStore = new RootStore();
import { makeAutoObservable, runInAction } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Movies } from '@/components/interfaces/movie';
import { toJS } from 'mobx';

interface Filter {
    name: string;
    id: string;
    nameRu: string;
  }

const isServer = typeof window === 'undefined';
enableStaticRendering(isServer);



class SSRStore {
    rootStore
    movies: Movies = {count: 0 , rows: []};

    /* Фильмы на главной, по идее, жанры могут меняться, поэтому не стал их называть comedyMovie, dramaMovie.. */
    moviesWithGenre1: Movies = { count: 0, rows: [] };
    moviesWithGenre2: Movies = { count: 0, rows: [] };

    genres: Filter[] = [];
    countries: Filter[] = [];
    
    movie:any=[]
    videos:any=[]
    comments:any=[]
    persons:any=[]


  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setVideos(videos) {
    this.videos = [...videos];
  }
  setComments(comments) {
 
    this.comments = [...comments];
   
  }
  setPersons(persons) {
    this.persons = [...persons];
  }
  setMovie(movie) {
    this.movie = movie;
  }


  setGenres(genres) {
    runInAction(() => {
    this.genres = [...genres];
});
  }
  setCountries(countries) {
    runInAction(() => {
    this.countries = [...countries];
});
  }

  setMovies(newData, propertyName, pagination = false) {

/*     console.log('trigger')

    console.log(newMovies) */
    runInAction(() => {
        if(pagination){
            this[propertyName].count = newData.count;
            this[propertyName].rows = [...this[propertyName].rows, ...newData.rows];
        }else{
            this[propertyName] = newData;
        }
  

       /*  console.log(this.movies) */
 /*        this[propertyName].count = newMovies.count;
        this[propertyName].rows = [...this[propertyName].rows, ...newMovies.rows]; */
       /*  this[propertyName] = [...newMovies]; */
    });

  
  }



  hydrate(data) {
    if (!data) return;

  /*   console.log(data) */

    this.genres = data.genres;
    this.movies = data.movies;
    this.countries = data.countries;

/*     console.log(toJS(this.movies)) */

    this.videos=  data.videos;
    this.comments = data.comments;
    this.persons = data.persons;
    this.movie = data.movie;
  }
}

let store;
export function initializeStore(initialData = null, rootStore) {

  //const _store = store ?? /* new SSRStore(rootStore); */ rootStore.ssrStore

  const _store = rootStore.ssrStore;

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (isServer) return _store;
  if (!store) store = _store;

  return _store;
}

export function useStore(initialState = null, rootStore) {
    const store = useMemo(() => initializeStore(initialState, rootStore), [initialState, rootStore]);
  return store;
}

export {SSRStore}

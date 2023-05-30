import { makeAutoObservable } from 'mobx';
import { runInAction } from 'mobx';
import router from 'next/router';
import { enableStaticRendering } from 'mobx-react-lite';

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
    minRating: Filter[];
    numRatings: Filter[];
    order: Filter[];
  }

  const isServer = typeof window === 'undefined';
  enableStaticRendering(isServer);


  class MoviesStore {
    rootStore
    limit=30;
    page=1;
    selectedFilters:SelectedFilters = {
      genres: [],
      countries: [],
      actors:[],
      directors:[],
      minRating:[],
      numRatings:[],
      order:[]
    };
    baseUrl = `http://localhost:3003/info?limit=${this.limit}&page=${this.page}`;
    actorsUrl = 'http://localhost:3005/persons/actors?keywords='
    directorsUrl = 'http://localhost:3005/persons/directors?keywords='

    url = this.baseUrl;


    actors: Filter[] = [];
    directors:Filter[] = [];
    minRating = [];
    numRatings = [];
    order = [];

    movies:any = [];

 
  
    constructor(rootStore) {
      this.rootStore = rootStore;
      makeAutoObservable(this);
    }



    pagination = () => {
      
      this.page = this.page + 1;
      this.url = `http://localhost:3003/info?limit=${this.limit}&page=${this.page}`;
    
    } 

    updateSelectedFiltersFromUrl(urlArray) {

      console.log(urlArray)
   
/*         this.resetMovies(); */


      
        const filterTypes = Object.keys(this.selectedFilters);
   
        /* Работает для жанров, стран, и ползунков
          Остальные фильтры не понимаю как сделать.

          Можно убирать их из url
        */

        urlArray.slug.forEach((element:any) => {
          const separatedValues = element.split('+');
    
          separatedValues.forEach(value => {
            if (value.startsWith('minRating') || value.startsWith('numRatings')) {
              const [filterType, filterValue] = value.split('=');
              this.selectedFilters[filterType].push({
                id: filterValue,
                name: `${filterType}=${filterValue}`
              });
            } else {
              filterTypes.forEach(filterType => {
                 const matchingFilter = this.rootStore.ssrStore[filterType]?.find(filter => filter.nameRu === value);
      
                if (matchingFilter) {
                  this.selectedFilters[filterType].push({
                    name: matchingFilter.nameRu,
                    id: matchingFilter.id
                  });
                }
              })
            }
          })
        })
        this.updateUrl();  
        this.fetchData();  
         
      }

  
    handleButtonClick(name, id, type) {

      const index = this.selectedFilters[type].findIndex((filter) => filter.id === id);
      if (index !== -1) {
        this.selectedFilters[type].splice(index, 1);
      } else {
      if (type === 'order') {
        this.selectedFilters[type] = [{ id, name }];
      } else {
        this.selectedFilters[type].push({ id, name });
      }
      }

      this.updateUrl();
      this.fetchData();
      this.generateUrl(); 
     }

    handleMinRatingChange(value: number, type: string) {
      this.selectedFilters[type] = [{id: `${[value]}`, name:`${type}=${value}`}];

      this.updateUrl();
      this.fetchData();
      this.generateUrl();


    }
    
    async fetchFilters(url: string, property: string) {
      const response = await fetch(url);
      const data = await response.json();
      runInAction(() => {
        this[property] = data;
      });
    }
  
    generateUrl() {
      let path = 'all';
      const hasFilters = Object.values(this.selectedFilters).some(
        (filters) => filters.length > 0
      );

      if (hasFilters) {
        const filterStrings = Object.keys(this.selectedFilters)
          .map((key) => {
            const filterValues = this.selectedFilters[key]
              .map((filter) => filter.name)
              .join('+');
            return filterValues;
          })
          .filter((str) => str.length > 0);
        path = filterStrings.join('/');
      }
      router.push(
        {
          pathname: `/movies/${path}`,
        },
        undefined,
        { shallow: true }
      );
    }
  
    generateRequest() {
      const filterStrings = Object.keys(this.selectedFilters)
        .filter(
          (key) =>
           this.selectedFilters[key].length > 0
        )
        .map((key) => {
            const filterValues = this.selectedFilters[key]
              .map((filter) => filter.id)
              .join(',');
            return `${key}=${filterValues}`;
          
        });
  
      return filterStrings.join('&');
    }

    updateUrl() {
      this.url = `${this.baseUrl}&${this.generateRequest()}`;
    }

    resetMovies() {
      this.rootStore.ssrStore.movies = { count: 0, rows: [] }
    }

    async fetchData() {
      const response = await fetch(this.url);
      const data = await response.json();

      runInAction(() => {
          this.rootStore.ssrStore.setMovies(data, 'movies');
      });
    }

    
    async fetchPersons(keywords) {

      const response = await fetch(`${this.actorsUrl}${keywords}`);
      const data = await response.json();

      runInAction(() => {
        this.actors = data;
      });
    }
    async fetchDirectors(keywords) {

      const response = await fetch(`${this.directorsUrl}${keywords}`);
      const data = await response.json();

      runInAction(() => {
        this.directors = data;
      });
    }
}



export {MoviesStore};
import { makeAutoObservable, toJS } from 'mobx';
import { runInAction } from 'mobx';
import router from 'next/router';
import { enableStaticRendering } from 'mobx-react-lite';

  interface Filter {
    name: string;
    id: string | number;
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
    page:Filter[];
  }

  const isServer = typeof window === 'undefined';
  enableStaticRendering(isServer);


  class MoviesStore {
    rootStore
    limit= 35;
    page=1;
    selectedFilters:SelectedFilters = {
      genres: [],
      countries: [],
      actors:[],
      directors:[],
      minRating:[],
      numRatings:[],
      order:[],
      page:[]
    };
    filterTypes:string[];

    baseUrl = `http://192.168.0.103:3003/info?limit=${this.limit}`;
    actorsUrl = 'http://192.168.0.103:3005/persons/actors?keywords='
    directorsUrl = 'http://192.168.0.103:3005/persons/directors?keywords='

    url = this.baseUrl;

    sortTypes:Filter[] =[];

    actors: Filter[] = [];
    directors:Filter[] = [];
    minRating = [];
    numRatings = [];
    order = [];

    movies:any = [];

 
  
    constructor(rootStore) {
      this.rootStore = rootStore;
      this.resetFilters = this.resetFilters.bind(this);
      this.filterTypes = Object.keys(this.selectedFilters);
      makeAutoObservable(this);
    }


    updateSelectedFiltersFromUrl(urlArray) {
      if (urlArray.slug) {
        if (urlArray.slug === 'all') {
          this.resetFilters();
        }
        urlArray.slug.forEach((element: any) => {
          const separatedValues = element.split('+');
    
          separatedValues.forEach(value => {
            if (value.startsWith('minRating') || value.startsWith('numRatings')) {
              const [filterType, filterValue] = value.split('=');
              this.selectedFilters[filterType].push({
                id: filterValue,
                name: `${filterType}=${filterValue}`
              });
            } else if (value.startsWith('actors') || value.startsWith('directors')) {
              const [filterType, filterValue, test] = value.split('=');
              const [name, id] = filterValue.split(',id=');

              this.selectedFilters[filterType].push({
                id: parseInt(test),
                name: name
              });
              
            } else if(value.startsWith('page')){
              const [filterType, filterValue] = value.split('=');
                this.selectedFilters[filterType] = [{name: `${filterType}=${filterValue}`, id:filterValue}]
            } 
            else {
              this.filterTypes.forEach(filterType => {
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
      }
      return this.selectedFilters;
    }

      resetFilters(isServerSide= false){
        this.filterTypes.forEach(filterType => {
          if (Array.isArray(this.selectedFilters[filterType])) {
            this.selectedFilters[filterType].length = 0;
          }
          if(!isServerSide){
            router.push(
              {
                pathname: `/movies/all`,
              },
              undefined,
            );
          }
        });
    }

    pagination(){
      this.page = this.page = this.page + 1;
      console.log(this.page)
      this.handleButtonClick(`page=${this.page}`, this.page, 'page', true);
    }
  
    handleButtonClick(name, id, type, pagination = false) {
      if (type !== 'page') {
        this.page = 1;
      }
    
      const index = this.selectedFilters[type].findIndex((filter) => filter.id === id);
      if (index !== -1 && !pagination) {
        this.selectedFilters.page.length = 0
        this.selectedFilters[type].splice(index, 1);
      } else {
        if (type === 'order' || type === 'page') {
          this.selectedFilters[type] = [{ id, name }];
          if (type === 'order' ) {
            this.selectedFilters.page.length = 0
          }
        } else {
          this.selectedFilters.page.length = 0
          this.selectedFilters[type].push({ id, name });
        }
      }
    
      this.generateRequest();
    }

    handleMinRatingChange(value: number, type: string) {
      this.selectedFilters.page.length = 0
      this.selectedFilters[type] = [{id: `${[value]}`, name:`${type}=${value}`}];

      this.generateRequest();
    }


/*     async fetchFilters(url: string, property: string) {
      const response = await fetch(url);
      const data = await response.json();
      runInAction(() => {
        this[property] = data;
      });
    } */
  
    generateRequest() {
      let path = 'all';
      const hasFilters = Object.values(this.selectedFilters).some(
        (filters) => filters.length > 0
      );
    
      if (hasFilters) {
        const filterStrings = Object.keys(this.selectedFilters)
          .map((key) => {
            if (key === 'directors' || key === 'actors') {
              if (this.selectedFilters[key].length > 0) {
                let filterValues = this.selectedFilters[key]
                  .map((filter) => `${filter.name},id=${filter.id}`)
                  .join('+');
                filterValues = filterValues.replace(/\s+/g, '');
                return `${key}=${filterValues}`;
              }
            } else {
              let filterValues = this.selectedFilters[key]
                .map((filter) => filter.name)
                .join('+');
              return filterValues;
            }
          })
          .filter((str) => str?.length > 0);
        path = filterStrings.join('/');
      }
      router.push(
        {
          pathname: `/movies/${path}`,
        },
      );
    }
    
  
    generateUrl() {
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

/*     updateUrl() {
      this.url = `${this.baseUrl}&${this.generateRequest()}`;
    } */

/*     resetMovies() {
      this.rootStore.ssrStore.movies = { count: 0, rows: [] }
    } */

/*     async fetchData(pagination = false) {

      const response = await fetch(this.url);
      const data = await response.json();

      runInAction(() => {
          this.rootStore.ssrStore.setMovies(data, 'movies', pagination);
      });
    } */

    
   async fetchData1(url: string, name: string, keywords: string) {
      const response = await fetch(`${url}${keywords}`);
      const data = await response.json();
    
      runInAction(() => {
        this[name] = data;
      });
    } 
}



export {MoviesStore};
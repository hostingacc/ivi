import { makeAutoObservable, toJS } from 'mobx';
import { runInAction } from 'mobx';
import router, { useRouter } from 'next/router';
import { Movies } from '@/components/interfaces/movie';

  interface Filter {
    id: string;
    nameRu: string;
  }


  class MoviesStore {
    limit=5;
    page=1;
    selectedFilters = {
      genres: [],
      countries: [],
      actors:[],
      directors:[],
      minRating:[],
      numRating:[],
      order:[]
    };
    baseUrl = `http://localhost:3003/info?limit=${this.limit}&page=${this.page}`;
    genresUrl = 'http://localhost:3001/movies/filters/genres'
    countriesUrl = 'http://localhost:3001/movies/filters/countries'
    actorsUrl = 'http://localhost:3005/persons/actors?keywords='
    directorsUrl = 'http://localhost:3005/persons/directors?keywords='

    url = this.baseUrl;
    movies: Movies = {count: 0 , rows: []};
    genres: Filter[] = [];
    countries: Filter[] = [];
    actors: Filter[] = [];
    directors:Filter[] = [];
    minRating = [];
    numRating= [];
    order = [];
  
    constructor() {
      makeAutoObservable(this);
      this.fetchData();
      this.fetchFilters(this.genresUrl, 'genres');
      this.fetchFilters(this.countriesUrl, 'countries');
      /* this.updateSelectedFiltersFromUrl(); */
      this.fetchFilters(this.genresUrl, 'genres');
    }

/*     async loadFilters(urlArray){
      await this.fetchFilters(this.genresUrl, 'genres');
      this.updateSelectedFiltersFromUrl(urlArray);

    } */

    resetFilters() {
      this.selectedFilters = {
        genres: [],
        countries: [],
        actors:[],
        directors:[],
        minRating:[],
        numRating:[],
        order:[],
      };
    }

    pagination = () => {
    /*   this.limit = this.limit + 5; */
      this.page = this.page + 1;
      this.url = `http://localhost:3003/info?limit=${this.limit}&page=${this.page}`;
      console.log(this.baseUrl)
      this.fetchData();

    }

/*     updateSelectedFiltersFromUrl(urlArray) {
      console.log(urlArray.slug)
      const separatedArray = urlArray?.slug?.map(element => element.split('+')).flat();

      console.log(toJS(this.genres))
  
      separatedArray?.forEach((element:any) => {
        const matchingGenre = this.genres.find(genre => genre.nameRu === element);
        if (matchingGenre) {
          this.selectedFilters.genres.push({
            nameRu: matchingGenre.nameRu,
            nameEn: matchingGenre.nameEn,
            id: matchingGenre.id
          });
        }
      })
      console.log(toJS(this.selectedFilters))
      this.fetchData();
      
      console.log(toJS(this.movies))

    } */
  
    handleButtonClick(name, id, type) {

      const index = this.selectedFilters[type].findIndex((filter) => filter.id === id);
      if (index !== -1) {
        this.selectedFilters[type].splice(index, 1);
      } else {
      if (type === 'year') {
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
      this.selectedFilters[type] = value;
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
      console.log(toJS(this.selectedFilters))
      let path = 'all';
      const hasFilters = Object.values(this.selectedFilters).some(
        (filters) => filters.length > 0
      );
      if (hasFilters || this.selectedFilters.minRating) {
        const filterStrings = Object.keys(this.selectedFilters)
          .map((key) => {
            if (/* key === 'minRating' || */ key=== 'numRatings') {
              return `${key}=${this.selectedFilters[key]}`;
            }
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
        .filter((key) =>/*  key === 'minRating' || */ key === 'numRatings' || this.selectedFilters[key].length > 0)
        .map((key) => {
          if (/* key === 'minRating' ||  */key === 'numRatings') {
            return `${key}=${this.selectedFilters[key]}`;
          } else {
            const filterValues = this.selectedFilters[key].map((filter) => filter.id).join(",");
            return `${key}=${filterValues}`;
          }
        });
      return filterStrings.length > 0 ? `?${filterStrings.join("&")}` : "";
    }

    updateUrl() {
      this.url = `${this.baseUrl}/${this.generateRequest()}`;
    }

    async fetchData() {

      const response = await fetch(this.url);
      const data = await response.json();

      runInAction(() => {
        this.movies.count = data.count;
        this.movies.rows = [...this.movies.rows, ...data.rows];
        console.log(toJS(this.movies))
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


export const moviesStore = new MoviesStore();
import { makeAutoObservable, toJS } from "mobx";
import { runInAction } from "mobx";
import router from "next/router";
import { enableStaticRendering } from "mobx-react-lite";

interface Filter {
  name: string;
  id: string | number;
  nameRu: string;
}

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

class MoviesStore {
  rootStore;
  limit = 35;
  page = 1;

  filterTypes: string[];
  envUrl = process.env.NEXT_PUBLIC_API_URL;

  baseUrl = `${this.envUrl}:3003/info?limit=${this.limit}`;
  actorsUrl = `${this.envUrl}:3005/persons/actors?keywords=`;
  directorsUrl = `${this.envUrl}:3005/persons/directors?keywords=`;

  url = this.baseUrl;

  sortTypes: Filter[] = [];

  actors: Filter[] = [];
  directors: Filter[] = [];
  minRating = [];
  numRatings = [];
  order = [];
  movies: any = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.resetFilters = this.resetFilters.bind(this);
    this.filterTypes = Object.keys(this.rootStore.ssrStore.selectedFilters);

    makeAutoObservable(this);
  }

  updateSelectedFiltersFromUrl(url){
    if (typeof window !== "undefined") {
      this.resetFilters(false);
    }
    if(url.slug){
      let filtersWithoutKeys: string[] = [];
      let filtersWithKeys: string[] = [];
      
      url.slug.forEach(element => {
        if (element.includes("=")) {
          filtersWithKeys.push(element);
          } else {
            let subparts = element.split("+");
              filtersWithoutKeys.push(...subparts);
            }
      });

      this.addFiltersWithoutKey(filtersWithoutKeys);
      this.addFiltersWithKey(filtersWithKeys);
      return this.rootStore.ssrStore.selectedFilters;
    }
  }

    addFiltersWithoutKey(array: string[]) {    
      this.filterTypes.forEach(filterType => {
        array.forEach(value => {
          const matchingFilter = this.rootStore.ssrStore[filterType]?.find(
            filter => filter.nameRu === value
          );
          if (matchingFilter) {
            this.rootStore.ssrStore.selectedFilters[filterType].push({
              name: matchingFilter.nameRu,
              id: matchingFilter.id,
            });
          }
        });
      });

    }

    addFiltersWithKey(array: string[]) {
      array.forEach(element => {
        let [key, value] = element.split("=");
        if (this.rootStore.ssrStore.selectedFilters.hasOwnProperty(key)) {
           this.rootStore.ssrStore.selectedFilters[key].push({
              name: key,
              id: value
           })      
        }
      });
    }

  resetFilters(isServerSide = false) {
    this.page = 1;
    this.filterTypes.forEach((filterType) => {
      if (Array.isArray(this.rootStore.ssrStore.selectedFilters[filterType])) {
        this.rootStore.ssrStore.selectedFilters[filterType].length = 0;
      }
      if (!isServerSide) {
        router.push(
          {
            pathname: `/movies/all`,
          },
          undefined
        );
      }
    });
  }

  pagination() {
    this.page = this.page = this.page + 1;

    this.handleButtonClick(`page=${this.page}`, this.page, "page", true);
  }

  handleButtonClick(name, id, type, pagination = false) {
    if (type !== "page") {
      this.page = 1;
    } else {
      this.rootStore.ssrStore.selectedFilters.page = [
        { id: this.page, name: `page=${this.page}` },
      ];
    }

    const index = this.rootStore.ssrStore.selectedFilters[type].findIndex(
      (filter) => filter.id === id
    );
    if (index !== -1 && !pagination) {
      this.rootStore.ssrStore.selectedFilters.page.length = 0;
      this.rootStore.ssrStore.selectedFilters[type].splice(index, 1);
    } else {
      if (type === "order" || type === "page") {
        this.rootStore.ssrStore.selectedFilters[type] = [{ id, name }];
        if (type === "order") {
          this.rootStore.ssrStore.selectedFilters.page.length = 0;
        }
      } else {
        this.rootStore.ssrStore.selectedFilters.page.length = 0;
        this.rootStore.ssrStore.selectedFilters[type].push({ id, name });
      }
    }

    this.generateRequest();
  }

  handleMinRatingChange(value: number, type: string) {
    this.rootStore.ssrStore.selectedFilters.page.length = 0;
    this.rootStore.ssrStore.selectedFilters[type] = [
      { id: `${[value]}`, name: `${type}=${value}` },
    ];

    this.generateRequest();
  }

  generateRequest() {
    let path = "all";
    const hasFilters = Object.values(
      this.rootStore.ssrStore.selectedFilters
    ).some((filters: any) => filters.length > 0);

    if (hasFilters) {
      const filterStrings = Object.keys(this.rootStore.ssrStore.selectedFilters)
        .map((key) => {
          if (key === "directors" || key === "actors") {
            if (this.rootStore.ssrStore.selectedFilters[key].length > 0) {
              let filterValues = this.rootStore.ssrStore.selectedFilters[key]
                .map((filter) => `${filter.name},id=${filter.id}`)
                .join("+");
              filterValues = filterValues.replace(/\s+/g, "");
              return `${key}=${filterValues}`;
            }
          } else {
            let filterValues = this.rootStore.ssrStore.selectedFilters[key]
              .map((filter) => filter.name)
              .join("+");
            return filterValues;
          }
        })
        .filter((str) => str?.length > 0);
      path = filterStrings.join("/");
    }

    router.push(
      {
        pathname: `/movies/${path}`,
      },
      undefined,
      { scroll: false }
    );
  }

  generateUrl() {
    const filterStrings = Object.keys(this.rootStore.ssrStore.selectedFilters)

      .filter((key) => this.rootStore.ssrStore.selectedFilters[key].length > 0)
      .map((key) => {
        const filterValues = this.rootStore.ssrStore.selectedFilters[key]
          .map((filter) => filter.id)
          .join(",");

        return `${key}=${filterValues}`;
      });

    return filterStrings.join("&");
  }

  async fetchData1(url: string, name: string, keywords: string) {
    const response = await fetch(`${url}${keywords}`);
    const data = await response.json();

    runInAction(() => {
      this.rootStore.ssrStore[name] = data;
    });
  }
}

export { MoviesStore };

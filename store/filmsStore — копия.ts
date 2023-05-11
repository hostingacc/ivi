import { makeAutoObservable } from 'mobx';
import { runInAction } from 'mobx';
import { useRouter } from 'next/router';

interface UniqueValue {
    id: number;
    nameRu: string;
    nameEn: string | null;
  }

interface Film {
    id: number;
    kinopoiskId: number;
    nameRu: string;
    nameEn: string;
    ratingKinopoiskVoteCount: number;
    ratingKinopoisk: number;
    year: number;
    type: string;
    filmLength: number;
    posterUrl: string;
    posterUrlPreview: string;
    genres: UniqueValue[];
    countries: UniqueValue[];
  }
  
  interface Films {
    rows: Film[];
  }


class FilmStore{
    films: Films = { rows: [] };
    genres:  UniqueValue[] = [];
    countries:  UniqueValue[] = [];
    url = 'http://localhost:3003/info?';
    hasFetchedUniqueFilters = false;

    filters: { name: string; id: number; filterType: string }[] = [];

    constructor() {
      makeAutoObservable(this);

    }
  
    fetchFilms() {
        fetch(this.url)
          .then(response => response.json())
          .then(data => {
            runInAction(() => {
              this.films = data;
            });
      
            if (!this.hasFetchedUniqueFilters) {
              this.genres = this.getUniqueFilter(data, 'genres');
              this.countries = this.getUniqueFilter(data, 'countries');
              this.hasFetchedUniqueFilters = true;
            }
          });
      }

      /* Оказывается api дает массив жанров и стран, удалить */

    getUniqueFilter(data, property:string) {
        const unique = data?.rows
          .reduce(
            (acc, row) =>
              acc.concat(
                row[property].map((item) => ({ nameRu: item.nameRu, id: item.id }))
              ),
            []
          )
          .filter(
            (value, index, self) =>
              index === self.findIndex((t) => t.nameRu === value.nameRu)
          ); 
        return unique;
      }

      toggleFilter(name: string, id: number, filterType: string) {
        const index = this.filters.findIndex((filter) => filter.name === name && filter.id === id);
        if (index !== -1) {
          this.filters.splice(index, 1);
        } else {
          this.filters.push({ name, id, filterType });
        }
       
        this.updateUrl();
      }

      updateUrl() {
        const url = new URL(this.url);
        for (const filter of this.filters) {
          const values = url.searchParams.get(filter.filterType)?.split(',') || [];
          values.push(filter.id.toString());
          url.searchParams.set(filter.filterType, values.join(','));
        }
        this.url = url.toString();
      }


/*       addFilter(type: string, id: number) {
        let testurl = this.url;
        const typeIndex = testurl.indexOf(`${type}=`);
        if (typeIndex !== -1) {
          const typeString = testurl.slice(typeIndex);
          const typeArray = typeString.split('=')[1].split(',');
          const idIndex = typeArray.indexOf(id.toString());
          if (idIndex !== -1) {
            typeArray.splice(idIndex, 1);
            if (typeArray.length === 0) {
                testurl = testurl.slice(0, typeIndex - 1);
            } else {
              testurl = testurl.slice(0, typeIndex) + `${type}=` + typeArray.join(',');
            }
          } else {
            testurl += `,${id}`;
          }
        } else {
          testurl += `&${type}=${id}`;
        }
        this.url = testurl;
  
      } */

}


export const filmStore = new FilmStore();
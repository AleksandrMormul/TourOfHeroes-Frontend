import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from '../message.service';
import { ApiService } from '../api.service';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class HeroService {

  heroesUrl = environment.apiUrl;

  constructor(
    private http: ApiService,
    private messageService: MessageService) { }

  getHeroes() {
    return this.http.get(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHeroNo404<Data>(id: number) {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get(url)
      .pipe(
        map(heroes => heroes[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  getHero(id: string): Observable<Hero> {
    const url = `${this.heroesUrl}/api/heroes/${id}`;
    return this.http.get(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  searchHeroes(term: string) {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  addHero(hero: Hero) {
    return this.http.post(`${this.heroesUrl}/api`, hero).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero._id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero | number) {
    const id = typeof hero === 'number' ? hero : hero._id;
    const url = `${this.heroesUrl}/api/heroes/${id}`;

    return this.http.delete(url/*, this.httpOptions*/).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  updateHero(hero: Hero) {
    return this.http.put(`${this.heroesUrl}/api`, hero).pipe(
      tap(_ => this.log(`updated hero id=${hero._id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

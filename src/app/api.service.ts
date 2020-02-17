import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators'
import { Pokemons } from 'src/model/pokemons'

const pokeApi = 'https://pokeapi.co/api/v2/pokemon'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemons[]> {
    const url = `${pokeApi}/?limit=50`
    return this.http.get<Pokemons[]>(url)
      .pipe(
        tap(_ => console.log('leu os pokemos')),
        catchError(this.handleError('getPokemons', []))
      )
  }

  getPokemon(name: String): Observable<Pokemons> {
    const url = `${pokeApi}/${name}`
    return this.http.get<Pokemons>(url).pipe(
      tap(_ => console.log(`leu o pokemos name=${name}`)),
      catchError(this.handleError<Pokemons>(`getPokemon name=${name}`))
    )
  }

  private handleError<T> (operation = 'operation', result ? : T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }
}
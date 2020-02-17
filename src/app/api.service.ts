import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap, map } from 'rxjs/operators'
import { Pokemons } from 'src/model/pokemons'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

const apiUrl = 'http://pokeapi.co/api/v2/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemons[]> {
    const url = `${apiUrl}pokemon/?limit=20`
    return this.http.get<Pokemons[]>(url)
      .pipe(
        tap(pokemon => console.log('leu os produtos')),
        catchError(this.handleError('getPokemons', []))
      )
  }

  getPokemon(name: String): Observable<Pokemons> {
    const url = `${apiUrl}pokemon/${name}`
    return this.http.get<Pokemons>(url).pipe(
      tap(_ => console.log(`leu o produto name=${name}`)),
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
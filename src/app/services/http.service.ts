import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
  private url2: any = 'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100'
  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }

  get apiListAllPokemons2(): Observable<any> {
    return this.http.get<any>(this.url2).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons2: any) => {
          this.apiGetPokemons2(resPokemons2.url).subscribe(
            res => resPokemons2.status = res
          )
        })
      })
    )
  }

  public apiGetPokemons2(url2: string): Observable<any> {
    return this.http.get<any>(url2).pipe(
      map(
        res => res
      )
    )
  }



}

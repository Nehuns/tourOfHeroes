import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IHero } from './hero';
import { Observable } from 'rxjs';
import { filter, find } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HeroService {
    private _url: string = "/assets/data/hero.json";
    private heroesUrl = 'http://localhost:3000/heroes';


    constructor(private http: HttpClient) { }

    getHeroes(): Observable<IHero[]> {
        return this.http.get<IHero[]>(this.heroesUrl);
    }

    // getHero(id: number) : Observable<IHero> {
    //     return this.http.get<IHero>(this._url);
    // }
    // .pipe(
    //   filter(c => c.id == this.heroId)
    // );
    getHero(id: number): Observable<IHero> {
        //return this.http.get<IHero>(this._url).pipe(filter(c=> c.id == id));
        //return this.http.get<IHero>(this._url).pipe(filter(c => c.id == id))[0];
        return this.http.get<IHero>(this.heroesUrl + "/" + id);

    }

    addHero(hero): Observable<IHero> {
        return this.http.post<IHero>(this.heroesUrl, hero, httpOptions);
    }

    updateHero(hero: IHero): Observable<IHero> {
        return this.http.put<IHero>(this.heroesUrl + "/" + hero.id, hero, httpOptions);
    }

    deleteHero(hero): Observable<IHero> {
        let id = hero.id;
        return this.http.delete<IHero>(this.heroesUrl + "/" + id, httpOptions);
    }

    searchHero(name: string): Observable<IHero[]> {
        return this.http.get<IHero[]>(this.heroesUrl + "?name=" + name);
    }
}